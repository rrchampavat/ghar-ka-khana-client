import { useState } from "react";
import NavHeader from "./NavHeader";
import NavLinks from "./NavLinks";
import NavFooter from "./NavFooter";

const Navbar = () => {
  const [active, setActive] = useState("Billing");

  return (
    <aside className="flex h-[53.4rem] flex-col justify-between bg-primary sm:h-screen">
      <div>
        <NavHeader />

        <NavLinks active={active} setActive={setActive} />
      </div>

      <NavFooter active={active} setActive={setActive} />
    </aside>
  );
};

export default Navbar;
