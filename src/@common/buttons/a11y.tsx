import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/tailwind";

export const A11y = ({
  children,
  className,
  type = "button",
  ...props
}: {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={cn(
        "w-full",
        "inline-flex",
        "flex-row",
        "items-center",
        "justify-center",
        "m-0",
        "px-2",
        "py-4",
        "no-underline",
        "cursor-pointer",
        "disabled:cursor-not-allowed",
        "rounded-lg",
        "select-none",
        "outline-info",
        "box-border",
        "font-medium",
        "text-base",
        "tracking-wider",
        "border-0",
        className
      )}
      type={type}
    >
      {children}
    </button>
  );
};
