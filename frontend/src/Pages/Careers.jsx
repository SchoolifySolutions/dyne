import Navbar from "../Components/Nav";
import bg from "../assets/Images/nasa.jpg";
import mobile from "../assets/Images/nasa2.jpg";
import sponsor from "../assets/Images/bg.jpg";
export default function Careers(){
    return(
    <>
        <Navbar />
        <div className="w-[90vw] mx-auto mt-[22vh]">
            <h1 className="text-white font-normal text-[6vh] w-fit">Careers at Dyne </h1>
            <h3 className=" font-normal text-blue-300"> Open Positions</h3>
        </div>
    </>
    )
}