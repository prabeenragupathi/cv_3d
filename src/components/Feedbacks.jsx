import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { testimonials } from "../constants/constants";

const FeedbackCard = ({ index, testimonial }) => {
  return (
    <>
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
      >
        <p className="text-white font-black text-[48px]">"</p>
        <div className="mt-1">
          <p className="text-white tracking-wider text-[18px]">
            {testimonial.testimonial}
          </p>
          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex flex-1 flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient ">@</span>
                {testimonial.name}
              </p>
              <p className="mt-1 text-secondary text-[12px]">
                {testimonial.designation} of {testimonial.company}
              </p>
            </div>
            <img
              src={testimonial.image}
              alt={`feedback by ${testimonial.name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};
const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-l-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What Other's say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonial.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            index={index}
            key={testimonial.testimonial}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
