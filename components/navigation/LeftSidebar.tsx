import React from "react";
import NavLinks from "./navbar/NavLinks";
import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const LeftSidebar = async () => {
  const session = await auth();
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 left-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 max-sm:hidden lg:w-66.5 dark:shadow-none">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks isMobileNav={false} />
      </div>

      <div className="flex flex-col gap-3 pt-6">
        {session ? (
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
              <Image
                src="/icons/arrow-left.svg"
                alt="Log Out"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <p className="max-lg:hidden">Log Out</p>
            </Button>
          </form>
        ) : (
          <>
            <Button className="small-medium btn-secondary min-h-10.25 w-full rounded-lg px-4 py-3 shadow-none" asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Image
                  src="/icons/account.svg"
                  alt="Log In"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <p className="primary-text-gradient max-lg:hidden">Log In</p>
              </Link>
            </Button>
            <Button
              className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-10.25 w-full rounded-lg px-4 py-3 shadow-none"
              asChild
            >
              <Link href={ROUTES.SIGN_UP}>
                <Image
                  src="/icons/sign-up.svg"
                  alt="Sign Up"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <p className="max-lg:hidden">Sign Up</p>
              </Link>
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default LeftSidebar;
