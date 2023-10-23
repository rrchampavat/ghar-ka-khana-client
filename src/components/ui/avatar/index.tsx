import { cn } from "@/lib/utils";
import {
  type AvatarProps as AVATAR_PROPS,
  Avatar as MantineAvatar
} from "@mantine/core";

const Avatar = (props: AVATAR_PROPS) => {
  const {
    alt = "img",
    children,
    color,
    gradient,
    imageProps,
    radius = "xl",
    size = "md",
    src,
    className,
    variant = "default",
    ...rest
  } = props;
  return (
    <MantineAvatar
      src={src}
      alt={alt}
      color={color}
      gradient={gradient}
      imageProps={imageProps}
      radius={radius}
      size={size}
      className={cn("", className)}
      variant={variant}
      {...rest}
    >
      {children}
    </MantineAvatar>
  );
};

export default Avatar;
