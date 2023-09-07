import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Front-end Development',
    description: 'I am a front-end developer skilled in HTML, CSS, Tailwind CSS, and React, crafting visually appealing and responsive web interfaces. My expertise ensures dynamic and user-friendly web applications, delivering exceptional user experiences.',
    link: 'Learn more'
  },
  {
    name: 'Problem Solving',
    description: 'You excel as a problem solver, adept at analyzing complex issues, crafting creative solutions, and adapting to diverse challenges with precision and efficiency.',
    link: 'Learn more'
  }
];
const Services = () => {
  return <section className='section' id='services'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I Do</h2>
          <h3 className='h3 max-w-[455px] mb-16 '>I'm a Freelancer Front-end developer with over 1 years of experience.</h3>
          <button className='btn btn-sm'>See my work</button>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        >
          {
            services.map((service, index) => {
              const { name, description, link } = service;
              return (
                <div className='border-b border-white/20 h-[200px] mb-[38px] flex ' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tacking-wider font-primary font-semmibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div>
                    <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight/></a>
                    <a href="#" className='text-gradient text-sm'>{link}</a>
                  </div>

                </div>
              )
            })
          }
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
