import { cn } from "@/lib/utils";
import { Button as NextUIButton, type ButtonProps } from "@nextui-org/react";

const Button = (props: ButtonProps) => {
  const {
    children,
    variant = "ghost",
    color = "primary",
    size = "md",
    radius = "sm",
    startContent,
    endContent,
    spinner,
    spinnerPlacement = "start",
    fullWidth: isFullWidth = false,
    isIconOnly = false,
    isDisabled = false,
    isLoading = false,
    disableRipple: isDisableRipple = false,
    disableAnimation: isDisableAnimation = false,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    onPressUp,
    onKeyDown,
    onKeyUp,
    onClick,
    className,
    ...restProps
  } = props;

  return (
    <NextUIButton
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      startContent={startContent}
      endContent={endContent}
      spinner={spinner}
      spinnerPlacement={spinnerPlacement}
      fullWidth={isFullWidth}
      isIconOnly={isIconOnly}
      isDisabled={isDisabled}
      isLoading={isLoading}
      disableRipple={isDisableRipple}
      disableAnimation={isDisableAnimation}
      onPress={onPress}
      onPressStart={onPressStart}
      onPressEnd={onPressEnd}
      onPressChange={onPressChange}
      onPressUp={onPressUp}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onClick={onClick}
      className={cn(className)}
      {...restProps}
    >
      {children}
    </NextUIButton>
  );
};

export default Button;
