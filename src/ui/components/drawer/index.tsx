import { cn } from "@/lib/utils";
import {
  Drawer as MantineDrawer,
  type DrawerProps as DRAWER_PROPS
} from "@mantine/core";

const Drawer = (props: DRAWER_PROPS) => {
  const {
    children,
    closeButtonProps,
    closeOnClickOutside: isCloseOnClickOutside = true,
    closeOnEscape: isCloseOnEscape = true,
    id,
    keepMounted: isKeepMounted = false,
    lockScroll: isLockScroll = true,
    onClose,
    opened: isOpened = true,
    overlayProps,
    padding,
    portalProps,
    position = "left",
    returnFocus: isReturnFocus = true,
    scrollAreaComponent,
    shadow = "xl",
    size = "md",
    title,
    transitionProps,
    trapFocus: isTrapFocus = true,
    withCloseButton: isWithCloseButton = true,
    withinPortal: isWithinPortal = true,
    zIndex,
    className,
    ...rest
  } = props;

  return (
    <MantineDrawer
      closeOnClickOutside={isCloseOnClickOutside}
      closeOnEscape={isCloseOnEscape}
      id={id}
      keepMounted={isKeepMounted}
      lockScroll={isLockScroll}
      onClose={onClose}
      opened={isOpened}
      overlayProps={overlayProps}
      padding={padding}
      portalProps={portalProps}
      position={position}
      returnFocus={isReturnFocus}
      scrollAreaComponent={scrollAreaComponent}
      shadow={shadow}
      size={size}
      title={title}
      transitionProps={transitionProps}
      trapFocus={isTrapFocus}
      withCloseButton={isWithCloseButton}
      closeButtonProps={closeButtonProps}
      withinPortal={isWithinPortal}
      zIndex={zIndex}
      className={cn("", className)}
      {...rest}
    >
      {children}
    </MantineDrawer>
  );
};

export default Drawer;
