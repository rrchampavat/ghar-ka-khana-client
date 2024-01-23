import Button from "@/ui/components/button";
import Input from "@/ui/components/input";
import PasswordInput from "@/ui/components/input/password-input";
import { TypographyH1, TypographyLead } from "@/ui/components/typography";

// const initialLoginValues: LOGIN_PAYLOAD = {
//   emailOrContact: "",
//   password: ""
// };

const LoginForm = () => {
  // const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // const { handleSubmit, control } = useForm<LOGIN_PAYLOAD>({
  //   resolver: yupResolver(loginSchema),
  //   defaultValues: initialLoginValues,
  //   mode: "all"
  // });

  // const handleLogin: SubmitHandler<LOGIN_PAYLOAD> = async (values) => {
  //   try {
  //     setIsLoading(true);

  //     const response = await login(values);

  //     const { data, success: isSuccess } = response;

  //     if (isSuccess) {
  //       Cookies.set("accessToken", data.accessToken);

  //       navigate("/");
  //     }
  //   } catch (error: any) {
  //     throw new Error(error?.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <section className="mx-auto my-auto px-8 md:basis-5/12 lg:px-20 xl:basis-4/12">
      <TypographyH1>Welcome to Ghar ka Khana.</TypographyH1>

      <TypographyLead>Your goto online tiffin service .</TypographyLead>

      <form className="my-10 flex flex-col items-center space-y-3">
        <Input type="text" label="Email or Contact number" />
        <PasswordInput className="mb-5" />
        {/* <Text className="text-left" data-testid="email-label">
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
          /> */}
        <Button className="!mt-6 w-fit">Login</Button>
      </form>
      <div className="flex items-center space-x-3">
        {/* <Text data-testid="register-label">New to DUKAAN?</Text>
        <Anchor href="sign-up" data-testid="register-anchor" underline="always">
          Create an account
        </Anchor> */}
      </div>
    </section>
  );
};

export default LoginForm;
