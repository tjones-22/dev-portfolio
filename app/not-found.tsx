"use client"

import {motion} from 'framer-motion'
const NotFound = () => {
    return ( 
        <>
        <div className=" flex flex-row items-center justify-center bg-blue-950 w-screen text-yellow-400 h-[10vh] ">
            <h1> <strong>Error:</strong>Could not find resource</h1>
        </div>
        <motion.div
         className=" flex flex-row justify-center items-center w-screen mt-6" 
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{ ease: "easeInOut", duration: 0.75 }}
         >
        <a href="https://tristanjones.me/" className="text-[20px] text-center underline italic"> Main Page</a>

        </motion.div>
        
        </>
     );
}
 
export default NotFound;