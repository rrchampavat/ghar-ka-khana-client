import {
  Loader as MantineLoader,
  type LoaderProps as LOADER_PROPS
} from "@mantine/core";

const Loader = (props: LOADER_PROPS) => {
  const { color, size, variant = "dots", className, ...rest } = props;

  return (
    <MantineLoader
      color={color}
      size={size}
      variant={variant}
      className={className}
      {...rest}
    />
  );
};

export default Loader;
