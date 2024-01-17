import { cn } from "@/lib/utils";
import { Paper as MantinePaper, type PaperProps } from "@mantine/core";
import type { ReactNode } from "react";

interface PAPER_PROPS extends PaperProps {
  children: ReactNode;
}

const Paper = (props: PAPER_PROPS) => {
  const {
    children,
    radius = "md",
    shadow = "none",
    withBorder: isWithBorder = true,
    p = "md",
    className,
    ...rest
  } = props;

  return (
    <MantinePaper
      radius={radius}
      shadow={shadow}
      withBorder={isWithBorder}
      className={cn("", className)}
      p={p}
      {...rest}
    >
      {children}
    </MantinePaper>
  );
};

export default Paper;
