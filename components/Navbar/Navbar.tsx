import Link from "next/link";
import Image from "next/image";
import { ActionItemsNavBar } from "./ActionItemsNavBar";
import { HiddenNav, MobileMenuItem as MobileNavbarItem } from "./MobileNavbar";

export function Navbar() {
  return (
    <header className="border-b border-primary-200 sticky top-0 z-40">
      <div className="mx-auto w-full px-2 backdrop-blur-md bg-primary-50/90">
        <div className="flex items-center py-1 h-16">
          <Link href="/" className="pl-6 py-4">
            <Image width={0} height={0} src="/img/logo.svg" alt="DataMap" className="w-fit h-9" />
          </Link>

          <HiddenNav items={["Search", "Tools", "Support"]}>
            <MobileNavbarItem id="mobileNavbarItemSign" href={`${process.env.NEXT_PUBLIC_DATAMAP_BASE_URL}/account/login?phase=sign-in&tenancy=datamap%2Fproduction%2Fdata-amazon`}>
              Sign in
            </MobileNavbarItem>
          </HiddenNav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <ActionItemsNavBar />
          </div>
        </div>
      </div>
    </header>
  );
}
