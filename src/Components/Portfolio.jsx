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

        const items = [
            {
                id: 1,
                title: 'Asset Management System',
                des: 'Developed a unified system for asset tracking at MCI using React and OpenStreetMap. Integrated network topology views and real-time charts with Chart.js and Recharts.',
                img: asset,
                link: 'https://github.com/erfan2220/Asset-Management/wiki'
            },
            {
                id: 2,
                title: 'Single Sign-On (SSO) System',
                des: 'Created an authentication system with Keycloak for secure login and role-based app access. Enabled token validation, user panel, and app launcher interface.',
                img: SingleSignOn,
                link: 'https://github.com/erfan2220/SSO-single-sign-on-/wiki'
            },
            {
                id: 3,
                title: 'EvalueX (KPI Tracker)',
                des: 'Built a KPI tracking tool to monitor performance deadlines and notify users. Integrated file uploads and comment threads (admin, general, system). Dashboards for oversight.',
                img: SingleSignOn,
                link: 'https://github.com/erfan2220/Evaluex/wiki'
            },
            {
                id: 4,
                title: 'ConfigX Management System',
                des: 'Designed dynamic UI using React Router and Lazy Loading. Visualized traffic and infrastructure data with charts and custom Iran map integration.',
                img: SingleSignOn,
                link: 'https://github.com/erfan2220/react-admin'
            },
            {
                id: 5,
                title: 'Personal Portfolio',
                des: 'Animated portfolio using React, Framer Motion, and Tailwind. Features parallax effects, scroll-based transitions, and responsive layout.',
                img: asset,
                link: 'https://github.com/erfan2220/Portfolio'
            },
            {
                id: 6,
                title: 'Child Philosophy Organization Website',
                des: 'Built NGO website using WordPress, Elementor, and Yoast SEO for improved ranking. Focused on content presentation and page speed.',
                img: SingleSignOn,
                link: 'http://p4ciran.com/'
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
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="w-[200px] p-[10px] text-black self-center cursor-pointer bg-yellow-600 rounded-full">
                                                {item.link.includes('github.com') ? 'View on GitHub' : 'View Live'}
                                            </button>
                                        </a>
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