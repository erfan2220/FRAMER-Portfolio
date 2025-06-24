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
                <div className="flex flex-row gap-[20px] p-[10px] sm:p[20px] lg:p-[35px] flex-end">
                    <a href="https://wa.me/+989962226846" ><img  src='/src/assets/images/Whatsapp.svg' alt="instagram" className="w-8 h-8"/></a>
                    <a href="https://t.me/Seh_20"><img src='/src/assets/images/Telegram.png' alt="Telegram" className="w-8 h-8"/></a>
                    <a href="#"><img src='/src/assets/images/youtube.png' alt="Youtube" className="w-8 h-8"/></a>
                    <a href="https://github.com/erfan2220"><img src='/src/assets/images/Github.png' alt="Github" className="w-8 h-8"/></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;