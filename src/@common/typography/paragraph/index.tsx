import { ReactNode } from "react";
import styles from "./style.module.css";
import { cn } from "../../../utils/tailwind";

export const Paragraph = ({ children }: { children: ReactNode }) => {
  return (
    <p
      className={cn(
        "text-black",
        "text-base",
        "font-normal",
        "leading-7",
        "m-0",
        styles.paragraph
      )}
    >
      {children}
    </p>
  );
};
