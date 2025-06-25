import React from 'react';
import {motion} from "framer-motion";
import Sidebar from "./Sidebar.jsx";
import telegram from "../assets/images/social-media/telegram.svg";
import youtube from "../assets/images/youtube.png";
import linkedin from "../assets/images/social-media/linkedin.svg";
import github from "../assets/images/social-media/github.svg";

function Navbar()
{
    return (
        <div className="navbar bg-[#0c0c1d]">
            <div className="flex flex-wrap m-auto items-center justify-between max-w-[1366px] h-full">
                <Sidebar/>
                {/*<motion.span className="bold p-[35px] invisible lg:text-white lg:text-2xl lg:visible">Style shop2020</motion.span>*/}
                <div className="flex flex-row gap-[12px] p-[10px] sm:p[20px] lg:p-[35px] flex-end">
                    <a href="https://www.linkedin.com/in/erfan-hashemi/" ><img  src={linkedin} alt="instagram" className="w-8 h-8"/></a>
                    <a href="https://t.me/Seh_20"><img src={telegram} alt="Telegram" className="w-8 h-8"/></a>
                    <a href="https://www.youtube.com/@erfanhashemi678"><img src={youtube} alt="Youtube" className="w-8 h-8"/></a>
                    <a href="https://github.com/erfan2220"><img src={github} alt="Github" className="w-8 h-8"/></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;