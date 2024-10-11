import Navbar from "./Components/Navbar";
import Typewiter from "./Components/Typewiter";
import ScrollSection from "./Components/ScrollSection";
import Icon from "./Components/Icon";

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

      <p className=" content w-[60%] pr-[20px] border-l-8 border-yellow-300 p-3">A motivated student pursuing a Computer Science degree at Boise State University with hands-on
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
       
      <div className=" flex flex-col items-center justify-evenly  w-[40%] h-[30vh] border border-black rounded-sm">
          <h3 className="text-[30px] underline">Front End </h3>

          <div className="flex flex-row flex-wrap items-center justify-around w-[75%]">
            <Icon src="/icons/html.png" title="HTML" />
            <Icon src="/icons/tailwind.png" title="Tailwind CSS" />
            <Icon src="/icons/react.png" title="React" />
          </div>
           
        </div>

        <div className=" flex flex-col items-center justify-evenly  w-[40%] h-[30vh] border border-black rounded-sm">
          <h3 className="text-[30px] underline">Back End </h3>

          <div className="flex flex-row flex-wrap items-center justify-around w-[75%]">
            <Icon src="/icons/express.png" title="Express" />
            <Icon src="/icons/sql.png" title="SQL" />
            <Icon src="/icons/node.png" title="Node.js" />
          </div>
           
        </div>
      </div>
    </div>
  </section>
  </>
  
);}
