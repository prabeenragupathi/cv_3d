import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { git, github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { p } from "framer-motion/client";

const ProjectCard = (props) => {
  return (
    <motion.div variants={fadeIn("up", "spring", props.index * 0.5, 0.75)}>
      <Tilt
        option={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-fit"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex card-img_hover justify-end m-3">
            <div
              onClick={() => window.open(props.source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt={props.source_code_link}
                className="w-4/5 h-4/5"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{props.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{props.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {props.tags.map((tag, index) => {
            return (
              <p
                key={tag.name}
                className={`text-[14px] ${tag.color} py-1 px-2 `}
              >
                #{tag.name}
              </p>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          In my project portfolio, I have focused on building functional and
          efficient web solutions tailored to meet specific business needs. From
          crafting visually appealing websites to developing a robust web
          application for inventory and business logic management, my projects
          demonstrate a strong foundation in web technologies like HTML, CSS,
          and JavaScript. Each project highlights my problem-solving skills,
          attention to detail, and commitment to delivering impactful digital
          solutions.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={`project-${project.name}`}
              index={index}
              {...project}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
