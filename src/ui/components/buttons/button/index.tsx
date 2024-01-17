import { cn } from "@/lib/utils";
import { Button as MantineButton, type ButtonProps } from "@mantine/core";

interface BUTTON_PROPS extends ButtonProps {
  onClick?: () => void;
}

const Button = (props: BUTTON_PROPS) => {
  const {
    children = "Submit",
    color,
    disabled: isDisabled = false,
    fullWidth: isFullWidth = false,
    gradient,
    loaderProps,
    loading: isLoading = false,
    radius = "sm",
    size = "md",
    variant = "default",
    className,
    onClick,
    justify = "center",
    leftSection,
    rightSection,
    ...rest
  } = props;

  return (
    <MantineButton
      color={color}
      disabled={isDisabled}
      fullWidth={isFullWidth}
      gradient={gradient}
      loaderProps={loaderProps}
      loading={isLoading}
      radius={radius}
      size={size}
      variant={variant}
      className={cn(
        "rounded-sm !border-primary !bg-primary px-5 py-1 font-normal !text-white hover:!bg-[#7294f8]",
        className
      )}
      justify={justify}
      onClick={onClick}
      leftSection={leftSection}
      rightSection={rightSection}
      {...rest}
    >
      {children}
    </MantineButton>
  );
};

export default Button;
