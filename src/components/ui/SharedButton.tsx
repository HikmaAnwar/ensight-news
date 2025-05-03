import { Button, ButtonProps } from "@mantine/core";
import { forwardRef } from "react";

interface SharedButtonProps extends ButtonProps {
  variant?: "filled" | "outline" | "light" | "subtle" | "default";
  color?:
    | "primary-accent"
    | "surface"
    | "surface-alt"
    | "surface-emphasis"
    | "text-primary"
    | string;
  rounded?: boolean;
  type?: "submit" | "button" | "reset"; // Add type prop for form buttons
}

export const SharedButton = forwardRef<HTMLButtonElement, SharedButtonProps>(
  (
    {
      variant = "filled",
      color = "primary-accent",
      children,
      className,
      rounded = false,
      type, // Include type in destructured props
      ...props
    },
    ref
  ) => {
    return (
      <Button
        variant={variant}
        color={color}
        radius="md"
        type={type} // Pass type to Mantine Button
        className={`px-6 py-2 shadow-lg transition-all hover:shadow-[0_6px_15px_var(--color-shadow)] cursor-pointer ${
          variant === "filled" ? "text-text-light" : ""
        } ${rounded ? "rounded-2xl" : ""}
         ${className || ""}`}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

SharedButton.displayName = "SharedButton";
