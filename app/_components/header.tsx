import Image from "next/image";

import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Image src="/logo.png" alt="FSW Foods" height={30} width={100}></Image>
      <Button
        // size="icon"
        variant="outline"
        className="border-none bg-transparent px-5 pt-6"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
