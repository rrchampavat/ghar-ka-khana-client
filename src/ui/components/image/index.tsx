import {
  Image as MantineImage,
  type ImageProps as IMAGE_PROPS
} from "@mantine/core";

const Image = (props: IMAGE_PROPS) => {
  const {
    fallbackSrc,
    fit,
    onError,
    radius = "sm",
    src,
    className,
    ...rest
  } = props;
  return (
    <MantineImage
      fallbackSrc={fallbackSrc}
      fit={fit}
      onError={onError}
      radius={radius}
      src={src}
      className={className}
      {...rest}
    />
  );
};

export default Image;
