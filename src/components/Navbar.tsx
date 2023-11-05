import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

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
            <button onClick={() => setTheme("light")}>Light Mode</button>
          </div>
          <div>
            <button onClick={() => setTheme("dark")}>Dark Mode</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
