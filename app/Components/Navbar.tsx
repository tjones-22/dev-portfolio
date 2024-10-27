"use client"

import {motion} from 'framer-motion';

const Navbar = () => {
    return ( 
    <>
     <div className="flex flex-col items-center justify-around w-full h-[20vh] text-sm text-yellow-500 bg-blue-950 overflow-hidden  ">
      <h1 className="text-[50px] ">Tristan Jones </h1>
        <motion.div className="flex flex-row items-center justify-around w-screen font-semibold sm:text-[10px] xs:text-[10px] lg:text-[16px]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          <div className='flex flex-col text-[8px] lg:text-[20px]'>
          <p> Phone: </p>
          <p>(208)-392-7019</p>
          </div>

          <div className='flex flex-col text-[8px] lg:text-[20px]'>
          <p> Email: </p>
          <p>tristantherocker@gmail.com</p>
          </div>

          <div className='flex flex-col text-[8px] lg:text-[20px]'>
          <p> LinkedIn: </p>
          <a href="https://www.linkedin.com/in/tristan-jones-a9490a24b/" target="_blank" className=" custom-timing   text-[8px]lg:text-[20px]  lg:hover:text-[22px] lg:hover:font-extrabold lg:hover:text-red-700 underline">linkedin.com/in/tristan-jones</a>

          </div>

        </motion.div>
    </div>
    </> );
}

export default Navbar;