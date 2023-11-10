import { useEffect, useState } from "react";

type WindowDimensionsProps = {
  width: number;
  height: number;
};

const getWindowDimensions = (): WindowDimensionsProps => {
  if (typeof window !== "undefined") {
    const { innerWidth, innerHeight } = window;
    return {
      width: innerWidth,
      height: innerHeight,
    };
  }

  return {
    width: 0,
    height: 0,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] =
    useState<WindowDimensionsProps>(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowDimensions]);

  return windowDimensions;
};

export default useWindowDimensions;
