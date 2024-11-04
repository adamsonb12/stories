import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/tailwind";

export interface FieldProps {
  children: ReactNode;
  label?: string;
  clarifier?: string;
  errorMessage?: string;
  disabled?: boolean;
  className?: string;
}

export const Field = ({
  children,
  disabled = false,
  label,
  clarifier,
  errorMessage,
  className,
  ...props
}: FieldProps) => {
  return (
    <FieldWrapper className={className} {...props}>
      {label && (
        <FieldLabel hasError={!!errorMessage} disabled={disabled}>
          {label}
        </FieldLabel>
      )}
      {children}
      {clarifier && !errorMessage && (
        <FieldClarifier>{`*${clarifier}`}</FieldClarifier>
      )}
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
    </FieldWrapper>
  );
};

export const FieldWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={cn("grid w-full gap-1", className)}>{children}</div>;
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export const FieldError = ({ children }: { children: ReactNode }) => {
  return (
    <motion.p
      {...framer_error}
      className="w-full text-danger-900 pr-2 text-right text-sm"
    >
      {children}
    </motion.p>
  );
};

export const FieldLabel = ({
  children,
  hasError = false,
  disabled = false,
}: {
  children: ReactNode;
  hasError?: boolean;
  disabled?: boolean;
}) => {
  return (
    <p
      className={`ml-2 text-sm text-black ${
        disabled ? "text-primary-300" : ""
      } ${hasError ? "text-danger-900" : ""}`}
    >
      {children}
    </p>
  );
};

export const FieldClarifier = ({ children }: { children: ReactNode }) => {
  return <p className="ml-2 text-xs text-primary-300">{children}</p>;
};
