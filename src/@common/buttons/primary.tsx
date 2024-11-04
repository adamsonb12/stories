import { ButtonHTMLAttributes, ReactNode } from "react";
import { A11y } from "./a11y";
import { cn } from "../../utils/tailwind";

export const PrimaryButton = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <A11y className={cn("bg-primary text-white", className)} {...props}>
      {children}
    </A11y>
  );
};
