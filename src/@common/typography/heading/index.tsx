import { ReactNode } from "react";
import { cn } from "../../../utils/tailwind";

export const Heading1 = ({
  className = "",
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-4xl",
        "m-0",
        "text-start",
        "tracking-tight",
        "font-semibold",
        "text-black",
        "md:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const Heading2 = ({
  className = "",
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-2xl",
        "m-0",
        "text-start",
        "tracking-tight",
        "font-medium",
        "text-black",
        "md:text-3xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const Heading3 = ({
  className = "",
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-xl",
        "m-0",
        "text-start",
        "tracking-tight",
        "font-medium",
        "text-black",
        "md:text-2xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const Heading4 = ({
  className = "",
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-xl",
        "m-0",
        "text-start",
        "tracking-tight",
        "font-normal",
        "text-black",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const Heading5 = ({
  className = "",
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-xl",
        "m-0",
        "text-start",
        "tracking-tight",
        "font-normal",
        "text-black",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const Heading6 = ({
  className = "",
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-base",
        "m-0",
        "text-start",
        "tracking-tight",
        "font-normal",
        "text-black",
        className
      )}
    >
      {children}
    </h1>
  );
};
