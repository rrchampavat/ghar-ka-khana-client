import {
  Controller as RHFController,
  type ControllerFieldState,
  type ControllerRenderProps,
  type FieldValues,
  type UseFormStateReturn
} from "react-hook-form";

interface CONTROLLER_PROPS<T> {
  control: any;
  name: string;
  render: ({
    field,
    fieldState,
    formState
  }: {
    field: ControllerRenderProps<FieldValues, string>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
  }) => React.ReactNode;
  mode?: "all" | "onChange" | "onBlur" | "onSubmit";
  validationSchema?: any;
  initialValues?: T;
}

const Controller = (props: CONTROLLER_PROPS<any>) => {
  const { control, name, render, initialValues, mode, validationSchema } =
    props;

  return (
    <RHFController
      name={name}
      control={control}
      // @ts-expect-error
      render={render}
      defaultValue={initialValues ? initialValues[name] : undefined}
      rules={validationSchema}
      mode={mode}
    />
  );
};

export default Controller;
