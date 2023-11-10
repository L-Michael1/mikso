import React from "react";
import { motion } from "framer-motion";

interface iUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const Up = ({ children, delay, className }: iUpProps) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 0.9 }}
      transition={{
        duration: 0.4,
        delay: delay,
      }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Up;
