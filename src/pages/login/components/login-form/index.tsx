import Button from "@/ui/components/button";
import Input from "@/ui/components/input";
import PasswordInput from "@/ui/components/input/password-input";
import {
  TypographyH1,
  TypographyLead,
  TypographyP
} from "@/ui/components/typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "@/shared/validation-schemas/auth/login";
import { login } from "@/services/auth/login";
import Cookies from "js-cookie";
import Link from "@/ui/components/link";

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
      <TypographyH1>Welcome to Ghar ka Khana</TypographyH1>

      <TypographyLead>Your goto online tiffin service</TypographyLead>

      <form className="my-10 flex flex-col items-center space-y-3">
        <Controller
          name="emailOrContact"
          control={control}
          render={({ field, formState }) => (
            <Input
              type="text"
              label="Email or Contact number"
              errorMessage={formState.errors.emailOrContact?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, formState }) => (
            <PasswordInput
              className="mb-5"
              errorMessage={formState.errors.password?.message}
              {...field}
            />
          )}
        />

        <Button
          onClick={handleSubmit(handleLogin)}
          isLoading={isLoading}
          className="!mt-6 w-fit"
        >
          Login
        </Button>
      </form>
      <div className="flex justify-between space-x-3">
        <TypographyP>New to Ghar ka Khana ?</TypographyP>
        <Link href="/login">Create an account</Link>
      </div>
    </section>
  );
};

export default LoginForm;
