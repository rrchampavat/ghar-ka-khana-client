import { useState } from "react";
import { ScrollArea } from "@mantine/core";
import {
  ArrowLeftRight,
  Bell,
  Database,
  Fingerprint,
  KeyRound,
  LogOut,
  Receipt,
  Settings,
  Shield
} from "lucide-react";
import Title from "@/components/ui/title";
import Divider from "@/components/ui/divider";
import Anchor from "@/components/ui/anchor";

const data = [
  { link: "", label: "Notifications", icon: <Bell /> },
  { link: "", label: "Billing", icon: <Receipt /> },
  { link: "", label: "Security", icon: <Shield /> },
  { link: "", label: "SSH Keys", icon: <KeyRound /> },
  { link: "", label: "Databases", icon: <Database /> },
  { link: "", label: "Authentication", icon: <Fingerprint /> },
  { link: "", label: "Other Settings", icon: <Settings /> }
];

const Navbar = () => {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <a
      className={
        "flex items-center space-x-2 rounded-md p-2 font-medium text-white hover:bg-hover data-[active=true]:bg-background data-[active=true]:text-hover"
      }
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      {item.icon}
      <span>{item.label}</span>
    </a>
  ));

  return (
    <aside>
      <ScrollArea
        offsetScrollbars
        type="scroll"
        className={
          "!sticky top-0 col-span-1 h-screen overflow-y-auto bg-primary px-5 py-2"
        }
      >
        <div>
          <Anchor underline="never">
            <Title className="cursor-pointer text-center text-white">
              DUKAAN
            </Title>
          </Anchor>
          <Divider className="my-5" />
          {links}
        </div>

        <div className="mt-5">
          <Divider className="mb-5" />
          <a
            href="#"
            className="flex items-center space-x-2 rounded-md p-2 font-medium text-white hover:bg-hover data-[active=true]:bg-background data-[active=true]:text-hover"
            onClick={(event) => {
              event.preventDefault();
              setActive("Change account");
            }}
            data-active={active === "Change account" || undefined}
          >
            <ArrowLeftRight />
            <span>Change account</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-2 rounded-md p-2 font-medium text-white hover:bg-hover data-[active=true]:bg-background data-[active=true]:text-hover"
            onClick={(event) => {
              event.preventDefault();
              setActive("Logout");
            }}
            data-active={active === "Logout" || undefined}
          >
            <LogOut />
            <span>Logout</span>
          </a>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default Navbar;
