import { cn } from "@/lib/utils";
import { Group as MantineGroup, type GroupProps } from "@mantine/core";
import type { ReactNode } from "react";

interface GROUP_PROPS extends GroupProps {
  children: ReactNode;
}

const Group = (props: GROUP_PROPS) => {
  const {
    children,
    align = "center",
    gap = "md",
    grow: isGrow = false,
    justify = "center",
    preventGrowOverflow: isPreventGrowFlow = true,
    wrap = "wrap",
    className,
    ...rest
  } = props;

  return (
    <MantineGroup
      align={align}
      gap={gap}
      grow={isGrow}
      justify={justify}
      preventGrowOverflow={isPreventGrowFlow}
      wrap={wrap}
      className={cn("", className)}
      {...rest}
    >
      {children}
    </MantineGroup>
  );
};

export default Group;
