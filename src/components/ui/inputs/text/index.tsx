import {
  TextInput as MantineTextInput,
  TextInputProps as TEXT_INPUT_PROPS
} from "@mantine/core";

const TextInput = (props: TEXT_INPUT_PROPS) => {
  const {
    description,
    descriptionProps,
    disabled: isDisabled = false,
    error,
    errorProps,
    icon,
    iconWidth,
    inputContainer,
    inputWrapperOrder,
    label,
    labelProps,
    radius = "sm",
    required: isRequired = false,
    rightSection,
    rightSectionProps,
    rightSectionWidth,
    size = "md",
    type = "text",
    variant = "default",
    withAsterisk: isWithAsterisk = false,
    wrapperProps,
    className,
    ...rest
  } = props;

  return (
    <MantineTextInput
      description={description}
      descriptionProps={descriptionProps}
      disabled={isDisabled}
      error={error}
      errorProps={errorProps}
      icon={icon}
      iconWidth={iconWidth}
      inputContainer={inputContainer}
      inputWrapperOrder={inputWrapperOrder}
      label={label}
      labelProps={labelProps}
      radius={radius}
      required={isRequired}
      rightSection={rightSection}
      rightSectionProps={rightSectionProps}
      rightSectionWidth={rightSectionWidth}
      size={size}
      type={type}
      variant={variant}
      withAsterisk={isWithAsterisk}
      wrapperProps={wrapperProps}
      className={className}
      {...rest}
    />
  );
};

export default TextInput;
