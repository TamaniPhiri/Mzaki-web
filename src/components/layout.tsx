import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <main>{children}</main>
    </section>
  );
};

export default Layout;
