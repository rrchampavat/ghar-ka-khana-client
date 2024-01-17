import { useForm } from "@mantine/form";
import { Anchor } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Text from "@/ui/components/text";
import TextInput from "@/ui/components/inputs/text";
import PasswordInput from "@/ui/components/inputs/password";
import Button from "@/ui/components/buttons/button";

const LoginForm = () => {
  const navigate = useNavigate();

  const { values, setFieldValue } = useForm({
    initialValues: {
      email: "",
      password: ""
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6 ? "Password should include at least 6 characters" : null
    }
  });

  const handleLogin = () => {
    Cookies.set("accessToken", "token");

    navigate("/");
  };

  return (
    <section className="mx-auto py-40 md:basis-5/12 md:px-10 md:py-64 xl:basis-4/12 xl:px-28">
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
            Email
          </Text>

          <TextInput
            value={values.email}
            onChange={(e) => setFieldValue("email", e.currentTarget.value)}
            placeholder="example@gmail.com"
            data-testid="email-input"
          />
        </div>

        <div className="my-10 space-y-3">
          <Text className="mb-2 text-left" data-testid="password-label">
            Password
          </Text>
          {/* <MeteredPassword
            passwordRequirements={passwordRequirements}
            value={values.password}
          > */}
          <PasswordInput
            value={values.password}
            onChange={(e) => setFieldValue("password", e.currentTarget.value)}
            placeholder="Password"
            data-testid="password-input"
          />
          {/* </MeteredPassword> */}
        </div>

        <Button
          fullWidth
          className="my-5"
          data-testid="submit-btn"
          onClick={handleLogin}
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
