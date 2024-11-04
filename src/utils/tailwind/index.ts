import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export const COLORS = fullConfig.theme.colors;
