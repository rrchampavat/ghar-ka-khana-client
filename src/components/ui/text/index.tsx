import { cn } from "@/lib/utils";
import { Text as MantineText, TextProps as TEXT_PROPS } from "@mantine/core";

const Text = (props: TEXT_PROPS) => {
  const {
    children,
    align = "center",
    className,
    color,
    gradient,
    inherit: isInherit = false,
    inline: isInline = true,
    italic: isItalic = false,
    lineClamp = 4,
    size = "lg",
    span: isSpan = false,
    strikethrough: hasStrikeThrough = false,
    transform = "none",
    truncate,
    underline: hasUnderline = false,
    variant = "text",
    weight,
    ...rest
  } = props;

  return (
    <MantineText
      className={cn("font-sans text-text", className)}
      align={align}
      color={color}
      gradient={gradient}
      inherit={isInherit}
      inline={isInline}
      italic={isItalic}
      lineClamp={lineClamp}
      size={size}
      span={isSpan}
      strikethrough={hasStrikeThrough}
      transform={transform}
      truncate={truncate}
      underline={hasUnderline}
      variant={variant}
      weight={weight}
      {...rest}
    >
      {children}
    </MantineText>
  );
};

export default Text;
