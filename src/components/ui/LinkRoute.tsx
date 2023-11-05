import React from "react";
import Link from "next/link";

interface iLinkRouteProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const LinkRoute = ({ href, className, children }: iLinkRouteProps) => {
  return (
    <Link
      href={href}
      className={`flex cursor-pointer items-center rounded-md text-zinc-400 transition-all duration-200 hover:text-zinc-600 dark:hover:text-zinc-200 ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkRoute;
