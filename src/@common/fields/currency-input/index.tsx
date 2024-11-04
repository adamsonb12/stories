import { cn } from "../../../utils/tailwind";
import { NumberInput, NumberInputProps } from "../number";

export const CurrencyInput = ({ className, ...props }: NumberInputProps) => {
  return (
    <div className="relative grid">
      <div className="absolute top-0 bottom-0 left-5 flex flex-col justify-center h-full">
        <span className="text-black text-base">$</span>
      </div>
      <NumberInput className={cn("pl-9", className)} {...props} />
    </div>
  );
};
