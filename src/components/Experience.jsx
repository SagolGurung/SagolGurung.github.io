import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, AnimatePresence } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
    },
  },
};

const iconVariants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      duration: 0.3,
      delay: 0.2,
      type: "spring",
      stiffness: 100,
    },
  },
};

const dateVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

const ExperienceCard = ({ experience }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
      >
        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(29, 24, 54, 0.7)",
            backdropFilter: "blur(8px)",
            color: "#fff",
            borderRadius: "12px",
            border: "2px solid",
            borderImage:
              "linear-gradient(45deg, #8a2be2, #ff6f91) 1", // gradient border
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.4)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgba(35, 38, 49, 0.9)",
          }}
          date={
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={dateVariants}
            >
              {experience.date}
            </motion.div>
          }
          iconStyle={{
            background: experience.iconBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 0 4px #1d1836",
          }}
          icon={
            <motion.div
              className="flex justify-center items-center w-full h-full"
              variants={iconVariants}
              initial="initial"
              animate="animate"
            >
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-[60%] h-[60%] object-contain rounded-full"
              />
            </motion.div>
          }
        >
          <div className="transition-all duration-300 hover:scale-105">
            <h3 className="text-white text-[22px] font-bold mb-1 tracking-wider">
              {experience.title}
            </h3>
            <p
              className="text-secondary text-[15px] font-medium"
              style={{ margin: 0 }}
            >
              {experience.company_name}
            </p>
          </div>

          <ul className="mt-4 list-disc ml-5 space-y-2">
            {experience.points.map((point, idx) => (
              <li
                key={`experience-point-${idx}`}
                className="text-white-100 text-[14px] pl-1 leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      </motion.div>
    </AnimatePresence>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My History
        </h2>
      </motion.div>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline lineColor="#8a2be2">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
