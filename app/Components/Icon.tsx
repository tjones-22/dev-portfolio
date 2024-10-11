interface IconProps {
    src:string,
    title:string
}
const Icon = ({src,title}:IconProps) => {
    return (  
        <>
        <div className=" custom-timing flex flex-col items-center justify-evenly h-[5vh] hover:border-b-2 hover:border-black">

        <img src={src} alt={title}/>

        <p>{title}</p>
        </div>
            

            
        </>
    );
}
 
export default Icon;