import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img4 from "../assets/portfolio.jpg";
import img5 from "../assets/phone-hunter.jpg";
import img6 from "../assets/ema-joh.jpg";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col  lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0"
          >
            <div className="flex-1">
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                odio laudantium, voluptatem labore nulla rem sequi id modi!
                Libero natus quibusdam a ipsum optio magni autem voluptas
                deserunt consequatur accusamus?
              </p>
              <a href="https://github.com/IJE2704">
                <button className="btn btn-sm">View all projects</button>
              </a>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mb-7">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                <a href="https://restaurant-lemon-pi.vercel.app/" />
              </div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src="https://i.ibb.co/XpPcnMx/414671826-341449348689320-7361849104605530426-n.png"
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <div className=" flex justify-between items-center w-full">
                  <p className="text-gradient pr-5">Restaurant</p>{" "}
                  <a href="https://restaurant-lemon-pi.vercel.app/">
                    <button className="btn btn-sm ">Visit</button>
                  </a>
                </div>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">
                  Restaurant Landing Experience
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex-col gap-y-10 "
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mb-7">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src="https://i.ibb.co/FV11CZW/412497379-1109164567161989-3804230388466391348-n.png"
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <div className=" flex justify-between items-center w-full">
                  <p className="text-gradient pr-5">Gpt-3</p>{" "}
                  <a href="https://gpt3-opal-theta.vercel.app/">
                    <button className="btn btn-sm ">Visit</button>
                  </a>
                </div>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">Gpt-3 Landing Page</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src="https://i.ibb.co/rZvV3T1/416754841-698336762098919-4812476798748202189-n.png"
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <div className=" flex justify-between items-center w-full">
                  <p className="text-gradient pr-5">HooBank</p>{" "}
                  <a href="https://hoobank-eight-kappa.vercel.app/">
                    <button className="btn btn-sm ">Visit</button>
                  </a>
                </div>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">
                  HooBank Landing Page
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
