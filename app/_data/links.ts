import { Brain, LayoutDashboard, Settings, TerminalSquare } from "lucide-react";
import { menuType } from "../_types/common";
const mainMenu = [
  {
    name: "Home",
    link: "/",
    logo: LayoutDashboard,
  },
  {
    name: "My Candidates",
    link: "/candidates",
    logo: TerminalSquare,
  },
  {
    name: "Interview Vault",
    link: "/interview-vault",
    logo: Brain,
  },

  {
    name: "Settings",
    link: "/settings",
    logo: Settings,
  },
];

const userMenu: menuType[] = [
  {
    name: "Account settings",
    link: "#",
  },
  {
    name: "Support",
    link: "/support",
  },
  {
    name: "Sign out",
    link: "#",
  },
];

const interviewMenu: menuType[] = [
  {
    name: "Interview Library",
    link: "/interview-library",
  },
  {
    name: "Question Bank",
    link: "/questions",
  },
  {
    name: "Resources",
    link: "/resources",
  },
];

export { mainMenu, userMenu, interviewMenu };
