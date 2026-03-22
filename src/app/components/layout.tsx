import { SiteSidebar } from "@/components/layout/site-sidebar";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-7xl px-6">
      <SiteSidebar />
      <div className="flex-1 py-6 lg:pl-8">{children}</div>
    </div>
  );
}
