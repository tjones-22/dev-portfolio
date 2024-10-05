"use client"

import {motion} from 'framer-motion';

const Navbar = () => {
    return ( 
    <>
     <div className="flex flex-col items-center justify-around w-screen text-[20px] text-yellow-500 bg-blue-950">
      <h1 className="text-[50px] ">Tristan Jones </h1>
        <motion.div className="flex flex-row items-center justify-around w-screen font-semibold text-[16px]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          <p> Phone: (208)-392-7019</p>
          <p> Email: tristantherocker@gmail.com</p>
          <a href="www.linkedin.com/in/tristan-jones-a9490a24b" target="_blank" className=" custom-timing hover:text-[17px] hover:font-extrabold hover:text-red-700">linkedin.com/in/tristan-jones</a>
        </motion.div>
    </div>
    </> );
}

export default Navbar;