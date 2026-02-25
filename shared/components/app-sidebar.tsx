import { Sidebar, SidebarContent } from "@/shared/components/ui/sidebar";

import { Languages, Sun, Moon } from "lucide-react";

const items = [
  {
    title: "Language",
    url: "#",
    icon: Languages,
  },
  {
    title: "Theme",
    url: "#",
    icon: Sun,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating" side="right">
      <SidebarContent />
    </Sidebar>
  );
}
