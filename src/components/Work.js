import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';
import img4 from '../assets/portfolio.jpg';
import img5 from '../assets/phone-hunter.jpg';
import img6 from '../assets/ema-joh.jpg';


const Work = () => {
  return <section className='section' id='work'>
    <div className="container mx-auto">
      <div className='flex flex-col  lg:flex-row gap-x-10'>
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-accent'>My Latest <br />Work</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio laudantium, voluptatem labore nulla rem sequi id modi! Libero natus quibusdam a ipsum optio magni autem voluptas deserunt consequatur accusamus?</p>
            <button className='btn btn-sm'>View all projects</button>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mb-7'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={img4} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Portfolio</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='text-3xl text-white'>Project Title</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex-col gap-y-10 '>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mb-7'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={img5} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Simple Web Page</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='text-3xl text-white'>Project Title</span>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={img6} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Ema-John Page</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='text-3xl text-white'>Project Title</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;
