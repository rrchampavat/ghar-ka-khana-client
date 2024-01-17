import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Bell, Menu, Search } from "lucide-react";
import Navbar from "../navbar";
import Drawer from "@/ui/components/drawer";
import AutoComplete from "@/ui/components/autocomplete";
import Indicator from "@/ui/components/indicator";
import Avatar from "@/ui/components/avatar";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 56.25rem)");
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-5 py-2 shadow-md">
      <div className="flex items-center space-x-3">
        <Drawer
          opened={opened}
          onClose={close}
          className="block bg-primary sm:hidden"
          size="xs"
        >
          <Navbar />
        </Drawer>

        <Menu onClick={open} className="block sm:!hidden" />

        <AutoComplete
          radius="xl"
          size={isMobile ? "xs" : "md"}
          data={[
            {
              group: "Frontend",
              items: [
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" }
              ]
            },
            {
              group: "Backend",
              items: [
                { value: "nodejs", label: "NodeJS" },
                { value: "java", label: "Java" }
              ]
            },
            {
              group: "Disabled",
              items: [
                { value: "vue", label: "Vue", disabled: true },
                { value: "svelte", label: "Svelte", disabled: true }
              ]
            }
          ]}
          leftSection={<Search className="w-5 text-primary sm:w-6" />}
        />
      </div>

      <div className="flex items-center space-x-2 text-primary">
        <Indicator label="1">
          <Bell />
        </Indicator>
        <Avatar>RC</Avatar>
      </div>
    </header>
  );
};

export default Header;
