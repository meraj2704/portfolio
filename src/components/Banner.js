import React from "react";
import Image from "../assets/Personal_Picture-removebg-preview.png";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import resume from "../assets/Meraj_Hossain-Resume.pdf"
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-12 lg:items-center ">
          <div className="flex-1 text-center font-secondary lg:text-left">
            {/* here my name */}
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leadeing-[0.8] md:text-[70px] xl:text-[110px] mb-4 lg:mb-8 "
            >
              <span>Meraj </span>Hossain
            </motion.h1>
            {/* here hEADLINE */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] md:text-[55px] xl:text-[60px] font-secondary font-semibold uppercase leading-[1] mt-4"
            >
              <span className="mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "MERN Developer",
                  2000,
                  "Front-End Developer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            {/* here bio */}
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Passionate front-end developer with a flair for crafting immersive
              web experiences. I transform ideas into visually stunning,
              user-centric websites. Obsessed with precision and driven by
              innovation, I'm dedicated to turning digital dreams into
              interactive realities. Let's collaborate to bring your vision to
              life.
            </motion.p>
            {/* contact options */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a href="https://www.linkedin.com/in/meraj-hossain-6566b8231/">
                <button className="btn btn-sm">Contact Me</button>
              </a>
              <a
                href={resume}
                download='resume'
                className="text-gradient btn-link ml-4"
              >
                My Resume
              </a>
            </motion.div>
            {/* social links */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
            >
              <a href="https://github.com/IJE2704">
                <FaGithub></FaGithub>
              </a>
              <a href="https://www.linkedin.com/in/meraj-hossain-6566b8231/">
                <FaLinkedin></FaLinkedin>
              </a>
              <a href="#">
                <FaHackerrank></FaHackerrank>
              </a>
            </motion.div>
          </div>
          {/* here is mine picture */}
          <motion.div
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            whileInView={"show"}
            // viewport={{once:false, amount:0.7}}
            className="hidden lg:flex flex-1 max-w-[320px] xl:max-w-[428px] "
          >
            <img
              className="w-full h-full rounded-full"
              src="https://i.ibb.co/HNfvsc8/Meraj.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
