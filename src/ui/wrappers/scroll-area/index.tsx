import { cn } from "@/lib/utils";
import {
  ScrollArea as MantineScrollArea,
  type ScrollAreaAutosizeProps as SCROLL_AREA_PROPS
} from "@mantine/core";

const ScrollArea = (props: SCROLL_AREA_PROPS) => {
  const {
    children,
    offsetScrollbars = false,
    onScrollPositionChange,
    scrollHideDelay = 1000,
    scrollbarSize,
    type = "auto",
    viewportProps,
    viewportRef,
    className,
    ...rest
  } = props;

  return (
    <MantineScrollArea
      offsetScrollbars={offsetScrollbars}
      onScrollPositionChange={onScrollPositionChange}
      scrollHideDelay={scrollHideDelay}
      scrollbarSize={scrollbarSize}
      type={type}
      viewportProps={viewportProps}
      viewportRef={viewportRef}
      className={cn("", className)}
      {...rest}
    >
      {children}
    </MantineScrollArea>
  );
};

export default ScrollArea;
