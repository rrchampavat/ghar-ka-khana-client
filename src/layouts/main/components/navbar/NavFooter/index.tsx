import Divider from "@/ui/components/divider";
import { ArrowLeftRight, LogOut } from "lucide-react";
import type { Dispatch, MouseEvent, SetStateAction } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export interface ACTIVE_TAB {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

const NavFooter = (props: ACTIVE_TAB) => {
  const { active, setActive } = props;

  const navigate = useNavigate();

  const handleClick = (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    link: string
  ) => {
    e.preventDefault();
    setActive(link);

    if (link === "Logout") {
      Cookies.remove("accessToken");
      navigate("/login");
    }
  };

  return (
    <div className="!sticky bottom-0 mt-5 bg-primary px-4 py-3">
      <Divider className="mb-5" />

      <a
        href="#"
        className="flex items-center space-x-2 rounded-md p-2 font-medium text-white hover:bg-hover data-[active=true]:bg-background data-[active=true]:text-hover"
        onClick={(event) => handleClick(event, "Change account")}
        data-active={active === "Change account" || undefined}
      >
        <ArrowLeftRight />
        <span>Change account</span>
      </a>

      <a
        href="#"
        className="flex items-center space-x-2 rounded-md p-2 font-medium text-white hover:bg-hover data-[active=true]:bg-background data-[active=true]:text-hover"
        onClick={(event) => handleClick(event, "Logout")}
        data-active={active === "Logout" || undefined}
      >
        <LogOut />
        <span>Logout</span>
      </a>
    </div>
  );
};

export default NavFooter;
