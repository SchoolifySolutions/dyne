import Navbar from "../Components/Nav";
import "../Styles/Home.css";
import NASA from "../assets/Images/NASA.png";
import ASI from "../assets/Images/ASI.png";
import EESA from "../assets/Images/eesa.png";
import ITA from "../assets/Images/ITA.png";
import ITSM from "../assets/Images/ITSM.png";
import PAP from "../assets/Images/PAP.png";
import CDP from "../assets/Images/CDP.png";
import Footer from "../Components/Footer";
import Technology from "../assets/Images/Technology.png";
import {motion} from "framer-motion"
import Logo from "../assets/Images/Logo.png";


import Product1 from "../assets/Products/drone.jpg";
import Product2 from "../assets/Products/cyber.avif";
import Product3 from "../assets/Products/ai.jpg";
import bg from "../assets/Images/nasa.jpg";
import mobile from "../assets/Images/nasa2.jpg";
import sponsor from "../assets/Images/bg.jpg";
import Product from "../Components/Products";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      {/*this is the NavBar imported from Nav.jsx from Components*/}
      <Navbar />
      {/*this is the Landing Portion of the website*/}
      <div  className=" w-screen h-fit lg:mt-0 mt-32">
        <div className="w-screen h-fit relative">
          <div className="w-fit h-fit relative  ">
        <img src={bg} className="w-screen lg:!relative !z-0 h-fit max-lg:hidden" id="home"></img>
        <img src={mobile} className="w-screen relative !z-0 h-screen lg:hidden" id="home"></img>
        <div className="w-screen h-full bg-gradient-to-b from-transparent via-20% via-transparent  to-black absolute top-[2vh] left-0 z-10">

        </div>
        </div>
        <div className="mx-auto w-fit z-20 absolute top-[5%] left-[50%]  text-center py-[15%]">
          <div className="relative -left-[50%] ">
          <a className="lg:flex hidden w-fit px-[0.2vh] py-[0.4vh] mx-auto border bg-[#5271ff4e] border-[#5271ff] rounded-3xl transition-all  mb-[8vh] hover:scale-105" href="https://tally.so/r/mV8WpE">
            <h1 className="text-white tracking-normal transition-all mt-[0.6vh] ease-in font-normal  px-[1vw]">
            Introducing Our Bootcamp waitlist - <a href="/#projects" className="font-normal text-blue-400 mr-0 pr-0">Check it out here →</a>
            </h1>
          </a>
          <h1 className="lg:text-[5vw] w-[90vw] font-bold text-white text-[10vw] lg:mt-0 md:mt-[0vh] mt-[7vh] title">
            {" "}
            Venture Into STEM Excellence
          </h1>
          
          <h2 className="Home-Landing-Text mx-auto lg:text-[1.1vw] text-[4vw] text-gray-300 tracking-normal font-normal max-w-[90vw] lg:max-w-[50vw] lg:mt-0 mt-5">
          At Dyne Research, we're committed to igniting the passion for STEM through our comprehensive stem-research and bootcamp programs. Start your journey today!</h2>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-1 w-fit mx-auto mt-[8vh] text-white">
            <a
              href="/bootcamp/web-dev"
              className="py-[1.5vw] px-[3vw] lg:w-fit w-[70vw] mx-auto rounded-md font-thin text-center justify-center h-fit  border lg:py-[0.4vw] lg:px-[1vw] bg-[#5369ed] border-[#5369ed] hover:scale-110 transition-all ease-in-out tracking-wide"
            >
              Join the Waitlist
            </a>
            <br className = "lg:hidden relative"/>
            <a
              href="mailto:dyneresearch@gmail.com"
              className="lg:ml-5 py-[1.5vw] px-[3vw] rounded-md font-thin text-center ml-0 lg:w-fit w-[70vw] justify-center border border-white lg:py-[0.4vw] lg:px-[1vw]  hover:scale-110 transition-all ease-in-out  tracking-wide"
            >
              Get in touch 
            </a>
          </div>
          </div>
          </div>
        </div>
      </div>
      {/*Content section*/}
      <div className="w-screen bg-black" id="mission">
  <div className="h-[75vh] flex items-center">
    <div className="w-4/5 mx-auto flex lg:flex-row flex-col items-center text-center text-white">
      <div className="mx-auto lg:pr-20 pr-0 !ml-[2vw] lg:text-left text-center">
        <h3 className="text-blue-300 lg:mb-[7vh] mb-[1vh] text-left">MISSION</h3>
        <h1 className="lg:text-[2.6vw] text-[7vw] text-left Mission-Gradient !font-normal mb-[7vh] tracking-[0.05vw]">
          PIONEERING STEM RESEARCH
        </h1>
      </div>
      <div className="mx-auto lg:pl-20 pl-0 lg:w-1/2 w-full !mr-[2vw] lg:text-left text-center">
        <h2 className="lg:text-[0.9vw] text-[4vw] tracking-[0.15vw] lg:mt-[7vh] mt-0 font-normal Content-Font mb-[5vh] text-left">
        At our organization, we empower aspiring innovators globally through immersive training and collaborative projects in STEM fields. With expert mentorship and hands-on learning, we inspire groundbreaking skills and shape the future of technology and science.
        </h2>
      </div>
    </div>
    </div>

        <div className="h-[75vh] flex items-center lg:mt-[10vw] md:mt-[2vh] mt-[10vh]">
          <div className="w-4/5 h-[75vh]  mx-auto  items-center text-center px-[1vw] relative py-[13vh] flex lg:flex-row flex-col  text-white">
            <div className="lg:w-11/12 h-fit lg:h-[60vh] w-[85vw] Technology-Container text-left absolute rounded-3xl lg:right-0 top-0 flex">
              <div className="w-1/2 mr-[4.5vw] max-lg:hidden lg:relative"> </div>
              <div className="lg:w-[30.5vw] w-full lg:ml-0 ml-5">
                <h3 className="text-blue-300 mb-[4vh] tracking-[0.15vw] lg:mt-[7vw] mt-[30vh] lg:text-[1.1vw] text-[3vh] left-0">
                  TECHNOLOGY
                </h3>
                <h1 className="lg:text-[2.2vw] md:text-[5vw] text-[7vw] Mission-Gradient !font-normal tracking-[0.05vw]">
                  EMPOWERING THE FUTURE OF STEM
                </h1>
                <h2 className="lg:w-[30vw] w-[75vw] lg:text-[0.9vw] md:text-[3vw] text-[4vw] mt-[4vh] !font-normal text-left tracking-[0.1vw] Content-Font mb-[5vh]">
                We are launching a dynamic bootcamp program designed to empower high school students worldwide. This initiative will provide students with the tools and opportunities to collaborate on innovative STEM projects, harnessing their collective skills and creativity.
                </h2>
              </div>
            </div>
            <img
              src={Technology}
              className="absolute left-0 top-[2vw] lg:w-[46vw] lg:ml-0"
            />
          </div>
        </div>
        

        <div className="h-[75vh] flex items-center lg:mt-[30vh] mt-[50vh]"  id="projects">
          <div className="lg:w-4/5 w-screen mx-auto items-center text-center text-white">
            <div>
              <h3 className="text-blue-300 tracking-[0.15vw] mb-[1vh] uppercase">
                Bootcamps
              </h3>
              <h1 className="lg:text-[2.6vw] text-[4vw] Mission-Gradient !font-normal mb-[4vh] tracking-[0.05vw]">
                Innovative Bootcamps For Students
              </h1>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between mt-[10vh]">
              <Product
                heading={"Cybersecurity"}
                image={Product2}
                comingSoon={true}
                description="Join Dyne's Cybersecurity Bootcamp to master security protocols and threat mitigation strategies. Transform your skills and drive innovation by safeguarding systems and data from cyber threats."
                styleText={""}
                styleContainer={
                  "lg:w-[25vw] w-[70vw] mx-auto lg:mx-5 lg:h-[30vw] h-[40vh] !bg-cover !bg-left-top bg-blue-400"
                }
              />
               <Product
                heading={"Full-Stack Development"}
                image={Product1}
                comingSoon={false}
                link={"/bootcamp/web-dev"}
                description={
                  "Join Dyne's Full-Stack Development Bootcamp to master both front-end and back-end technologies. Transform your skills and drive innovation by building powerful, web applications scratch."
                }
                styleText={""}
                styleContainer={
                  "lg:w-[25vw] w-[70vw] mx-auto lg:mx-5 lg:h-[30vw] h-[40vh] !bg-cover !bg-[40%] bg-blue-400"
                }
              />
              <Product
                heading={"AI/ML "}
                image={Product3}
                comingSoon={true}
                description={
                  "Join Dyne's AI/ML Bootcamp to master machine learning and artificial intelligence techniques. Transform your skills and drive innovation by developing intelligent systems and data-driven solutions."
                }
                styleText={""}
                styleContainer={
                  "lg:w-[25vw] w-[70vw] mx-auto lg:mx-5 lg:h-[30vw] h-[40vh] !bg-cover !bg-center bg-blue-400 "
                }
              />
            </div>
          </div>
        </div>
        <div className="h-screen items-center lg:mt-[30vh] md:mt-[80vh] mt-[60vh]" id="sponsor">
          <div className="w-4/5 mx-auto h-3/4 flex lg:flex-row flex-col-reverse  items-center text-center text-white ">
            <div className="lg:w-1/2 w-[80vw] mx-auto  h-full mt-0 text-left">
              <h3 className="text-blue-300 tracking-[0.15vw] mb-[1vh] mt-[10vh] ">
                SPONSOR
              </h3>
              <h1 className="lg:text-[2.6vw] text-[6vw] Mission-Gradient lg:w-[80%]  w-[100%] !font-normal mb-[4vh] lg:leading-[6vh] leading-none tracking-[0.06vw]">
                Embark on our journey of connecting students to form a global network of STEM enthusiasts.
              </h1>
              <h2 className="lg:text-[0.9vw] text-[3vw] mt-[2vh] font-normal lg:w-[85%] w-[100%] text-left Content-Font tracking-[0.1vw]  mb-[4vh]">
              We’re harnessing the power of technology to revolutionize education by connecting students from around the globe. Our bootcamp empowers young minds to develop their skills, encouraging global collaboration and innovation. By bringing together students, educators, and industry professionals, we’re nurturing future leaders who will drive technological and societal advancements. Join us in shaping the future of education.<br/> Contact us below to become a sponsor today.</h2>
              <a
              href="mailto:dyneresearch@gmail.com "
              className="lg:ml-0 py-[1.5vw] px-[3vw] rounded-md  font-thin text-center ml-0 lg:w-fit w-[70vw] justify-center border border-white lg:py-[0.4vw] lg:px-[1vw]  hover:scale-110 transition-all ease-in-out  tracking-wide"
            >
              Get in touch 
            </a>
            </div>
            <img className="lg:w-1/2 w-[90vw] rounded-3xl" src={sponsor}>
            </img>
          </div>
        </div>
        </div>
      <Footer/>
    </div>
  );
}