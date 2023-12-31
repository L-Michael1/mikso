import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
          {currentRoute === "/" ? "mikso" : `mikso / ${currentRoute.slice(1)}`}
        </title>
        <meta name="description" content={description} />
        <meta name="author" content="Michael Lam" />
        <meta name="keywords" content="mikso, nextjs, t3, portfolio" />
        {icon ? (
          <link rel="icon" href={icon} />
        ) : (
          <link rel="icon" href="/transparent_logo.png" />
        )}
      </Head>
      <main className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
        <Navbar />
        <div className="mx-auto max-w-2xl">{children}</div>
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default Layout;
