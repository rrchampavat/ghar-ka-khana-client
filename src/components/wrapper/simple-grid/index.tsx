import { cn } from "@/lib/utils";
import {
  SimpleGrid as MantineSimpleGrid,
  type SimpleGridProps as SIMPLE_GRID_PROPS
} from "@mantine/core";

const SimpleGrid = (props: SIMPLE_GRID_PROPS) => {
  const {
    children,
    cols = 1,
    spacing = "md",
    verticalSpacing = "md",
    className,
    ...rest
  } = props;

  return (
    <MantineSimpleGrid
      cols={cols}
      spacing={spacing}
      verticalSpacing={verticalSpacing}
      className={cn("", className)}
      {...rest}
    >
      {children}
    </MantineSimpleGrid>
  );
};

export default SimpleGrid;
