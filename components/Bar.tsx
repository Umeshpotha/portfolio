import { FunctionComponent } from "react";

import { lang } from "../type";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{ value: lang }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10, // value of the bounce
        stiffness: 100, //
      },
    },
  };
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-pink-400 to-blue-500"
        style={{
          width: bar_width,
        }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" /> {name}
      </motion.div>
    </div>
  );
};
export default Bar;
