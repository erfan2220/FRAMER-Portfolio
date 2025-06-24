import React, {useRef} from 'react';
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

import asset from "../assets/images/projects/assetImageProject.png"
import SingleSignOn from "../assets/images/projects/singleSignOn.png"

const Portfolio = () =>
    {

        const ref=useRef()


        const {scrollYProgress} = useScroll({target:ref,
        offset:["end end" ,"start start"],
        });

        const items=[
            {
                id:1,
                title:'Asset Management System',
                des:'Built a unified system for managing company assets,\n' +
                    'integrating OpenStreetMap for precise asset mapping.\n' +
                    'Implemented network topology mapping for detailed\n' +
                    'visualization.\n' +
                    'Improved decision-making through dynamic charts using\n' +
                    'Chart.js and Recharts.js',
                img:asset,
            },
            {
                id: 2,
                title: 'Single Sign-On (SSO) System',
                des: 'Created an SSO system for centralized user authentication\n' +
                    'using Keycloak.\n' +
                    'Ensured secure token validation and refresh mechanisms every\n' +
                    'hour.\n' +
                    'Developed a user panel displaying personalized applications\n' +
                    'based on user roles and permissions.',
                img: SingleSignOn ,
            },
            {
                id:3,
                title:'EvalueX',
                des:'Developed a system for updating KPI data and notifying users\n' +
                    'about upcoming deadlines.\n' +
                    'Designed a management dashboard for administrative\n' +
                    'oversight.\n' +
                    'Enabled file attachments and three types of comments\n' +
                    '(general, system-generated, and administrative notes) for\n' +
                    'enhanced collaboration.',
                img: SingleSignOn,
            },
            {
                id:4,
                title:'ConfigX Management System',
                des:'Designed a dynamic system with React Router and Lazy\n' +
                    'Loading for enhanced performance.\n' +
                    'Visualized traffic data with PieCharts and BarCharts.\n' +
                    'Integrated Iranian maps for site and traffic visualization.',
                img: SingleSignOn,
            }


        ];


        const Single =({item})=>
        {
                    const isMobile= window.innerWidth < 768 ? true:false;
                    const ref=useRef()
                    const {scrollYProgress} = useScroll({target:ref,}
                        );
                    const y = useTransform(scrollYProgress,[0 , 1] ,[-300, 300 ]);

                    return(
                        <section >
                            <div className="container flex  justify-center items-center w-full h-full overflow-hidden ">
                                <div className="wrapper flex  lg:max-w-[1366px] m-auto items-center flex-col lg:flex-row
                                 justify-center h-full gap-[25px] lg:gap-[50px]">
                                    <motion.div className="image-container flex items-center justify-center lg:flex-[1_1_0%]  lg:h-1/2 " ref={ref} >
                                        <img className="w-full h-full object-contain lg:object-cover" src={item.img} alt={item.title} />
                                    </motion.div>
                                    <motion.div  className="text-container flex lg:flex-[1_1_0%] items-center  flex-col gap-[50px] "  style={!isMobile && {y}} >
                                            <h2 className="text-3xl lg:text-6xl">{item.title}</h2>
                                            <p className="text-gray-200   text-center text-2xl">{item.des}</p>
                                            <button className="w-[200px] p-[10px] text-black self-center cursor-pointer bg-yellow-600 rounded-full">See Demo</button>
                                    </motion.div>
                                </div>
                          </div>
                        </section>
                        )
        }

        const scaleX = useSpring(scrollYProgress,
            {
             stiffness:100,
                damping:30,
            });

        return(
            <div className="portfolio relative bg-[#0c0c1d]"  ref={ref}>
                <div className="ProgressBar  text-center sticky text-yellow-600
                top-0 left-0 pt-[calc(100vh-100px)] lg:pt-[50px] overflow-hidden">
                    <h1 className="text-3xl lg:text-6xl">Feature works</h1>
                    <motion.div style={{scaleX:scaleX}} className="progressBar h-[10px] bg-white lg:mt-4"></motion.div>
                </div>
                <div className="text-white">
                    {
                     items.map((item)=>(
                         <Single item={item} key={item.id}></Single>
                     ))
                    }

                </div>
            </div>
        );
    };

export default Portfolio;