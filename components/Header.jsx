import Link from "next/link";
import { Button } from "./ui/button";

import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";
const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/">
          <Image
            src="/assets/letter-d.png"
            alt="Logo"
            width={50}
            height={30}
            className="object-contain"
          />
        </Link>

        {/* dekstop nav & hire me button */}
        <div className="items-center hidden gap-8 xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
