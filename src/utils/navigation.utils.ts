import { menuConfig } from "../config/menu.config";

export function getPageTitle(pathname: string): string {
  const menuItem = menuConfig.find((item) => {
    if (item.path === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(item.path);
  });

  return menuItem?.label ?? "Dashboard";
}