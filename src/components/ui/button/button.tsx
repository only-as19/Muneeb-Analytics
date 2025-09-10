import { Button as ShadcnButton } from "@/lib";
import type { ReactNode } from "react";
import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "destructive"
    | "ghost"
    | "link";
  isDisabled?: boolean;
  customClasses?: string;
  iconDirection?: "left" | "right";
  onclick?: (parameter?: any) => void;
  icon?: ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      icon,
      variant = "default",
      isDisabled = false,
      onClick,
      iconDirection = "right",
      customClasses = "",
      ...props
    },
    ref
  ) => {
    return (
      <ShadcnButton
        ref={ref}
        variant={variant}
        className={`relative cusros-pointer overflow-hidden ${customClasses}`}
        {...props}
        onClick={onClick}
      >
        <span>
          <span className="relative z-10 flex items-center gap-2">
            {iconDirection === "left" ? (
              <>
                {icon && icon}
                {label}
              </>
            ) : (
              <>
                {label}
                {icon && icon}
              </>
            )}
          </span>
        </span>
      </ShadcnButton>
    );
  }
);

export default Button;
