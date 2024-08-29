import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block lg:hidden cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col ">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
