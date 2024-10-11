interface IconProps {
    src:string,
    title:string
}
const Icon = ({src,title}:IconProps) => {
    return (  
        <>
        <div className=" custom-timing flex flex-wrap flex-row lg:flex-col  w-[30vw] items-center justify-around h-[5vh]">

        <img src={src} alt={title} className="w-[5vw] h-[5vh "/>

        <p>{title}</p>
        </div>
            

            
        </>
    );
}
 
export default Icon;