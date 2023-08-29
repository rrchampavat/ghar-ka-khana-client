import { useForm } from "@mantine/form";
import Text from "@/components/ui/text";
import TextInput from "@/components/ui/inputs/text";
import MeteredPassword from "@/components/ui/inputs/meteredPassword";
import PasswordInput from "@/components/ui/inputs/password";
import Button from "@/components/ui/buttons/button";
import Anchor from "@/components/ui/anchor";

const Login = () => {
  const { values, setFieldValue } = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6 ? "Password should include at least 6 characters" : null
    }
  });

  const requirements = [
    { re: /[0-9]/, label: "Includes number" },
    { re: /[a-z]/, label: "Includes lowercase letter" },
    { re: /[A-Z]/, label: "Includes uppercase letter" },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" }
  ];

  return (
    <div className="flex">
      <img
        src="/svgs/login-bg.svg"
        className="h-screen w-28 basis-8/12 bg-background"
      />
      <div className="basis-4/12 px-28 py-64">
        <Text className="mb-3 text-left text-3xl font-medium">
          Welcome to DUKAAN
        </Text>
        <Text className="mb-10 text-left leading-6">
          Your go to online shop
        </Text>

        <div className="my-10 space-y-3">
          <Text className="text-left">Email</Text>
          <TextInput
            value={values.email}
            onChange={(e) => setFieldValue("email", e.currentTarget.value)}
            placeholder="example@gmail.com"
          />
        </div>

        <div className="my-10 space-y-3">
          <Text className="mb-2 text-left">Password</Text>
          <MeteredPassword
            passwordRequirements={requirements}
            value={values.password}
          >
            <PasswordInput
              value={values.password}
              onChange={(e) => setFieldValue("password", e.currentTarget.value)}
              placeholder="Password"
            />
          </MeteredPassword>
        </div>

        <Button fullWidth className="my-5">
          Login
        </Button>

        <div className="flex items-center space-x-3">
          <Text>New to DUKAAN?</Text>
          <Anchor>Create an account</Anchor>
        </div>
      </div>
    </div>
  );
};

export default Login;
