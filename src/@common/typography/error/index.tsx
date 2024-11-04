import { ReactNode } from "react";
import { cn } from "../../../utils/tailwind";

export const ErrorLabel = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={cn("text-sm", "cursor-pointer", "font-light", "color-danger")}
    >
      {children}
    </div>
  );
};
