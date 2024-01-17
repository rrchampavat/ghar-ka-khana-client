import { useState } from "react";
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
import ScrollArea from "@/ui/wrappers/scroll-area";
import Title from "@/ui/components/title";
import Divider from "@/ui/components/divider";
import Anchor from "@/ui/components/anchor";

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
        "flex items-center space-x-2 rounded-md p-2 font-medium text-text hover:bg-hover data-[active=true]:bg-primary data-[active=true]:text-white sm:text-white sm:data-[active=true]:bg-background sm:data-[active=true]:text-hover"
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
          "!sticky top-0 col-span-1 overflow-y-auto bg-white px-5 py-2 sm:h-screen sm:bg-primary"
        }
      >
        <div>
          <Anchor underline="never">
            <Title className="cursor-pointer text-center text-primary sm:text-white">
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
            className="flex items-center space-x-2 rounded-md p-2 font-medium text-text hover:bg-hover data-[active=true]:bg-primary data-[active=true]:text-white sm:text-white sm:data-[active=true]:bg-background sm:data-[active=true]:text-hover"
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
            className="flex items-center space-x-2 rounded-md p-2 font-medium text-text hover:bg-hover data-[active=true]:bg-primary data-[active=true]:text-white sm:text-white sm:data-[active=true]:bg-background sm:data-[active=true]:text-hover"
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
