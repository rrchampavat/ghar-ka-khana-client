import Anchor from "@/ui/components/anchor";
import Divider from "@/ui/components/divider";
import Title from "@/ui/components/title";

const NavHeader = () => {
  return (
    <div className="!sticky top-0 px-4 sm:my-2">
      <Anchor underline="never">
        <Title className="cursor-pointer text-center text-white">DUKAAN</Title>
      </Anchor>
      <Divider />
    </div>
  );
};

export default NavHeader;
