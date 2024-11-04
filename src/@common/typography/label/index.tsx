import { ReactNode } from "react";
import { cn } from "../../../utils/tailwind";

export const Label = ({ children }: { children: ReactNode }) => {
  return (
    <label
      className={cn("text-black", "text-sm", "cursor-pointer", "font-light")}
    >
      {children}
    </label>
  );
};
