import React from 'react';

import {motion} from "framer-motion";

const Variants=
    {
        open:{ transition : {staggerChildren: 0.3}},
        closed: {transition : {
            staggerChildren: 0.05,
            staggerDirection: -1
        }}
}
const itemVariants=
    {
        open:{ y:0,
        opacity:1},
        closed: {
            y:50,
            opacity: 0,
            }
    }


function Links()
{
    const items=["Home","Services","Portfolio","Contact"];
    return (
        <motion.div className="absolute w-full lg:w-full h-full flex flex-col items-center
        justify-center gap-4 z-50" variants={Variants}>
            {
                items.map((item)=>
                (
                    <motion.a className=" z-50 text-xl lg:text-3xl bold text-[#0c0c1d]" href={`#${item}`} key={item} variants={itemVariants}
                              whileHover={{scale:1.12}} whileTap={{scale:0.95}}>
                        {item}</motion.a>
                ))
            }
        </motion.div>
    );
}

export default Links;