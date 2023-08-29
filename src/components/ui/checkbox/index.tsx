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
    transitionDuration,
    wrapperProps,
    className,
    ...rest
  } = props;

  return (
    <MantineCheckBox
      color={color}
      description={description}
      error={error}
      icon={icon}
      indeterminate={isIndeterminate}
      label={label}
      labelPosition={labelPosition}
      radius={radius}
      transitionDuration={transitionDuration}
      wrapperProps={wrapperProps}
      className={className}
      {...rest}
    />
  );
};

export default CheckBox;
