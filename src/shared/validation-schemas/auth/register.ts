import { phoneRegex } from "@/shared/constants/regular-expressions";
import { object, string } from "yup";

const registerSchema = object({
  firstName: string()
    .required("Please provide your first name; it's a required field.")
    .typeError("Ensure that the first name is entered as a string."),
  lastName: string()
    .required("Please provide your last name; it's a required field.")
    .typeError("Ensure that the last name is entered as a string."),
  email: string().email("Kindly enter a valid email address."),
  contactNo: string().transform((value) => {
    if (phoneRegex.test(value)) {
      return value;
    }
  }),
  password: string()
    .required("Please provide a password; it is a required field.")
    .typeError("Ensure that the password is entered as a string.")
}).strict();

export default registerSchema;
