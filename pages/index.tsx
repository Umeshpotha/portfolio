import { fadeInUp, routeFade, stagger } from "@/animations";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="px-6 flex flex-col pt-1 flex-grow "
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h5 className="my-2 font-medium dark:bg-dark-200 p-4 pt-6 rounded-lg">
        I am currently pursuing my bachelors of technology in Computer Science
        Engineering and I am a passionate Tech Enthusiast. I am currently
        working on Generative AI with a deeper understanding in NLP and Cloud
        Computing.
      </h5>
      <div
        className="p-4 mt-5 bg-gray-400 flex-grow dark:bg-dark-500"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-1 font-bold text-xl tracking-wide">What I Know</h6>
        <motion.div
          className="grid lg:grid-cols-2 gap-6"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="lg:grid-cols-span-1 rounded-lg bg-gray-200 dark:bg-dark-200 p-2"
              variants={fadeInUp}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
