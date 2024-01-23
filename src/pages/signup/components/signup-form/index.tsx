import Button from "@/ui/components/button";
import Input from "@/ui/components/input";
import PasswordInput from "@/ui/components/input/password-input";
import Link from "@/ui/components/link";
import {
  TypographyH1,
  TypographyLead,
  TypographyP
} from "@/ui/components/typography";

const _requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" }
];

const SignUpForm = () => {
  return (
    <section className="mx-auto my-auto px-4 md:border-l-1 lg:px-12 xl:px-20">
      <TypographyH1>Welcome to Ghar ka Khana</TypographyH1>

      <TypographyLead>Your goto online tiffin service</TypographyLead>

      <form className="my-10 flex flex-col items-center space-y-3">
        <Input type="text" label="Email or Contact number" />

        <PasswordInput className="mb-5" />

        <Button className="!mt-6 w-fit">Login</Button>
      </form>

      <div className="flex justify-between space-x-3">
        <TypographyP>Already registered with us?</TypographyP>
        <Link href="/login">Login</Link>
      </div>
    </section>
  );
};

export default SignUpForm;
