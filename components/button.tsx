import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
}

const Button = React.forwardRef<View, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled = false,
      onPress,
      children,
    },
    ref
  ) => {
    const baseStyles = "flex-row items-center justify-center rounded-lg";

    const variantStyles = {
      primary: {
        default: "bg-primary-500 dark:bg-primary-600",
        disabled: "bg-primary-200 dark:bg-primary-800",
        pressed: "bg-primary-600 dark:bg-primary-700",
      },
      secondary: {
        default: "bg-secondary-500 dark:bg-secondary-600",
        disabled: "bg-secondary-200 dark:bg-secondary-800",
        pressed: "bg-secondary-600 dark:bg-secondary-700",
      },
    };

    const sizeStyles = {
      sm: "px-4 py-2",
      md: "px-6 py-2.5",
      lg: "px-8 py-3",
    };

    const textSizeStyles = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    };

    return (
      <TouchableOpacity
        ref={ref}
        className={`
        ${baseStyles}
        ${variantStyles[variant].default}
        ${sizeStyles[size]}
        ${disabled ? variantStyles[variant].disabled : ""}
        ${disabled ? "opacity-50" : ""}
      `}
        onPress={onPress}
        disabled={disabled || isLoading}
        activeOpacity={0.8}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" className="mr-2" />
        ) : null}
        <Text
          className={`
          font-medium
          ${textSizeStyles[size]}
          text-white
          ${disabled ? "text-opacity-60" : ""}
        `}
        >
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
);

export default Button;
