import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import html from '../assets/html.png';
import css from '../assets/css1.png';
import bootstrap from '../assets/bootstrap.png';
import tailwind from '../assets/tailwind.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import figma from '../assets/figma.png';
import canva from '../assets/canva.png';
import vscode from '../assets/vscode.png';
import C from '../assets/c.png';
import cplus from '../assets/c++.png';
import mongodb from '../assets/mongodb.png';
import nextjs from '../assets/nextjs.png';
import nodejs from '../assets/nodejs.png';
import redux from '../assets/redux.png';
import firebase from '../assets/firebase.png';
import expressjs from '../assets/expressjs.png';
const Skills = () => {
    return (
        <section className='section mb-20' id='skills'>
            <div className="container mx-auto">
                <div className='flex flex-col items-center'>
                    <motion.div
                        variants={fadeIn('down', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='mb-20'>
                        <h2 className='h2 text-accent'>My Skills</h2>
                    </motion.div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-10'>
                        <motion.div
                            variants={fadeIn('right', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={html} alt="" />
                            <h4>HTML5</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={css} alt="" />
                            <h4>CSS</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={bootstrap} alt="" />
                            <h4>Bootstrap</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('left', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                             className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={tailwind} alt="" />
                            <h4>Tailwind</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('left', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={js} alt="" />
                            <h4>JavaScript</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={mongodb} alt="" />
                            <h4>MongoDB</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={expressjs} alt="" />
                            <h4>ExpressJs</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={react} alt="" />
                            <h4>React</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={nodejs} alt="" />
                            <h4>NodeJs</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={nextjs} alt="" />
                            <h4>NextJS</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={redux} alt="" />
                            <h4>Redux</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={firebase} alt="" />
                            <h4>Firebase</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={git} alt="" />
                            <h4>Git</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('right', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={github} alt="" />
                            <h4>GitHub</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('right', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={figma} alt="" />
                            <h4>Figma</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={canva} alt="" />
                            <h4>Canva</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={vscode} alt="" />
                            <h4>Vs Code</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('left', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={C} alt="" />
                            <h4>C programmming</h4>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('left', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className='group flex flex-col justify-items-center items-center '>
                            <img className='w-[60px] group-hover:scale-125' src={cplus} alt="" />
                            <h4>C++</h4>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;