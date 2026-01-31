import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { FieldError } from "react-hook-form";
import { AlertCircleIcon } from "lucide-react";

type CustomInputProps = React.ComponentProps<typeof Input> & {
  error?: string | null;
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
};

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      error,
      label,
      containerClassName,
      labelClassName,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id ?? React.useId();
    const errorId = error ? `${inputId}-error` : undefined;

    return (
      <div className={cn("w-full relative", containerClassName)}>
        {label ? (
          <label
            htmlFor={inputId}
            className={cn("text-sm font-medium", labelClassName)}
          >
            {label}
          </label>
        ) : null}
        <Input
          id={inputId}
          ref={ref}
          className={cn(
            error && "border-destructive focus-visible:ring-destructive",
            className,
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          {...props}
        />
        {error ? (
          <span className="w-6 h-6 pt-2.5 absolute top-0 right-0 text-destructive animate-pulse">
            <AlertCircleIcon className="w-4 h-4 " />
          </span>
        ) : null}
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput";

export { CustomInput };
