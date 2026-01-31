import * as React from "react";

import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

type CustomTextAreaProps = React.ComponentProps<typeof Textarea> & {
  error?: string;
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
};

const CustomTextArea = React.forwardRef<
  HTMLTextAreaElement,
  CustomTextAreaProps
>(
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
    const textareaId = id ?? React.useId();
    const errorId = error ? `${textareaId}-error` : undefined;

    return (
      <div className={cn("w-full ", containerClassName)}>
        {label ? (
          <label
            htmlFor={textareaId}
            className={cn("text-sm font-medium", labelClassName)}
          >
            {label}
          </label>
        ) : null}
        <Textarea
          id={textareaId}
          ref={ref}
          rows={2}
          className={cn(
            error && "border-destructive focus-visible:ring-destructive ",
            className,
            " ",
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          {...props}
        />
        {error ? (
          <p id={errorId} className="w-full text-sm text-destructive">
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);

CustomTextArea.displayName = "CustomTextArea";

export { CustomTextArea };
