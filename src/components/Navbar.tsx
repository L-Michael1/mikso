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
import { links } from "~/global/constants";

const iconLinks = [
  {
    href: "https://github.com/L-Michael1",
    icon: <FiGithub size={24} />,
  },
  {
    href: "https://www.linkedin.com/in/mlam11/",
    icon: <AiOutlineLinkedin size={24} />,
  },
  {
    href: "mailto:m.lam08@outlook.com",
    icon: <AiOutlineMail size={24} />,
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const handleSetTheme = () => {
    console.log(
      "Debug: setting theme to " + (theme === "dark" ? "light" : "dark"),
    );
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  let imgSrc;
  let iconSrc;

  switch (resolvedTheme) {
    case "light":
      imgSrc = "/mikso_light.png";
      iconSrc = <GoMoon size={24} />;
      break;
    case "dark":
      imgSrc = "/mikso_dark.png";
      iconSrc = <GoSun size={24} />;
      break;
    default:
      imgSrc = "";
      iconSrc = "";
      break;
  }

  return (
    <nav className="flex w-full justify-between px-6 sm:px-12">
      <div className="my-auto">
        {mounted && (
          <Link href="/">
            <Image
              src={imgSrc}
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
                  <IconButton className="m-2 my-8" icon={icon.icon} />
                </a>
              );
            })}
            <IconButton
              className="m-2 my-8"
              icon={iconSrc}
              onClick={handleSetTheme}
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
                      <IconButton className="m-2 my-8" icon={icon.icon} />
                    </a>
                  );
                })}
                <IconButton
                  className="m-2 my-8"
                  icon={iconSrc}
                  onClick={handleSetTheme}
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
