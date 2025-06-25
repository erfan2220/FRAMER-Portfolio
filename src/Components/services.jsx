import React, {useRef} from 'react';
import { motion , useInView } from "framer-motion";



const Services = () =>
{

    const ref =useRef()

    const isInView= useInView(ref,{margin:"-100px"})


    const servicesDetails = [
        {
            header: "UI/UX Design",
            servicesExplanations: "Designed responsive and mobile-friendly interfaces using modern UI frameworks and tools like Tailwind CSS, ensuring visual consistency and accessibility."
        },
        {
            header: "Frontend Development",
            servicesExplanations: "Built scalable React and Next.js applications with Redux for state management and REST API integration. Experience with Three.js, WebSocket, and Framer Motion."
        },
        {
            header: "Performance Optimization",
            servicesExplanations: "Improved Core Web Vitals by optimizing loading speed, reducing bundle size, implementing lazy loading, and applying image optimization techniques."
        },
        {
            header: "Code Architecture",
            servicesExplanations: "Followed SOLID principles and clean code practices for scalable front-end systems. Maintained modular architecture and reusable component design."
        },
        {
            header: "Testing & CI",
            servicesExplanations: "Used Jest for unit testing and ensured quality with Git-based version control and CI pipelines. Familiar with team collaboration and agile workflows."
        },
        {
            header: "SEO & Accessibility",
            servicesExplanations: "Implemented on-page SEO enhancements using tools like Google Lighthouse and Yoast SEO for WordPress. Ensured keyboard and screen-reader accessibility."
        },
        {
            header: "Authentication Systems",
            servicesExplanations: "Built secure authentication systems using Keycloak, implemented SSO solutions, and managed token refresh, role-based access, and protected routes."
        },
        {
            header: "WordPress Development",
            servicesExplanations: "Created responsive websites with Elementor, optimized SEO with Yoast, and handled WordPress backend customization and content updates."
        }
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
                            <h1 className="text-[20px] lg:text-[40px] font-thin">
                                <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                            </h1>
                        </motion.div>

                        <motion.div className="title flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-8">
                            <h1 className="text-[20px] lg:text-[40px] font-thin">
                                <motion.b whileHover={{color:"orange"}}>For your</motion.b> Business.</h1>
                            <button className="w-[150px] h-[50px] lg:w-[300px] lg:h-[100px] rounded-full text-xl lg:text-2xl
                             bg-yellow-600 text-black cursor-pointer">What we do?</button>
                        </motion.div>

            </motion.div>

            <motion.div className="four-div mb-[46px] mx-[16px] grid grid-cols-4 gap-[8px] " variants={variants}>

                {
                    servicesDetails.map((service) => (
                        <motion.div className="p-[8px] border-none rounded lg:border-solid lg:border-2 lg:border-gray-500 flex flex-col  gap-[8px] lg:gap-[16px] lg:min-h-[180px]
                    "
                                    whileHover={{background:"lightgray",color:"black"}}>
                            <motion.h1 className="text-lg text-nowrap lg:text-[16px] text-center lg:text-left">{service.header}</motion.h1>
                            <motion.div className="flex gap-[8px] items-center ">
                            <motion.p className="hidden text-[13px] lg:block">{service.servicesExplanations} </motion.p>
                              </motion.div>

                        </motion.div>
                    ))
                }





            </motion.div>
        </motion.div>
    );
};

export default Services;