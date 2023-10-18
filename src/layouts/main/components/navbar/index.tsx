import { ScrollArea } from "@mantine/core";

const Navbar = () => {
  return (
    <aside>
      <ScrollArea
        offsetScrollbars
        type="scroll"
        className="!sticky top-0 col-span-1 h-screen overflow-y-auto border px-5 py-2"
      >
        <h1>Navbar</h1>
      </ScrollArea>
    </aside>
  );
};

export default Navbar;
