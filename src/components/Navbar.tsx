import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import IconButton from "~/components/ui/IconButton";
import { GoMoon, GoSun } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import LinkRoute from "./ui/LinkRoute";
import Link from "next/link";
import Image from "next/image";
import MobiNav from "./MobiNav";
import useWindowDimensions from "~/hooks/useWindowDimensions";

export const links = [
  { name: "About", href: "/" },
  { name: "Projects", href: "/projects" },
];

const iconLinks = [
  {
    className: "m-2 my-8",
    href: "https://github.com/L-Michael1",
    icon: <FiGithub size={24} />,
  },
  {
    className: "m-2 my-8",
    href: "https://www.linkedin.com/in/mlam11/",
    icon: <AiOutlineLinkedin size={24} />,
  },
  {
    className: "m-2 my-8",
    href: "mailto:m.lam08@outlook.com",
    icon: <AiOutlineMail size={24} />,
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="flex w-full justify-between px-6 sm:px-12">
      <div className="my-auto">
        {mounted && (
          <Link href="/">
            <Image
              src={theme === "dark" ? "/mikso_dark.png" : "/mikso_light.png"}
              alt="Mikso"
              width={500}
              height={500}
              className="h-12 w-12"
            />
          </Link>
        )}
      </div>

      {mounted && width < 640 ? (
        <div className="flex">
          <>
            {iconLinks.map((icon) => {
              return (
                <a key={icon.href} href={icon.href} target="_blank">
                  <IconButton className={icon.className} icon={icon.icon} />
                </a>
              );
            })}
            <IconButton
              className="m-2 my-8"
              icon={
                theme === "dark" ? <GoSun size={24} /> : <GoMoon size={24} />
              }
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          </>
          <div className="my-7">
            <MobiNav />
          </div>
        </div>
      ) : (
        <div className="flex">
          {links.map((link) => {
            return (
              <LinkRoute className="m-4 my-8" key={link.name} href={link.href}>
                <span>{link.name}</span>
              </LinkRoute>
            );
          })}
          <div className="flex">
            {mounted && (
              <>
                {iconLinks.map((icon) => {
                  return (
                    <a key={icon.href} href={icon.href} target="_blank">
                      <IconButton className={icon.className} icon={icon.icon} />
                    </a>
                  );
                })}
                <IconButton
                  className="m-2 my-8"
                  icon={
                    theme === "dark" ? (
                      <GoSun size={24} />
                    ) : (
                      <GoMoon size={24} />
                    )
                  }
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
