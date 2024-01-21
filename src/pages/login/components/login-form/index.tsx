import { Anchor } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Text from "@/ui/components/text";
import TextInput from "@/ui/components/inputs/text";
import PasswordInput from "@/ui/components/inputs/password";
import Button from "@/ui/components/buttons/button";
import { login } from "@/services/auth/login";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import loginSchema from "@/shared/validation-schemas/auth/login";
import { yupResolver } from "@hookform/resolvers/yup";
import Controller from "@/ui/components/controller";

const initialLoginValues: LOGIN_PAYLOAD = {
  emailOrContact: "",
  password: ""
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { handleSubmit, control } = useForm<LOGIN_PAYLOAD>({
    resolver: yupResolver(loginSchema),
    defaultValues: initialLoginValues,
    mode: "all"
  });

  const handleLogin: SubmitHandler<LOGIN_PAYLOAD> = async (values) => {
    try {
      setIsLoading(true);

      const response = await login(values);

      const { data, success: isSuccess } = response;

      if (isSuccess) {
        Cookies.set("accessToken", data.accessToken);

        navigate("/");
      }
    } catch (error: any) {
      throw new Error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mx-auto my-auto px-8 md:basis-5/12 lg:px-20 xl:basis-4/12">
      <Text
        className="!mb-3 text-left !text-3xl !font-medium"
        data-testid="form-header"
      >
        Welcome to DUKAAN
      </Text>
      <Text className="mb-10 text-left leading-6" data-testid="form-headline">
        Your go to online shop
      </Text>
      <form>
        <div className="my-10 space-y-3">
          <Text className="text-left" data-testid="email-label">
            Email or Contact number
          </Text>

          <Controller
            name="emailOrContact"
            control={control}
            render={({ field, formState }) => (
              <TextInput
                placeholder="Email or Contact number"
                // @ts-expect-error
                error={formState.errors.emailOrContact?.message}
                {...field}
              />
            )}
          />
        </div>

        <div className="my-10 space-y-3">
          <Text className="mb-2 text-left" data-testid="password-label">
            Password
          </Text>

          <Controller
            name="password"
            control={control}
            render={({ field, formState }) => (
              <PasswordInput
                placeholder="Password"
                // @ts-expect-error
                error={formState.errors.password?.message}
                {...field}
              />
            )}
          />
        </div>

        <Button
          fullWidth
          className="my-5"
          data-testid="submit-btn"
          onClick={handleSubmit(handleLogin)}
          loading={isLoading}
        >
          Login
        </Button>
      </form>
      <div className="flex items-center space-x-3">
        <Text data-testid="register-label">New to DUKAAN?</Text>
        <Anchor href="sign-up" data-testid="register-anchor" underline="always">
          Create an account
        </Anchor>
      </div>
    </section>
  );
};

export default LoginForm;
