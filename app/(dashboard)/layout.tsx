import Navbar from "@/components/Navbar";
import React from "react";

const DashboadLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DashboadLayout;
