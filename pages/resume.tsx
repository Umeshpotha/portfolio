import { fadeInUp, routeFade } from "@/animations";
import Bar from "@/components/Bar";
import { languages, tools } from "@/data";
import { motion } from "framer-motion";
import React from "react";

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={routeFade}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering(Data Science)
            </h5>
            <p className="font-semibold">Mohan Babu University (2022-2026)</p>
            <p className="my-3">
              I am currently pursuing B.tech in Computer Science Engineering
              from Mohan Babu University
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Data Analyst</h5>
            <p className="my-3 text-lg font-semibold">DM Enterprises</p>
            <p className="my-3">
              Have done Sales analysis of a product over different seasons and
              helped the Enterprise in delivering the product without any low
              stock or surplus
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
