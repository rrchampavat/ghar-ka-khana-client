import { cn } from "@/lib/utils";
import {
  Title as MantineTitle,
  type TitleProps as TITLE_PROPS
} from "@mantine/core";

const Title = (props: TITLE_PROPS) => {
  const { children, order, size, className, ...rest } = props;

  return (
    <MantineTitle
      order={order}
      size={size}
      className={cn("text-text", className)}
      {...rest}
    >
      {children}
    </MantineTitle>
  );
};

export default Title;
