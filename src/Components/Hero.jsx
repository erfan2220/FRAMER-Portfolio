import React from 'react';
import {motion} from "framer-motion";

function Hero()
{


    const textVariants=
        {
       initial:{
           x:0,
           opacity:0,
       },
       animate:
           {
               x:0,
               opacity: 1,
               transition:{
                   duration:1,
                   staggerDirection:0.1,
               },
           },
            scrollButton:
                {
                    opacity:0,
                    y:10,
                    transition:
                        {
                            duration: 2,
                         repeat:Infinity,
                        }

                }
    }

    const imageVariants=
        {
       initial:{
           x:0,
       },
       animate:
           {
               x:"-220%",
               opacity: 1,
               transition:{
                  duration:20,
                   repeat:Infinity,
                   repeatType:"mirror",
                   staggerDirection: 0.1,
               },
           },

    }

    return (
        <div className=" h-[100vh]  overflow-hidden relative
         bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
            <div className="textcontainer h-full flex  pt-12  lg:max-w-[1366px] lg:mx-auto">
                <motion.div className="flex z-999 flex-col w-full items-center  md:items-start  gap-4 lg:gap-8" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 className="text-3xl  lg:text-6xl text-purple-700 tracking-[4px]" variants={textVariants}>Erfan Hashemi</motion.h2>
                    <motion.h1 className="text-3xl md:text-6xl lg:leading-[5rem] text-white " variants={textVariants}>Web developer and <br/>UI designer</motion.h1>
                    <motion.div className="flex  flex-row gap-4 cursor-pointer" variants={textVariants}>
                        <a href="./cv.pdf" download>
                            <motion.button className="text-[14px] border-2 border-white rounded px-4 py-3
                            cursor-pointer text-white" variants={textVariants}>Download Cv</motion.button>
                        </a>

                        <a href="#Contact"><motion.button className="text-[14px] border-2 border-white rounded px-4 py-3 cursor-pointer bg-white text-[#0c0c1d]"
                                       variants={textVariants}>Contact me</motion.button></a>
                    </motion.div>
                        <motion.img src="/src/assets/images/scroll.png" alt="scroll" className="w-[50px] "
                                    variants={textVariants} animate="scrollButton"/>
                </motion.div>
            </div>
            <motion.div className=" absolute text-[50vh] bottom-[-120px] whitespace-nowrap
            text-[#ffffff09] w-1/2 bold" variants={imageVariants} initial="initial"
                 animate="animate"
            >
                Writer Content Creator
            </motion.div>
            <div className=" h-1/2 w-full bottom-0
            absolute lg:h-full  lg:top-0 lg:right-0 lg:w-1/2">
                <img src="../assets/images/background.svg" alt="hero" width={1000} height={1000} className="object-contain w-full h-full "/>
            </div>
        </div>
    );
}

export default Hero;

