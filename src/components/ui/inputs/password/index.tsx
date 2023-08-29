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
    icon,
    iconWidth,
    inputContainer,
    inputWrapperOrder,
    label,
    labelProps,
    onVisibilityChange = () => handleVisibilityChange(),
    radius = "sm",
    required: isRequired = false,
    size = "md",
    toggleTabIndex,
    type = passwordType,
    variant = "default",
    visibilityToggleIcon,
    visibilityToggleLabel,
    visible: isVisible,
    withAsterisk: isWithAsterisk = false,
    wrapperProps,
    className,
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
      icon={icon}
      iconWidth={iconWidth}
      inputContainer={inputContainer}
      inputWrapperOrder={inputWrapperOrder}
      label={label}
      labelProps={labelProps}
      onVisibilityChange={onVisibilityChange}
      radius={radius}
      required={isRequired}
      size={size}
      toggleTabIndex={toggleTabIndex}
      type={type}
      variant={variant}
      visibilityToggleIcon={visibilityToggleIcon}
      visibilityToggleLabel={visibilityToggleLabel}
      visible={isVisible}
      withAsterisk={isWithAsterisk}
      wrapperProps={wrapperProps}
      className={className}
      {...rest}
    />
  );
};

export default PasswordInput;
