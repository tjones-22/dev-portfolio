import Navbar from "./Components/Navbar";
import Typewiter from "./Components/Typewiter";
import ScrollSection from "./Components/ScrollSection";

export default function Home() {
  return (
  <>
  <Navbar />

  <section className=" flex flex-col items-center justify-around w-[80vw]  border-spacing-1 mt-[20vh] ml-[10vw] mb-[10vh] text-[20px] border border-black rounded-md">

  <Typewiter />

    <div className="flex flex-row items-center justify-around w-[100%]  min-h-fit mb-[10vh] ">
    
      <img 
        src="images/Headshot.jpeg" 
        alt={"Tristan Jones headshot"}
        width={200}
        height={200}
        className="headshot-img"
      />

      <p className="w-[60%] pr-[20px] border-l-8 border-yellow-300 p-3">A motivated student pursuing a Computer Science degree at Boise State University with hands-on
                            experience building dynamic, responsive web applications.Strong problem-solving skills and a  
                            passion for learning new technologies, demonstrated through successful personal website projects.
                            Eager to contribute to innovative development teams and apply technical expertise in real-world
                            environments.
      </p>

    </div>
  </section>

  <ScrollSection />
  
  <section className="bg-olive w-screen h-fit pb-2">
    <div>
      <h2> Technical Skills </h2>
    </div>
  </section>
  </>
  
);}
