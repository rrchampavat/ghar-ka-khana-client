import { useForm } from "@mantine/form";
import { Anchor } from "@mantine/core";
import Text from "@/ui/components/text";
import TextInput from "@/ui/components/inputs/text";
import MeteredPassword from "@/ui/components/inputs/meteredPassword";
import PasswordInput from "@/ui/components/inputs/password";
import Button from "@/ui/components/buttons/button";

const SignUpForm = () => {
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
    <section className="mx-auto py-40 md:basis-5/12 md:px-10 md:py-44 xl:basis-4/12 xl:px-28">
      <Text className="!mb-3 text-left !text-3xl !font-medium">
        Welcome to DUKAAN
      </Text>
      <Text className="mb-10 text-left leading-6">Your go to online shop</Text>

      <div className="my-10 space-y-3">
        <Text className="text-left">Name</Text>
        <TextInput
          value={values.name}
          onChange={(e) => setFieldValue("name", e.currentTarget.value)}
          placeholder="Narendra Modi"
        />
      </div>

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
        <Text>Already have an account?</Text>
        <Anchor href="login" underline="always">
          Sign In
        </Anchor>
      </div>
    </section>
  );
};

export default SignUpForm;
