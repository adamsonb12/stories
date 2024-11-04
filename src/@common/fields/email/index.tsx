import { TextInput, TextInputProps } from "../text-input";

export const EmailInput = ({
  placeholder = "Email",
  ...props
}: Omit<TextInputProps, "max" | "type">) => {
  return (
    <TextInput
      maxLength={160}
      name="email"
      autoComplete="email"
      placeholder={placeholder}
      {...props}
    />
  );
};
