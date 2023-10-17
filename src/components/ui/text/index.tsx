import { cn } from "@/lib/utils";
import { Text as MantineText, TextProps } from "@mantine/core";
import { ReactNode } from "react";

interface TEXT_PROPS extends TextProps {
  children: ReactNode;
}

const Text = (props: TEXT_PROPS) => {
  const {
    children,
    className,
    gradient,
    inherit: isInherit = false,
    inline: isInline = true,
    lineClamp = 4,
    size = "lg",
    span: isSpan = false,
    truncate,
    variant = "text",
    ...rest
  } = props;

  return (
    <MantineText
      className={cn("font-sans text-text", className)}
      gradient={gradient}
      inherit={isInherit}
      inline={isInline}
      lineClamp={lineClamp}
      size={size}
      span={isSpan}
      truncate={truncate}
      variant={variant}
      {...rest}
    >
      {children}
    </MantineText>
  );
};

export default Text;
