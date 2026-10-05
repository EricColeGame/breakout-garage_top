import type { LucideIcon } from "lucide-react";
import { BookOpen, Car, Monitor, Rocket, TrendingUp, Users, Wrench } from "lucide-react";

export type NavItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

/**
 * 导航配置（分类 slug 与 content/<locale>/ 子目录名、en.json nav 键一一对应）
 * key 为翻译键，path 为 URL；二者不可混用。
 */
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Wrench, isContentType: true },
  { key: "vehicles", path: "/vehicles", icon: Car, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Monitor, isContentType: true },
  { key: "release", path: "/release", icon: Rocket, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
