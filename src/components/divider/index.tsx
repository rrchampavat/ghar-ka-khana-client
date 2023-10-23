import { cn } from "@/lib/utils";
import {
  type DividerProps as DIVIDER_PROPS,
  Divider as MantineDivider
} from "@mantine/core";

const Divider = (props: DIVIDER_PROPS) => {
  const {
    color,
    label,
    labelPosition = "center",
    orientation = "horizontal",
    size,
    className,
    ...rest
  } = props;

  return (
    <MantineDivider
      color={color}
      label={label}
      labelPosition={labelPosition}
      orientation={orientation}
      size={size}
      className={cn("", className)}
      {...rest}
    />
  );
};

export default Divider;
