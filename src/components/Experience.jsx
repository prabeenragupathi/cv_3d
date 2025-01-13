import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants/constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

//card component
const ExperienceCard = ({ index, experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.data}
      dateClassName="text-white text-[14px] font-bold"
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[70%] h-[70%] object-contain"
          />
        </div>
      }
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.date}
        </p>
        <ul className="list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className={`text-white-100 text-[14px] pl-1 tracking-wider`}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
      </motion.div>

      {/* ---vetcial time line */}
      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} index={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
