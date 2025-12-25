import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-auth-light dark:bg-auth-dark flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat">
      {children}
    </main>
  );
};

export default AuthLayout;
