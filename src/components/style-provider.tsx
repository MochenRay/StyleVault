"use client";

import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useSyncExternalStore,
} from "react";
import { useTheme } from "next-themes";
import { styles, getStyleById } from "@/data/styles";
import type { StyleId, StyleDefinition } from "@/data/styles";

interface StyleContextValue {
  currentStyle: StyleDefinition;
  setStyle: (id: StyleId) => void;
  allStyles: StyleDefinition[];
}

const StyleContext = createContext<StyleContextValue>({
  currentStyle: styles[0],
  setStyle: () => {},
  allStyles: styles,
});

const STORAGE_KEY = "stylevault-style";
const ALL_STYLE_IDS: StyleId[] = styles
  .filter((s) => s.id !== "default")
  .map((s) => s.id);
const STYLE_STORE_EVENT = "stylevault-style-change";

function readStoredStyle(): StyleId {
  if (typeof window === "undefined") {
    return "default";
  }

  const stored = localStorage.getItem(STORAGE_KEY) as StyleId | null;
  return stored && styles.some((style) => style.id === stored)
    ? stored
    : "default";
}

function subscribeToStyle(listener: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStyleChange = () => listener();
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      listener();
    }
  };

  window.addEventListener(STYLE_STORE_EVENT, handleStyleChange);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(STYLE_STORE_EVENT, handleStyleChange);
    window.removeEventListener("storage", handleStorage);
  };
}

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const styleId = useSyncExternalStore<StyleId>(
    subscribeToStyle,
    readStoredStyle,
    () => "default"
  );
  const { setTheme } = useTheme();

  const applyStyleClass = useCallback((id: StyleId) => {
    const el = document.documentElement;
    ALL_STYLE_IDS.forEach((cls) => el.classList.remove(cls));

    if (id !== "default") {
      el.classList.add(id);
    }
  }, []);

  useEffect(() => {
    applyStyleClass(styleId);
  }, [applyStyleClass, styleId]);

  const setStyle = useCallback(
    (id: StyleId) => {
      applyStyleClass(id);
      localStorage.setItem(STORAGE_KEY, id);
      window.dispatchEvent(new Event(STYLE_STORE_EVENT));

      // Auto-switch dark/light to the style's default mode
      const style = getStyleById(id);
      setTheme(style.defaultMode);
    },
    [applyStyleClass, setTheme]
  );

  const currentStyle = getStyleById(styleId);

  return (
    <StyleContext.Provider
      value={{ currentStyle, setStyle, allStyles: styles }}
    >
      {children}
    </StyleContext.Provider>
  );
}

export function useStyle() {
  return useContext(StyleContext);
}
