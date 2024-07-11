import { Project } from "@/type";
import { Span } from "next/dist/trace";
import React, { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animations";
const ProjectCard: FunctionComponent<{
  project: Project;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    description,
    image_path,
    giturl,
    deployedurl,
    category,
    TechStack,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  // const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        width="300"
        height="150"
        layout="responsive"
        quality="100"
      />

      <p className="my-2 text-center ">{name}</p>

      {showDetail === id && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 p-2 md:p-10 rounded-lg">
          <motion.div variants={stagger} initial="initial" animate="animate">
            {/* <img src={image_path} alt={name} /> */}
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-100"
            >
              <Image
                src={image_path}
                alt={name}
                width="300"
                height="150"
                layout="responsive"
                quality="100"
              />
            </motion.div>
            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadeInUp}
            >
              <a
                href={giturl}
                className="flex items-center px-4 py-2 text-lg bg-gray-200 dark:bg-dark-200  "
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                href={deployedurl}
                className=" flex items-center px-4 py-2 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              className="mb-3 text-xl font-medium md:text-2xl "
              variants={fadeInUp}
            >
              {name}
            </motion.h2>
            <motion.h3 className="mb-3 font-medium" variants={fadeInUp}>
              {description}
            </motion.h3>
            <motion.div
              className="flex flex-warp mt-5 space-x-2 text-sm tracking-wider"
              variants={fadeInUp}
            >
              {TechStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute top-3 rounded-full p-1 right-3 focus:outline-none bg-gray-200 dark:bg-dark-200 "
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
