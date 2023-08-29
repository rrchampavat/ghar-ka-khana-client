import { cn } from "@/lib/utils";
import {
  Anchor as MantineAnchor,
  AnchorProps as ANCHOR_PROPS
} from "@mantine/core";

const Anchor = (props: ANCHOR_PROPS) => {
  const {
    align = "center",
    children,
    color,
    gradient,
    inherit: isInherit = false,
    inline: isInline = false,
    italic: isItalic = false,
    lineClamp,
    size = "md",
    span: isSpan = false,
    strikethrough: hasStrikeThrough = false,
    transform,
    truncate,
    underline: hasUnderline = false,
    weight,
    className,
    ...rest
  } = props;

  return (
    <MantineAnchor
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
      weight={weight}
      className={cn("text-secondary", className)}
      {...rest}
    >
      {children}
    </MantineAnchor>
  );
};

export default Anchor;
