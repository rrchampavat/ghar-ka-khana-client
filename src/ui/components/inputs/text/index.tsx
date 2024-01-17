import { cn } from "@/lib/utils";
import {
  TextInput as MantineTextInput,
  type TextInputProps as TEXT_INPUT_PROPS
} from "@mantine/core";

const TextInput = (props: TEXT_INPUT_PROPS) => {
  const {
    description,
    descriptionProps,
    disabled: isDisabled = false,
    error,
    errorProps,
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
    leftSection,
    leftSectionPointerEvents = "auto",
    leftSectionProps,
    leftSectionWidth,
    multiline: isMultiline = false,
    pointer: isPointer = true,
    rightSectionPointerEvents = "auto",
    withAria: isWithAria = true,
    withErrorStyles: isWithErrorStyles = true,
    ...rest
  } = props;

  return (
    <MantineTextInput
      description={description}
      descriptionProps={descriptionProps}
      disabled={isDisabled}
      error={error}
      errorProps={errorProps}
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
      className={cn("", className)}
      leftSection={leftSection}
      leftSectionPointerEvents={leftSectionPointerEvents}
      leftSectionProps={leftSectionProps}
      leftSectionWidth={leftSectionWidth}
      multiline={isMultiline}
      pointer={isPointer}
      rightSectionPointerEvents={rightSectionPointerEvents}
      withAria={isWithAria}
      withErrorStyles={isWithErrorStyles}
      {...rest}
    />
  );
};

export default TextInput;
