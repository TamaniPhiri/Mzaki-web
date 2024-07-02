import { ReactNode } from "react";
import Nav from "./nav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-col h-full min-h-screen mx-auto px-4 w-full max-w-7xl md:px-8">
      <Nav />
      <main className="h-full">{children}</main>
    </section>
  );
};

export default Layout;
