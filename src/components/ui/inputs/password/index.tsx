import {
  PasswordInput as MantinePasswordInput,
  PasswordInputProps as PASSWORD_INPUT_PROPS
} from "@mantine/core";
import { useState } from "react";

const PasswordInput = (props: PASSWORD_INPUT_PROPS) => {
  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );

  const {
    defaultVisible: isDefaultVisible,
    description,
    descriptionProps,
    disabled: isDisabled = false,
    error,
    errorProps,
    inputContainer,
    inputWrapperOrder,
    label,
    labelProps,
    onVisibilityChange = () => handleVisibilityChange(),
    radius = "sm",
    required: isRequired = false,
    size = "md",
    type = passwordType,
    variant = "default",
    visibilityToggleIcon,
    visible: isVisible,
    withAsterisk: isWithAsterisk = false,
    wrapperProps,
    className,
    leftSection,
    leftSectionPointerEvents = "auto",
    leftSectionProps,
    leftSectionWidth,
    multiline: isMultiline = false,
    pointer: isPointer = true,
    rightSection,
    rightSectionPointerEvents = "auto",
    rightSectionProps,
    rightSectionWidth,
    withAria: isWithAria = true,
    withErrorStyles: isWithErrorStyles = true,
    ...rest
  } = props;

  const handleVisibilityChange = () => {
    if (passwordType === "text") {
      return setPasswordType("password");
    }
    setPasswordType("text");
  };

  return (
    <MantinePasswordInput
      defaultVisible={isDefaultVisible}
      description={description}
      descriptionProps={descriptionProps}
      disabled={isDisabled}
      error={error}
      errorProps={errorProps}
      inputContainer={inputContainer}
      inputWrapperOrder={inputWrapperOrder}
      label={label}
      labelProps={labelProps}
      onVisibilityChange={onVisibilityChange}
      radius={radius}
      required={isRequired}
      size={size}
      type={type}
      variant={variant}
      visibilityToggleIcon={visibilityToggleIcon}
      visible={isVisible}
      withAsterisk={isWithAsterisk}
      wrapperProps={wrapperProps}
      className={className}
      leftSection={leftSection}
      leftSectionPointerEvents={leftSectionPointerEvents}
      leftSectionProps={leftSectionProps}
      leftSectionWidth={leftSectionWidth}
      multiline={isMultiline}
      pointer={isPointer}
      rightSection={rightSection}
      rightSectionPointerEvents={rightSectionPointerEvents}
      rightSectionProps={rightSectionProps}
      rightSectionWidth={rightSectionWidth}
      withAria={isWithAria}
      withErrorStyles={isWithErrorStyles}
      {...rest}
    />
  );
};

export default PasswordInput;
