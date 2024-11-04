import { useState } from "react";
import { TextInput, TextInputProps } from "../text-input";
import { A11y } from "../../buttons/a11y";

export const PasswordInput = ({
  placeholder = "Password",
  ...props
}: Omit<TextInputProps, "type">) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <TextInput
        maxLength={100}
        name="password"
        autoComplete="password"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...props}
      />
      <A11y
        className="absolute right-0 top-0 bottom-0 px-3 rounded-r-lg"
        onClick={() => setShowPassword(!showPassword)}
      >
        <div>TODO: eye</div>
      </A11y>
    </div>
  );
};
