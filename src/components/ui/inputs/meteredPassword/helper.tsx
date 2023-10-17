import Text from "@/components/ui/text";
import { Box } from "@mantine/core";
import { Check, X } from "lucide-react";
import { REQUIREMENT } from ".";

export const PasswordRequirement = ({
  meets,
  label
}: {
  meets: boolean;
  label: string;
}) => {
  return (
    <Text
      mt={7}
      size="sm"
      className={`relative flex justify-center ${
        meets ? "text-green-600" : "text-red-600"
      }`}
    >
      {meets ? (
        <Check className="text-green-600" />
      ) : (
        <X className="text-red-600" />
      )}
      <Box ml={10}>{label}</Box>
    </Text>
  );
};

export const getStrength = (
  password: string,
  requirements: Array<REQUIREMENT>
) => {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
};
