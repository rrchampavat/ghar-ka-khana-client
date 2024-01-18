import ScrollArea from "@/ui/wrappers/scroll-area";
import {
  Bell,
  Database,
  Fingerprint,
  KeyRound,
  Receipt,
  Settings,
  Shield
} from "lucide-react";
import type { MouseEvent } from "react";
import type { ACTIVE_TAB } from "../NavFooter";

const data = [
  { link: "", label: "Notifications", icon: <Bell /> },
  { link: "", label: "Billing", icon: <Receipt /> },
  { link: "", label: "Security", icon: <Shield /> },
  { link: "", label: "SSH Keys", icon: <KeyRound /> },
  { link: "", label: "Databases", icon: <Database /> },
  { link: "", label: "Authentication", icon: <Fingerprint /> },
  { link: "", label: "Other Settings", icon: <Settings /> }
];

export interface NAV_LINK {
  link: string;
  label: string;
  icon: JSX.Element;
}

const NavLinks = (props: ACTIVE_TAB) => {
  const { active, setActive } = props;

  const handleClick = (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    item: NAV_LINK
  ) => {
    e.preventDefault();
    setActive(item.label);
  };

  return (
    <ScrollArea
      offsetScrollbars
      type="scroll"
      className="space-y-1 overflow-y-auto bg-primary px-4 pt-3"
    >
      {data.map((item) => (
        <a
          className={
            "flex items-center space-x-2 rounded-md p-2 font-medium text-white hover:bg-hover data-[active=true]:bg-background data-[active=true]:text-hover"
          }
          data-active={item.label === active || undefined}
          href={item.link}
          key={item.label}
          onClick={(event) => handleClick(event, item)}
        >
          {item.icon}
          <span>{item.label}</span>
        </a>
      ))}
    </ScrollArea>
  );
};

export default NavLinks;
