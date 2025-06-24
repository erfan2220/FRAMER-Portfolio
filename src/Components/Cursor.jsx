import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";



const Cursor = () =>
{
    const [position, setPosition] = useState({x:0,y:0});

    useEffect(()=>{
        const mouseMove = (e) => {
            setPosition({x:e.clientX ,y:e.clientY});
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }

    },[])


    return (
        <motion.div
        className="w-[50px] h-[50px] rounded-[50%] border-[1px] border-solid border-white fixed z-[999] sm:none"
        animate={{ x: position.x+10 , y: position.y+10 }}
        >
        </motion.div>
    );
};

export default Cursor;