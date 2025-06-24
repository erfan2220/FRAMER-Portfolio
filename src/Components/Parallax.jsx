import React, {useRef} from 'react';
import mountainsImage from '../assets/images/mountains.png';
import planets from '../assets/images/planets.png';
import stars from '../assets/images/stars.png';
import sun from '../assets/images/sun.png';
import {motion, useTransform} from "framer-motion";
import {useScroll} from "framer-motion";


function Parallax({type})
{
    const ref = useRef()

    const containerClass = 'w-full h-full relative flex items-center justify-center overflow-hidden';
    const gradientClass = type === 'Services'
        ? 'bg-gradient-to-b from-[#0c0c1d] to-[#111132]'
        : 'bg-gradient-to-b from-[#111132] to-[#505064]';

    const {scrollYProgress} = useScroll(
        {
         target:ref,
            offset:["start start","end start"]
        }
    )
    const yBg=useTransform(scrollYProgress,[0,1],["0%","100%"])
    const ystarBg=useTransform(scrollYProgress,[0,0.5,1],["0%","100%","-100%"])
    const yText=useTransform(scrollYProgress,[0,1],["0%","500%"])



    return (
        <div ref={ref} className={`${gradientClass} ${containerClass}`}>
            <motion.h1 style={{y:yText}} className="text-4xl lg:text-8xl text-white">{ type ==="services"? "What we do?":"What we did?"}</motion.h1>
            <motion.div className="absolute bg-contain bg-no-repeat w-full h-full lg:bg-cover bg-bottom z-20"  style={{ backgroundImage: `url(${mountainsImage})` }}>
            </motion.div>
            <motion.div  className="absolute  w-full h-full bg-cover bg-bottom z-0"  style={{ backgroundImage: `url(${stars})` ,x:ystarBg}}>
            </motion.div>
            <motion.div className="absolute bg-contain bg-no-repeat w-full h-full bg-cover bg-bottom z-10"  style={{ backgroundImage: `url('${ type==='Services'? planets : sun}')`, y: yBg }}>
            </motion.div>
        </div>
    );
}

export default Parallax;