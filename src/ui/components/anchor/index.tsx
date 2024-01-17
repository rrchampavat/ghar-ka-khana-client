import { cn } from "@/lib/utils";
import { Anchor as MantineAnchor, type AnchorProps } from "@mantine/core";
import { type ReactNode } from "react";

interface ANCHOR_PROPS extends AnchorProps {
  children: ReactNode;
}

const Anchor = (props: ANCHOR_PROPS) => {
  const {
    children,
    gradient,
    inherit: isInherit = false,
    inline: isInline = false,
    lineClamp,
    size = "md",
    truncate,
    className,
    underline = "hover",
    ...rest
  } = props;

  return (
    <MantineAnchor
      gradient={gradient}
      inherit={isInherit}
      inline={isInline}
      lineClamp={lineClamp}
      size={size}
      truncate={truncate}
      className={cn("text-secondary", className)}
      underline={underline}
      {...rest}
    >
      {children}
    </MantineAnchor>
  );
};

export default Anchor;
