"use client"

import Project from "./Project";
import { useRef } from "react";

const description = [
    ` I am in a band called The Latest Victim and I made our webpage to add to my project portfilio. I usedthe Next.JS framework
            with tailwind as my framework. Deployed to Hostinger using the npm build command. I learned how to use models, create 
            video tags so people can't download videos, and how to make an audio player on a webpage. `,
    `The Jones Family Chore Site is a simple and efficient tool that automatically rotates daily and weekly chores within the family. 
    Built using React for the frontend and Express on the backend, it ensures that chores are fairly distributed and updated regularly. 
    Without the need for user accounts, the system keeps things straightforward, helping the Jones family manage their household tasks effortlessly.`

    
]
const ScrollSection = () => {
const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -window.innerWidth : window.innerWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section>
    <div className="relative w-screen h-screen">
      {/* Scrollable Section */}
      <div className="scroll-section" ref={scrollRef}>
        <Project
          imgSrc="images/TLV_Website_SC.png"
          githubLink="https://github.com/tjones-22/thelatestvictimwebsite"
          projectLink="https://thelatestvictimofficial.com/"
          description={description[0]}
          title="The Latest Victim Website"
        />

        <Project
          imgSrc="images/JonesChore_SC.png"
          githubLink="https://joneschores.org/"
          projectLink="https://joneschores.org/"
          description={description[1]}
          title="Jones Family Chore Site"
        />
        
      </div>

      {/* Left Scroll Arrow */}
      <button className="scroll-arrow left" onClick={() => scroll("left")}>
        &#9664;
      </button>

      {/* Right Scroll Arrow */}
      <button className="scroll-arrow right" onClick={() => scroll("right")}>
        &#9654;
      </button>
    </div>
    </section>
  );
};

export default ScrollSection;