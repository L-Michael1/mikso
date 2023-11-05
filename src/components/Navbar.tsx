import React from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Navbar: The current theme is: {theme}</p>
      <div>
        <button onClick={() => setTheme("light")}>Light Mode</button>
      </div>
      <div>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </div>
    </div>
  );
};

export default Navbar;
