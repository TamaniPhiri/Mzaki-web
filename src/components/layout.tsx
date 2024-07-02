import { ReactNode } from "react";
import Nav from "./nav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-col h-full min-h-screen mx-auto w-full max-w-7xl">
      <Nav />
      <main className="h-full">{children}</main>
    </section>
  );
};

export default Layout;
