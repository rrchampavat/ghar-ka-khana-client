import { cn } from "@/lib/utils";
import {
  type IndicatorProps as INDICATOR_PROPS,
  Indicator as MantineIndicator
} from "@mantine/core";

const Indicator = (props: INDICATOR_PROPS) => {
  const {
    children,
    position = "top-end",
    radius = "xl",
    withBorder: isWithBorder = false,
    processing: isProcessing = false,
    disabled: isDisabled = false,
    size = "lg",
    inline: isInline = false,
    label,
    offset,
    color,
    zIndex,
    className,
    ...rest
  } = props;

  return (
    <MantineIndicator
      position={position}
      radius={radius}
      withBorder={isWithBorder}
      processing={isProcessing}
      disabled={isDisabled}
      size={size}
      inline={isInline}
      label={label}
      offset={offset}
      color={color}
      zIndex={zIndex}
      className={cn("", className)}
      {...rest}
    >
      {children}
    </MantineIndicator>
  );
};

export default Indicator;
