import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import IconButton from "~/components/ui/IconButton";
import { GoMoon, GoSun } from "react-icons/go";
import LinkRoute from "./ui/LinkRoute";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {mounted && (
        <>
          <p>Navbar: The current theme is: {theme}</p>
          <div>
            <LinkRoute href={"/about"}>About</LinkRoute>
            <IconButton
              icon={
                theme === "dark" ? <GoSun size={24} /> : <GoMoon size={24} />
              }
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
