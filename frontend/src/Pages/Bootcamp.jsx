import Navbar from "../Components/Nav";

export default function Bootcamp() {
  return (
    <>
      <Navbar />
      <div className="w-[70vw] mx-auto mt-[23vh] pb-5 min-h-screen relative">
        <h1 className="text-white font-normal text-[6vh] text-center">
          Learn Full-Stack Web Development from experienced Individuals
        </h1>
        <h2 className="mx-auto w-fit text-neutral-200 font-normal text-lg mt-4">
          A course designed to bring you from 0 to up to speed on the latest web
          development trends.
        </h2>
        <h1 className="text-white font-normal mt-2 w-fit mx-auto">
          No prior experience required, Next session starts on{" "}
          <span className="underline font-normal">September 1st</span>.
        </h1>
        <div className="w-fit mx-auto mt-10">
          <a
            href="#"
            className=" bg-blue-500 hover:scale-110 hover:bg-transparent ease-out duration-500 hover:text-blue-500 border-blue-500 border-2 hover:shadow-md hover:shadow-blue-500 transition-all text-white px-[1vw] py-[1vh] rounded-xl block font-normal text-2xl w-fit mt-20 mx-auto"
          >
            Get Course Overview
          </a>
          <div className="absolute bottom-36 left-[50%] w-fit h-fit">
            <div className="relative -left-[50%] w-[60vw] max-h-[30vh] bg-[#121212] rounded-xl px-[2vw] py-[3vh]">
              <h1 className="text-white font-normal text-2xl ">
                Want to learn more about our bootcamp?
              </h1>
              <div className="flex mt-4">
                <h2 className="text-neutral-300 font-normal text-md  w-[60%]">
                  Curious about transforming your career with our Full Stack Web
                  Development Bootcamp? Join an info session to explore our
                  comprehensive curriculum and get your questions answered by
                  our experienced instructors. Take the first step towards a
                  rewarding career in tech today!
                </h2>
                <a
                  href="#"
                  className="bg-blue-500 hover:scale-110 hover:bg-transparent ease-out duration-500 h-fit mx-auto hover:text-blue-500 border-blue-500 border-2 hover:shadow-md hover:shadow-blue-500 transition-all text-white px-[1vw] py-[1vh] rounded-xl block font-normal text-2xl w-fit "
                >
                  Schedule a Meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen mx-auto pb-5 bg-[#121212] min-h-[92vh]">
        <div className="w-[70vw] mx-auto">
          <h1 className="text-neutral-100 font-normal text-[6vh] text-center pt-20">
            What to Expect?
          </h1>
          <div className="flex justify-between mt-10">
            <div className="w-1/3 mx-4  ">
              <img
                className="rounded-lg object-cover h-[30vh] w-full"
                src={
                  "https://www.digitaltrends.com/wp-content/uploads/2022/04/zoom-active-speaker-meeting-scaled-1.jpg?fit=720%2C480&p=1"
                }
              ></img>
              <h2 className="text-neutral-100 font-normal text-2xl mt-7">
                Small Group Instructions
              </h2>
              <p className="text-neutral-400 font-normal w-fit mx-auto mt-2">
                Learn in small groups for a personalized experience.
              </p>
            </div>
            <div className="w-1/3 mx-4">
              <img
                className="rounded-lg object-cover h-[30vh] w-full"
                src={
                  "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg"
                }
              ></img>
              <h2 className="text-neutral-100 font-normal text-2xl mt-7">
                Learn Real-World CS & Tools
              </h2>
              <p className="text-neutral-400 font-normal w-fit mx-auto mt-2">
                Gain experience by building production-level apps and mastering
                the tools involved.
              </p>
            </div>
            <div className="w-1/3 mx-4">
              <img
                className="rounded-lg object-cover h-[30vh] w-full"
                src={
                  "https://images.collegexpress.com/article/Importance-of-Career-Prep-How-to-Plan-for-Your-Dream-Job.jpg"
                }
              ></img>
              <h2 className="text-neutral-100 font-normal text-2xl mt-7">
                Career Prep & Introduction
              </h2>
              <p className="text-neutral-400 font-normal w-fit mx-auto mt-2">
                Receive guidance to prepare for your career journey.
              </p>
            </div>
          </div>
          <h3 className="w-fit text-white font-normal mx-auto text-2xl mt-14">
            Want more information?
          </h3>
          <div className="flex w-fit mx-auto mt-2">
            <a
              href="#"
              className="bg-blue-500 hover:scale-110 hover:bg-transparent ease-out duration-500 hover:text-blue-500 border-blue-500 border-2 hover:shadow-md hover:shadow-blue-500 transition-all text-white px-[1vw] py-[1vh] rounded-xl block font-normal text-2xl w-fit mt-7 "
            >
              Get Course Overview
            </a>
            <h1 className="text-white my-auto mt-10 mx-4">OR</h1>
            <a
              href="#"
              className="bg-blue-500 hover:scale-110 hover:bg-transparent ease-out duration-500 hover:text-blue-500 border-blue-500 border-2 hover:shadow-md hover:shadow-blue-500 transition-all text-white px-[1vw] py-[1vh] rounded-xl block font-normal text-2xl w-fit mt-7"
            >
              Schedule a Meeting
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
