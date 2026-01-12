import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, SheetTitle, SheetClose, Sheet } from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";

const MobileNavigation = async () => {
  const session = await auth();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image src={"/icons/hamburger.svg"} width={36} height={36} alt="menu" className="invert-colors sm:hidden" />
      </SheetTrigger>
      <SheetContent side={"left"} className="background-light900_dark200 border-none lg:w-100">
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href={ROUTES.HOME} className="flex items-center gap-1">
          <Image src="/images/site-Logo.svg" width={23} height={23} alt="DevFlow Logo" />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
            Dev<span className="text-primary-500">Flow</span>
          </p>
        </Link>
        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-4 pt-16">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>

          <div className="flex flex-col gap-3">
            {session ? (
              <SheetClose asChild>
                <form
                  action={async () => {
                    "use server";

                    await signOut({ redirectTo: ROUTES.SIGN_IN });
                  }}
                >
                  <Button
                    type="submit"
                    className="small-medium light-border btn-tertiary text-dark400_light900 min-h-10.25 w-full rounded-lg px-4 py-3 shadow-none"
                  >
                    Log Out
                  </Button>
                </form>
              </SheetClose>
            ) : (
              <>
                <SheetClose asChild>
                  <Link href={ROUTES.SIGN_IN}>
                    <Button className="small-medium btn-secondary min-h-10.25 w-full rounded-lg px-4 py-3 shadow-none">
                      <p className="primary-text-gradient">Log In</p>
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={ROUTES.SIGN_UP}>
                    <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-10.25 w-full rounded-lg px-4 py-3 shadow-none">
                      Sign Up
                    </Button>
                  </Link>
                </SheetClose>
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
