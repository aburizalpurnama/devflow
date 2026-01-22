import Navbar from "@/components/navigation/navbar";
import LeftSidebar from "@/components/navigation/LeftSidebar";
import React, { ReactNode } from "react";
import RighSidebar from "@/components/navigation/RighSidebar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      {/* it's a fixed component, it taken away from its original position and now its seems like floating on the canvas */}
      <Navbar />

      {/* because the Navbar is fixed, now this component takes its position. it occupied top of the canvas */}
      <div className="flex">
        {/* Leftsidebar is a sticky component, its still occupied its own position but it will stays on the screen when scrolled-out */}
        <LeftSidebar />

        {/*  */}
        <section className="flex min-h-screen flex-1 flex-col px-6 pt-36 pb-6 max-md:pb-14 sm:px-14">
          <div>{children}</div>
        </section>

        <RighSidebar />
      </div>
    </main>
  );
};

export default RootLayout;
