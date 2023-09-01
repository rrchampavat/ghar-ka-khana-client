import {
  Image as MantineImage,
  ImageProps as IMAGE_PROPS
} from "@mantine/core";

const Image = (props: IMAGE_PROPS) => {
  const {
    alt,
    caption,
    fit,
    height,
    imageProps,
    imageRef,
    placeholder,
    radius = "sm",
    src,
    width,
    withPlaceholder: isWithPlaceHolder = true,
    ...rest
  } = props;
  return (
    <MantineImage
      alt={alt}
      caption={caption}
      fit={fit}
      height={height}
      width={width}
      imageProps={imageProps}
      imageRef={imageRef}
      placeholder={placeholder}
      radius={radius}
      src={src}
      withPlaceholder={isWithPlaceHolder}
      {...rest}
    />
  );
};

export default Image;
