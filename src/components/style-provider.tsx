"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
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

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [styleId, setStyleId] = useState<StyleId>("default");
  const { setTheme } = useTheme();

  // Restore from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as StyleId | null;
    if (stored && styles.some((s) => s.id === stored)) {
      applyStyleClass(stored);
      setStyleId(stored);
    }
  }, []);

  const applyStyleClass = useCallback((id: StyleId) => {
    const el = document.documentElement;
    // Remove all style classes
    ALL_STYLE_IDS.forEach((cls) => el.classList.remove(cls));
    // Add new one (skip for default)
    if (id !== "default") {
      el.classList.add(id);
    }
  }, []);

  const setStyle = useCallback(
    (id: StyleId) => {
      applyStyleClass(id);
      setStyleId(id);
      localStorage.setItem(STORAGE_KEY, id);

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
