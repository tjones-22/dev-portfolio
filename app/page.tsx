import Navbar from "./Components/Navbar";
import Typewiter from "./Components/Typewiter";
import ScrollSection from "./Components/ScrollSection";
import Icon from "./Components/Icon";

export default function Home() {
  return (
  <>
  <Navbar />

  <section className=" flex flex-col items-center justify-around w-screen  lg:h-[50vh] lg:w-[80] border-spacing-1 mt-[20vh]  mb-[10vh] text-[20px] border border-black rounded-md">

  <Typewiter />

    <div className="flex flex-col  lg:flex-row items-center justify-around w-[100%]  min-h-fit mb-[10vh] p-1 ">
    
      <img 
        src="images/Headshot.jpeg" 
        alt={"Tristan Jones headshot"}
        className="headshot-img lg:w-[20vh] lg:h-[20vh]"
      />

      <p className=" lg:text-[20px] lg:leading-relaxed content w-[90%] text-sm lg:w-[60%] pr-[20px] border-l-8 border-yellow-300 p-3">A motivated student pursuing a Computer Science degree at Boise State University with hands-on
                            experience building dynamic, responsive web applications.Strong problem-solving skills and a  
                            passion for learning new technologies, demonstrated through successful personal website projects.
                            Eager to contribute to innovative development teams and apply technical expertise in real-world
                            environments.
      </p>

    </div>
  </section>
  <h2 className=" text-center text-[40px] font-bold underline italic"> Projects</h2>
  <ScrollSection />
  
  <section className="w-screen h-fit pb-2">
    <div>
      <h2 className="text-center text-[50px] font-bold "> Technical Skills: </h2>

      <div className="flex flex-row items-center justify-evenly w-screen">
       
      <div className=" flex flex-col items-center justify-evenly  w-[40%] h-[60vh] border border-black rounded-sm">
          <h3 className="text-[30px] underline">Front End </h3>

          <div className="flex flex-row flex-wrap items-center justify-around w-[75%] h-[20vh] lg:h-[40vh]">
            <Icon src="/icons/html.png" title="HTML"  />
            <Icon src="/icons/tailwind.png" title="Tailwind CSS" />
            <Icon src="/icons/react.png" title="React" />
          </div>
           
        </div>

        <div className=" flex flex-col items-center justify-evenly  w-[40%] h-[60vh] border border-black rounded-sm">
          <h3 className="text-[30px] underline">Back End </h3>

          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-around w-[75%] h-[20vh] lg:h-[40vh]">
            <Icon src="/icons/express.png" title="Express" />
            <Icon src="/icons/sql.png" title="SQL" />
            <Icon src="/icons/node.png" title="Node.js" />
          </div>
           
        </div>
      </div>

    </div>
    
  </section>
  <div className="bg-blue-800 text-yellow-500 p-10">
    <h2 className="text-center text-md lg:text-[30px] font-bold"> Currently looking for:</h2>
    <ul className=" list-disc  text-[30px] flex flex-col lg:flex-row w-screen items-center justify-evenly mt-[10vh]">
      <li>Front End Internship</li>
      <li> Back End Internship</li>
      <li>Fullstack Internship </li>
    </ul>
  </div>
  </>
  
);}
