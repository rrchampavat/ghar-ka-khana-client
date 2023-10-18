import { AutoComplete } from "@/components/autocomplete";
import Avatar from "@/components/avatar";
import Indicator from "@/components/indicator";
import { Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-5 py-2 shadow-md">
      <AutoComplete
        radius="xl"
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
        leftSection={<Search className="text-primary" />}
      />
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
