import { cn } from "../../../utils/tailwind";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputState?: "error" | "normal" | "success";
  className?: string;
}

export const TextInput = ({
  inputState = "normal",
  className = "",
  type = "text",
  ...inputProps
}) => {
  return (
    <input
      type={type}
      {...inputProps}
      className={cn(
        "w-full bg-transparent outline-info-500 px-5 py-4 border rounded-lg border-solid text-black text-base placeholder:text-primary-300",
        "disabled:cursor-not-allowed disabled:bg-primary-200",
        inputState === "normal"
          ? "border-primary-400"
          : inputState === "success"
            ? "border-success"
            : "border-danger",
        className
      )}
    />
  );
};
