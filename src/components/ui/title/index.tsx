import { cn } from "@/lib/utils";
import {
  Title as MantineTitle,
  TitleProps as TITLE_PROPS
} from "@mantine/core";

const Title = (props: TITLE_PROPS) => {
  const {
    children,
    align,
    color,
    gradient,
    inherit: isInherit = false,
    inline: isInline = false,
    italic: isItalic = false,
    lineClamp,
    order,
    size,
    strikethrough: hasStrikeThrough = false,
    transform,
    truncate,
    underline: hasUnderline = false,
    weight,
    className,
    ...rest
  } = props;

  return (
    <MantineTitle
      align={align}
      color={color}
      gradient={gradient}
      inherit={isInherit}
      inline={isInline}
      italic={isItalic}
      lineClamp={lineClamp}
      order={order}
      size={size}
      strikethrough={hasStrikeThrough}
      transform={transform}
      truncate={truncate}
      underline={hasUnderline}
      weight={weight}
      className={cn("text-text", className)}
      {...rest}
    >
      {children}
    </MantineTitle>
  );
};

export default Title;
