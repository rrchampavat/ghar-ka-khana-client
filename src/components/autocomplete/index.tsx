import { cn } from "@/lib/utils";
import {
  type AutocompleteProps,
  Autocomplete as MantineAutocomplete,
  type ComboboxItemGroup
} from "@mantine/core";

interface AUTOCOMPLETE_PROPS extends AutocompleteProps {
  data: ComboboxItemGroup[];
}

export const AutoComplete = (props: AUTOCOMPLETE_PROPS) => {
  const {
    label,
    placeholder = "Search...",
    data,
    comboboxProps,
    defaultDropdownOpened: isDefaultDropdownOpened = false,
    defaultValue,
    description,
    descriptionProps,
    disabled: isDisabled = false,
    error,
    errorProps,
    filter,
    inputContainer,
    inputWrapperOrder,
    labelProps,
    leftSection,
    leftSectionPointerEvents,
    leftSectionProps,
    leftSectionWidth,
    maxDropdownHeight,
    onChange,
    onDropdownClose,
    onDropdownOpen,
    onOptionSubmit,
    pointer: isPointer = false,
    radius = "sm",
    required: isRequired = false,
    rightSection,
    rightSectionPointerEvents,
    rightSectionProps,
    rightSectionWidth,
    selectFirstOptionOnChange: isSelectFirstOptionOnChange = false,
    size = "lg",
    value,
    withAsterisk: isWithAsterisk = isRequired,
    withErrorStyles: isWithErrorStyles = true,
    wrapperProps,
    className,
    readOnly: isReadOnly = false,
    ...rest
  } = props;

  let totalCount = 0;

  data.forEach((group) => {
    totalCount += group.items.length;
  });

  return (
    <MantineAutocomplete
      label={label}
      placeholder={placeholder}
      data={data}
      comboboxProps={comboboxProps}
      defaultDropdownOpened={isDefaultDropdownOpened}
      defaultValue={defaultValue}
      description={description}
      descriptionProps={descriptionProps}
      disabled={isDisabled}
      error={error}
      errorProps={errorProps}
      filter={filter}
      inputContainer={inputContainer}
      inputWrapperOrder={inputWrapperOrder}
      labelProps={labelProps}
      leftSection={leftSection}
      leftSectionPointerEvents={leftSectionPointerEvents}
      leftSectionProps={leftSectionProps}
      leftSectionWidth={leftSectionWidth}
      rightSection={rightSection}
      rightSectionPointerEvents={rightSectionPointerEvents}
      rightSectionProps={rightSectionProps}
      rightSectionWidth={rightSectionWidth}
      maxDropdownHeight={maxDropdownHeight}
      onChange={onChange}
      onDropdownClose={onDropdownClose}
      onDropdownOpen={onDropdownOpen}
      onOptionSubmit={onOptionSubmit}
      pointer={isPointer}
      radius={radius}
      required={isRequired}
      selectFirstOptionOnChange={isSelectFirstOptionOnChange}
      size={size}
      value={value}
      withAsterisk={isWithAsterisk}
      withErrorStyles={isWithErrorStyles}
      withScrollArea={!!totalCount && totalCount > 5}
      wrapperProps={wrapperProps}
      className={cn("", className)}
      readOnly={isReadOnly}
      {...rest}
    />
  );
};
