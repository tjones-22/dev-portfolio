"use client"

import {motion} from 'framer-motion'

interface ProjectProps {
    imgSrc: string;
    githubLink: string;
    projectLink: string;
    description:string;
    title:string;
    
  }
  
  const Project = ({ imgSrc, githubLink, projectLink, description, title }: ProjectProps) => {
    return (
      <div className="project-card">
        <h2 className='text-[50px] mb-5'> {title}</h2>
        <img src={imgSrc} alt="Project screenshot" className="w-[50vw] h-[50vh]" />

        <p className='text-md content w-[50%] mt-5'>
           {description}
        </p>
  
        {/* Links */}
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className=" flex flex-row items-center justify-around w-[25%] mt-4">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="custom-timing  text-yellow-500 mr-5 mt-[10vh">
            <img  src="/icons/github.png" alt="Github" className=' custom-timing border-b-4 border-black hover:border-red-700' />
                  
          </a>
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="custom-timing text-yellow-500 border-b-4 border-y-red-700 hover:text-[40px]">
            Live Project
          </a>
        </motion.div>
      </div>
    );
  };
  
  export default Project;