import { useState } from "react";
import Input from "..";
import { Eye, EyeOff } from "lucide-react";
import type { InputProps } from "@nextui-org/react";

const PasswordInput = (props: InputProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      type={isVisible ? "text" : "password"}
      label="Password"
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeOff className="pointer-events-none text-2xl text-default-400" />
          ) : (
            <Eye className="pointer-events-none text-2xl text-default-400" />
          )}
        </button>
      }
      {...props}
    />
  );
};

export default PasswordInput;
