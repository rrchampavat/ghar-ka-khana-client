import {
  Checkbox as MantineCheckBox,
  CheckboxProps as CHECKBOX_PROPS
} from "@mantine/core";

const CheckBox = (props: CHECKBOX_PROPS) => {
  const {
    color,
    description,
    error,
    icon,
    indeterminate: isIndeterminate,
    label,
    labelPosition,
    radius,
    wrapperProps,
    className,
    id,
    rootRef,
    size = "sm",
    ...rest
  } = props;

  return (
    <MantineCheckBox
      id={id}
      color={color}
      description={description}
      error={error}
      icon={icon}
      indeterminate={isIndeterminate}
      label={label}
      labelPosition={labelPosition}
      radius={radius}
      wrapperProps={wrapperProps}
      className={className}
      rootRef={rootRef}
      size={size}
      {...rest}
    />
  );
};

export default CheckBox;
