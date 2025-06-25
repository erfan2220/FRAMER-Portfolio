import React from 'react';
import {motion} from "framer-motion";
import Sidebar from "./Sidebar.jsx";


function Navbar()
{
    return (
        <div className="navbar bg-[#0c0c1d]">
            <div className="flex flex-wrap m-auto items-center justify-between max-w-[1366px] h-full">
                <Sidebar/>
                {/*<motion.span className="bold p-[35px] invisible lg:text-white lg:text-2xl lg:visible">Style shop2020</motion.span>*/}
                <div className="flex flex-row gap-[12px] p-[10px] sm:p[20px] lg:p-[35px] flex-end">
                    <a href="https://www.linkedin.com/in/erfan-hashemi/" ><img  src='../assets/images/social-media/linkedin.svg' alt="instagram" className="w-8 h-8"/></a>
                    <a href="https://t.me/Seh_20"><img src='../assets/images/social-media/telegram.svg' alt="Telegram" className="w-8 h-8"/></a>
                    <a href="https://www.youtube.com/@erfanhashemi678"><img src='../assets/images/youtube.png' alt="Youtube" className="w-8 h-8"/></a>
                    <a href="https://github.com/erfan2220"><img src='../assets/images/social-media/github.svg' alt="Github" className="w-8 h-8"/></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;