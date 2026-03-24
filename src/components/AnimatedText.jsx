import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;