import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface iLayoutProps {
  children: React.ReactNode;
  description: string;
  icon?: string;
}

const Layout = ({ children, description, icon }: iLayoutProps) => {
  const currentRoute = useRouter().pathname;

  return (
    <>
      <Head>
        <title>
          {currentRoute === "/" ? "mikso" : `mikso // ${currentRoute.slice(1)}`}
        </title>
        <meta name="description" content={description} />
        <meta name="author" content="Michael Lam" />
        <meta name="keywords" content="mikso, nextjs, t3, portfolio" />
        {icon && <link rel="icon" href={icon} />}
      </Head>
      <main>
        {/* <Navbar /> */}
        <div className="mx-auto">{children}</div>
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default Layout;
