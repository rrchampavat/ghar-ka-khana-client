const SignUpForm = () => {
  const _requirements = [
    { re: /[0-9]/, label: "Includes number" },
    { re: /[a-z]/, label: "Includes lowercase letter" },
    { re: /[A-Z]/, label: "Includes uppercase letter" },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" }
  ];

  return (
    <section className="mx-auto my-auto px-8  md:border-l-1 lg:px-12 xl:px-20">
      {/* <Text className="!mb-3 text-left !text-3xl !font-medium">
        Welcome to DUKAAN
      </Text>
      <Text className="mb-10 text-left leading-6">Your go to online shop</Text> */}

      <div className="my-10 space-y-3">
        {/* <Text className="text-left">Name</Text>
        <TextInput
          value={values.name}
          onChange={(e) => setFieldValue("name", e.currentTarget.value)}
          placeholder="Narendra Modi"
        /> */}
      </div>

      <div className="my-10 space-y-3">
        {/* <Text className="text-left">Email</Text>
        <TextInput
          value={values.email}
          onChange={(e) => setFieldValue("email", e.currentTarget.value)}
          placeholder="example@gmail.com"
        /> */}
      </div>

      <div className="my-10 space-y-3">
        {/* <Text className="mb-2 text-left">Password</Text>
        <MeteredPassword
          passwordRequirements={requirements}
          value={values.password}
        >
          <PasswordInput
            value={values.password}
            onChange={(e) => setFieldValue("password", e.currentTarget.value)}
            placeholder="Password"
          />
        </MeteredPassword> */}
      </div>

      {/* <Button fullWidth className="my-5">
        Login
      </Button> */}

      <div className="flex items-center space-x-3">
        {/* <Text>Already have an account?</Text>
        <Anchor href="login" underline="always">
          Sign In
        </Anchor> */}
      </div>
    </section>
  );
};

export default SignUpForm;
