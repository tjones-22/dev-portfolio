"use client"
import { useRef, useEffect } from "react";
import Typed from "typed.js";
const Typewiter = () => {
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Developer', 'Thinker', "Problem Solver", "Learner"],
        typeSpeed: 100,
        backSpeed:100,
        loop:true
      
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  
   
    return ( 
        <div className="mt-[5vh] mb-[5vh] text-[40px]">
        <p> I am a <span ref={el} className="text-blue-800 font-bold"></span></p>
        
      </div>
     );
}
 
export default Typewiter;