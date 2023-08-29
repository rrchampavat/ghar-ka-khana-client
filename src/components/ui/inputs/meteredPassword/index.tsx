import { ReactNode, useState } from "react";
import { Progress, Popover, Box } from "@mantine/core";
import { PasswordRequirement, getStrength } from "./helper";

export type REQUIREMENT = { re: RegExp; label: string };

interface METERED_PASSWORD_PROPS {
  children: ReactNode;
  passwordRequirements: Array<REQUIREMENT>;
  value: string;
}

const MeteredPassword = (props: METERED_PASSWORD_PROPS) => {
  const { children, passwordRequirements, value } = props;

  const [isPopoverOpened, setIsPopoverOpened] = useState(false);

  const checks = passwordRequirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ));

  const strength = getStrength(value, passwordRequirements);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

  return (
    <Box className="w-full" mx="auto">
      <Popover
        opened={isPopoverOpened}
        position="bottom"
        width="target"
        transitionProps={{ transition: "pop" }}
      >
        <Popover.Target>
          <div
            onFocusCapture={() => setIsPopoverOpened(true)}
            onBlurCapture={() => setIsPopoverOpened(false)}
          >
            {children}
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Progress color={color} value={strength} size={5} mb="xs" />
          <PasswordRequirement
            label="Includes at least 6 characters"
            meets={value.length > 5}
          />
          {checks}
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
};

export default MeteredPassword;
