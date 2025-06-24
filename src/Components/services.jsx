import React, {useRef} from 'react';
import { motion , useInView } from "framer-motion";



const Services = () =>
{

    const ref =useRef()

    const isInView= useInView(ref,{margin:"-100px"})


    const servicesDetails=[
        {
            header:"Branding",
            servicesExplanations:"Developed responsive user interfaces using Next.js and\n" +
                "Tailwind CSS",
        },
        {
            header:"UI/UX Design",
            servicesExplanations:"This involves designing the visual layout, aesthetics (UI), and overall user experience (UX) of the front-end",
        },
        {
            header:"Performance Optimization",
            servicesExplanations:" Improving website speed and efficiency through code optimization and other techniques.",
        },
        {
            header:"Solid",
            servicesExplanations:"Maintained scalable, clean, and maintainable code following\n" +
                "SOLID principles",
        },


    ]
    const variants=
        {

        initial: {
            x:-500,
            y:100,
            opacity:0,
        },
         animate:
             {
                 x:0,
                 y:0,
                 opacity: 1,
                 transition:{
                     duration:1,
                     staggerChildren:0.1,
                 }

             }
         }



    return (
        <motion.div className="h-full flex
        flex-col gap-6 lg:gap-12 text-white" variants={variants} initial="initial"  //whileInView="animate"
        /*animate={isInView && "animate"}*/ animate={"animate"} ref={ref}>

            <motion.div className="flex lg:flex-[0.5_0_0%] flex-[0.25_0_0%] justify-end items-center gap-4 " variants={variants}>
                <p className="text-[15px] font-bold text-right text-gray-600">I am focus on your new brand</p>
                <hr className="w-[250px] lg:w-[450px]  border-t-1 border-solid border-gray-200"/>
            </motion.div>

            <motion.div className=" flex lg:flex-[1_1_0%] flex-[0.5_1_0%] flex-col items-center justify-center text-center " variants={variants}>

                        <motion.div className="title flex flex-col lg:flex-row justify-center items-center  gap-5">
                            <motion.img className="w-[150px] h-[50px] lg:w-[300px] lg:h-[100px] object-cover rounded-full gap-2"
                                        src="/src/assets/images/people.webp" alt="Parallex"/>
                            <h1 className="text-[20px] lg:text-[60px] font-thin">
                                <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                            </h1>
                        </motion.div>

                        <motion.div className="title flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16">
                            <h1 className="text-[20px] lg:text-[60px] font-thin">
                                <motion.b whileHover={{color:"orange"}}>For your</motion.b> Business.</h1>
                            <button className="w-[150px] h-[50px] lg:w-[300px] lg:h-[100px] rounded-full text-xl lg:text-2xl
                             bg-yellow-600 text-black cursor-pointer">What we do?</button>
                        </motion.div>

            </motion.div>

            <motion.div className="four-div mx-[16px] grid grid-cols-4 gap-[8px] " variants={variants}>

                {
                    servicesDetails.map((service) => (
                        <motion.div className=" border-none rounded lg:border-solid lg:border-2 lg:border-gray-500 flex flex-col  items-center
                    "
                                    whileHover={{background:"lightgray",color:"black"}}>
                            <motion.h1 className="text-xl lg:text-3xl text-center lg:text-left">{service.header}</motion.h1>
                            <motion.div className="flex justify-between items-center">
                            <motion.p className="hidden lg:block">{service.servicesExplanations} </motion.p>
                            <motion.button className=" p-[5px] lg:p-[10px] text-xl lg:text-3xl  bg-yellow-600  text-blue-800 items-center rounded">Go</motion.button>
                            </motion.div>

                        </motion.div>
                    ))
                }





            </motion.div>
        </motion.div>
    );
};

export default Services;