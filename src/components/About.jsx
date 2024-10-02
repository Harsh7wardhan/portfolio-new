import React from "react";
// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import classes from "./About.module.css";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  // <Tilt className='xs:w-[250px] w-full'>
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="w-full bg-gray border border-gray-300 p-[1px] rounded-[20px] shadow-card"
  >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
    >
      <img
        src={icon}
        alt="web-development"
        className="w-16 h-16 object-contain"
      />

      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </div>
  </motion.div>
  // </Tilt>
);

const About = () => {
  return (
    <>
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a full-stack developer skilled in building frontend applications
          from the ground up and crafting backend microservices. With expertise
          in TypeScript, ReactJS, NextJS, NodeJS, and SQL, I've also worked with
          technologies like WebSockets, Kafka, and WebRTC. Currently, I work on
          products that enhance lead capture and conversion, leveraging AI to
          transform customer experiences. A quick learner and a strong
          collaborator, I partner closely with clients to deliver scalable,
          user-friendly solutions that address real-world challenges. Let's
          bring your vision to life together!<br></br>
          Here are my top skills !
        </motion.p>

        <div className={classes.gg}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
