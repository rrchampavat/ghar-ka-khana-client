import { cn } from "@/lib/utils";
import { Button as MantineButton, ButtonProps } from "@mantine/core";

interface BUTTON_PROPS extends ButtonProps {
  onClick?: () => void;
}

const Button = (props: BUTTON_PROPS) => {
  const {
    children = "Submit",
    color,
    compact: isCompact = false,
    disabled: isDisabled = false,
    fullWidth: isFullWidth = false,
    gradient,
    leftIcon,
    loaderPosition = "left",
    loaderProps,
    loading: isLoading = false,
    radius = "sm",
    rightIcon,
    size = "md",
    type = "button",
    uppercase: isUppercase = false,
    variant = "default",
    className,
    onClick,
    ...rest
  } = props;

  return (
    <MantineButton
      color={color}
      compact={isCompact}
      disabled={isDisabled}
      fullWidth={isFullWidth}
      gradient={gradient}
      leftIcon={leftIcon}
      loaderPosition={loaderPosition}
      loaderProps={loaderProps}
      loading={isLoading}
      radius={radius}
      rightIcon={rightIcon}
      size={size}
      type={type}
      uppercase={isUppercase}
      variant={variant}
      className={cn(
        "bg-primary font-normal text-white hover:bg-hover",
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </MantineButton>
  );
};

export default Button;
