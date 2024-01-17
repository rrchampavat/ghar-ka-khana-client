import { cn } from "@/lib/utils";
import {
  Container as MantineContainer,
  type ContainerProps as CONTAINER_PROPS
} from "@mantine/core";

const Container = (props: CONTAINER_PROPS) => {
  const {
    children,
    fluid: isFluid = false,
    size = "md",
    className,
    ...rest
  } = props;

  return (
    <MantineContainer
      fluid={isFluid}
      size={size}
      className={cn("", className)}
      {...rest}
    >
      {children}
    </MantineContainer>
  );
};

export default Container;
