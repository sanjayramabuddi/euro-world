import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "./constants";
import MobileMenu from "./MobileMenu";
import DesktopNav from "./DesktopNav";

export default function Header() {
  return (
    <header className="fixed z-50 w-full backdrop-blur-lg bg-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
        <Link href={"/"} className="">
          <Image
            src="/logos/logo.png"
            alt="euroworld-logo"
            width={120}
            height={100}
          />
        </Link>

        <DesktopNav></DesktopNav>

        <Link
          href="/contact"
          className="px-4 py-1.5 rounded-md border bg-blue-500/10 text-blue-900 backdrop-blur-md transition hover:bg-blue-700/50  hover:text-white"
        >
          Contact Us
        </Link>

        <MobileMenu links={NAV_LINKS} />
      </div>
    </header>
  );
}
