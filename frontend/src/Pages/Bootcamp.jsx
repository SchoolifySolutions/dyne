import React, { useState } from "react";
import Navbar from "../Components/Nav";
import bg from "../assets/Images/coding-background.jpg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const data = [
  {
    question: "Week 1: Introduction and Basics",
    answer: `
      Day 1: Introduction to Web Development
      Objective: Understand the fundamentals of web development.
      Activities:
        - Lecture: Overview of front-end vs. back-end development.
        - Demo: Introduction to HTML and CSS.
        - Setup: Guide participants through setting up their development environment.
      Assignments:
        - Install necessary tools (VS Code, Git, etc.).
        - Complete a basic tutorial on HTML and CSS.
      
      Day 2: HTML Deep Dive
      Objective: Master HTML basics.
      Activities:
        - Lecture: HTML elements, attributes, and structure.
        - Interactive Exercise: Build a basic webpage including headers, paragraphs, links, and images.
        - Q&A: Address any questions about HTML.
      Assignments:
        - Create a personal webpage using various HTML elements.
        - Submit the webpage to GitHub.
      
      Day 3: CSS Basics
      Objective: Learn fundamental CSS styling techniques.
      Activities:
        - Lecture: CSS syntax, selectors, box model, positioning, and layout techniques.
        - Interactive Exercise: Apply CSS styles to the HTML page created previously.
        - Q&A: Troubleshoot CSS issues and clarify concepts.
      Assignments:
        - Enhance the personal webpage with custom styles.
        - Experiment with layout techniques and submit updates.
    `
  },
  {
    question: "Week 2: Front-End Framework",
    answer: `
      Day 1: Introduction to React
      Objective: Understand the fundamentals of web development.
      Activities:
        - Lecture: Overview of front-end vs. back-end development.
        - Interactive Exercise: Create and manage simple React components.
        - Q&A: Address any initial challenges with React.
      Assignments:
        - Build a small React application with components and props.
        - Submit the React project to GitHub.
      
      Day 2: Advanced React Concepts
      Objective: Dive deeper into React features.
      Activities:
        - Lecture: React Hooks, context API.
        - Interactive Exercise: Use Hooks and context API to manage state in a React application.
        - Q&A: Troubleshoot issues with advanced React concepts.
      Assignments:
        - Extend the React application with Hooks and context API.
        - Submit updated code to GitHub.
      
      Day 3: State Management and Routing
      Objective: Implement state management and routing in React.
      Activities:
        - Lecture: Using React Router for navigation and introduction to state management libraries (e.g., Redux).
        - Interactive Exercise: Add routing and state management to the React application.
        - Q&A: Address questions about state management and routing.
      Assignments:
        - Implement React Router and a state management solution in the project.
        - Submit the updated React application.
    `
  },{
    question: "Week 3: Python 3 Basics for Django",
    answer: `
      Day 1: Introduction to Python 3
      Objective: Familiarize with the basics of Python 3 syntax and data types.
      Activities:
        - Lecture: Python 3 Basics:
            -> Introduction to Python and its features.
            -> Basic syntax, variables, and data types (int, float, str, bool).
            -> Input and output operations.
        - Interactive Exercise: Basic Python Script:
            -> Write a script to perform basic arithmetic operations.
            -> Create a simple program that takes user input and prints a message.

        - Q&A: Python Basics:
            -> Address questions related to Python syntax and data types.

      Assignments:
        - Task 1: Write a Python script to calculate the area of a circle given its radius.
        - Task 2: Create a script that takes a user's name as input and prints a personalized greeting.
      
      Day 2: Control Flow and Functions
      Objective: Understand control flow statements and functions in Python.
      Activities:
        - Lecture: Control Flow and Functions:
            -> Conditional statements (if, elif, else).
            -> Loops (for, while).
            -> Functions: definition, parameters, return values.
        - Interactive Exercise: Use Hooks and context API to manage state in a React application.
            -> Write a program using conditional statements to determine if a number is positive, negative, or zero.
            -> Create a function that calculates the factorial of a number.
        - Q&A: Control Flow and Functions:
            -> Troubleshoot common issues with control flow and functions.
            
      Assignments:
        - Task 1: Implement a function to check if a given string is a palindrome.
        - Task 2: Write a program that prints the Fibonacci series up to a specified number.
      
      Day 3: Data Structures and Modules
      Objective: Learn about basic data structures and modules in Python.
      Activities:
        - Lecture: Data Structures and Modules:
            -> Lists, tuples, sets, and dictionaries.
            -> Importing and using modules.
            -> Introduction to standard libraries useful for Django.
        - Interactive Exercise: Data Structures:        
            -> Create and manipulate lists, tuples, sets, and dictionaries.
            -> Write a program to read a list of numbers and sort them in ascending order.
        - Q&A: Data Structures and Modules:
            -> Address questions related to data structures and module usage.
        
      Assignments:
        - Task 1: Write a Python script to count the frequency of each word in a given text file.
        - Task 2: Create a module with utility functions and demonstrate its usage in a script.
    `
  }, {
    question: "Week 4: Back-End Development",
    answer: `
      Day 1: Introduction to Django
      Objective: Set up a Django project and understand its basic components.
      Activities:
        - Lecture: Setting Up Django:
            -> Installation of Django and project setup using django-admin.
            -> Overview of Django’s architecture, including models, views, and templates.
        - Interactive Exercise: Create a Simple Django Project:
            -> Set up a new Django project.
            -> Create a basic Django app within the project.
            -> Develop a simple view to display “Hello, World!” and a basic template.

        - Q&A: Django Setup Issues:
            -> Troubleshoot common issues with Django setup.
            -> Answer questions about the project structure and configuration.

      Assignments:
        - Task 1: Set up a basic Django project and create a simple app.
        - Task 2: Push the project to GitHub and include basic instructions for setup.

      Day 2: API Request Basics
      Objective: Build and handle APIs with Django.
      Activities:
        - Lecture: Introduction to RESTful APIs:
            -> Basics of RESTful APIs and their role in web development.
            -> Overview of Django-Rest-Framework for building APIs.
        - Interactive Exercise: Create a Simple API:
            -> Set up Django-Rest-Framework in the existing Django project.
            -> Develop a basic API endpoint to perform CRUD operations on a simple model.
            -> Test the API using tools like Postman.
        - Q&A: API Development Issues:
            -> Address any challenges with API creation and testing.
            -> Provide guidance on handling API requests and responses.
            
      Assignments:
        - Task 1: Develop a RESTful API endpoint in the Django project.
        - Task 2: Submit the updated project to GitHub, including API documentation.
      
      Day 3: Working with Databases
      Objective: Learn to manage databases in Django.
      Activities:
        - Lecture: Introduction to Django Models and Databases:
            -> Overview of Django models and their role in ORM (Object-Relational Mapping).
            -> Explanation of SQLite and database migrations.
        - Interactive Exercise: Create and Manage Database Models:    
            -> Define a Django model and set up database tables using migrations.
            -> Perform CRUD operations on the database via Django’s admin interface and Django shell.
        - Q&A: Database Integration Issues:
            -> Troubleshoot issues related to model creation, migrations, and database operations.
            -> Discuss best practices for database management in Django.

      Assignments:
        - Task 1: Add database models to the Django project and perform migrations.
        - Task 2: Submit an updated Django project to GitHub, demonstrating database functionality.
    `
  }
];

function AccordionItem({ question, answer, isOpen, onClick }) {
  const formattedAnswer = answer.split("\n").map((line, index) => (
    <p
      key={index}
      className={`${
        line.trim().startsWith("Day") ? "text-neutral-400" : "text-neutral-600"
      } font-normal leading-normal`}
    >
      {line}
    </p>
  ));

  return (
    <div className="border-b border-neutral-600">
      <button
        className={`w-full text-left p-4 mt-8 mb-6 pb-0 text-white font-normal flex justify-between items-center ${
          isOpen ? "border-b border-neutral-600 !pb-2" : ""
        }`}
        onClick={onClick}
      >
        <span className="font-normal">{question}</span>
        <span className="mt-1">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-[200vh]" : "max-h-0"
        }`}
      >
        <div className="py-4 px-1 text-neutral-400">
          <pre className="font-normal text-sm whitespace-pre-wrap">{formattedAnswer}</pre>
        </div>
      </div>
    </div>
  );
}

export default function Bootcamp() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="w-screen h-fit lg:mt-0 mt-32">
        <div className="w-screen h-fit relative">
          <div className="w-fit h-fit relative">
            <img
              src={bg}
              className="w-screen lg:!relative !z-0 h-fit max-lg:hidden"
              id="home"
            />
            <img
              src={bg}
              className="w-screen relative !z-0 h-screen lg:hidden"
              id="home"
            />
            <div className="w-screen h-full bg-gradient-to-b from-transparent via-10% via-black/75 to-black absolute top-[2vh] left-0 z-10"></div>
          </div>
          <div className="mx-auto w-fit z-20 absolute top-[5%] left-[50%] text-center py-[15%]">
            <div className="relative -left-[50%]">
              <div className="w-[70vw] mx-auto mt-[5vh] pb-5 min-h-screen relative">
                <h1 className="text-white font-normal text-[6vh] text-center">
                  Learn Full-Stack Web Development
                </h1>
                <h2 className="mx-auto w-fit text-neutral-200 font-normal text-lg mt-4">
                  A course designed for high school students to master web development and enter the professional world.
                </h2>
                <h1 className="text-white font-normal mt-2 w-fit mx-auto">
                  No prior experience required, next session starts on{" "}
                  <span className="underline font-normal">August 26th</span>.
                </h1>
                <div className="w-fit mx-auto mt-10">
                  <a
                    href="#"
                    className="bg-blue-500 hover:scale-110 hover:bg-transparent ease-out duration-500 hover:text-blue-500 border-blue-500 border-2 hover:shadow-md hover:shadow-blue-500 transition-all text-white px-[1vw] py-[1vh] rounded-xl block font-normal text-lg w-fit mt-20 mx-auto"
                  >
                    Get Course Overview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-screen relative">
        <div className="min-h-[30vh] relative">
          <div className="absolute top-0 left-[50%] w-fit h-fit z-10">
            <div className="relative -left-[50%] md:w-[60vw] w-[90vw] md:max-h-[30vh] max-h-screen bg-[#121212] rounded-xl px-[2vw] py-[3vh]">
              <h1 className="text-white font-normal text-2xl">
                Want to learn more about our bootcamp?
              </h1>
              <div className="flex md:flex-row flex-col mt-4">
                <h2 className="text-neutral-300 font-normal text-md md:w-[60%] w-full">
                  Curious about transforming your career with our Full Stack Web Development Bootcamp? Join an info session to explore our comprehensive curriculum and get your questions answered by our experienced instructors. <br />
                  Take the first step towards a rewarding career in tech today!
                </h2>
                <a
                  href="https://calendly.com/dyneresearch/30min"
                  className="bg-blue-500 hover:scale-110 hover:bg-transparent ease-out duration-500 h-fit mx-auto hover:text-blue-500 border-blue-500 border-2 hover:shadow-md hover:shadow-blue-500 transition-all text-white px-[1vw] py-[1vh] rounded-xl block font-normal text-lg my-auto w-fit mt- md:!mt-[0vh]"
                >
                  Schedule a Meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen mx-auto pb-5 bg-black min-h-screen relative" id="course-overview">
          <h1 className="text-neutral-100 font-normal text-[6vh] text-center pt-20 mb-10">
            Course Overview
          </h1>
          <div className="w-[50vw] mx-auto mt-4" >
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
          </div>
        </div>


      <div className="w-screen mx-auto pb-5 bg-[#121212] min-h-[92vh]">
        <div className="w-[70vw] mx-auto">
          <h1 className="text-neutral-100 font-normal text-[6vh] text-center pt-20">
            What to Expect?
          </h1>
          <div className="flex justify-between mt-10">
            <div className="w-1/3 mx-4">
              <img
                className="rounded-lg object-cover h-[30vh] w-full"
                src="https://www.digitaltrends.com/wp-content/uploads/2022/04/zoom-active-speaker-meeting-scaled-1.jpg?fit=720%2C480&p=1"
              />
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
                src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg"
              />
              <h2 className="text-neutral-100 font-normal text
                text-2xl mt-7">
                  Learn Real-World CS & Tools
                </h2>
                <p className="text-neutral-400 font-normal w-fit mx-auto mt-2">
                  Gain experience by building production-level apps and mastering the tools involved.
                </p>
            </div>
            <div className="w-1/3 mx-4">
              <img
                className="rounded-lg object-cover h-[30vh] w-full"
                src="https://images.collegexpress.com/article/Importance-of-Career-Prep-How-to-Plan-for-Your-Dream-Job.jpg"
              />
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
              className="bg-blue-500 hover:scale-110 hover:bg-transparent ease-out duration-500 hover:text-blue-500 border-blue-500 border-2 hover:shadow-md hover:shadow-blue-500 transition-all text-white px-[1vw] py-[1vh] rounded-xl block font-normal text-lg w-fit mt-7"
            >
              Get Course Overview
            </a>
            <h1 className="text-white my-auto mt-10 mx-4">OR</h1>
            <a
              href=""
              className="bg-blue-500 hover:scale-110 hover:bg-transparent ease-out duration-500 hover:text-blue-500 border-blue-500 border-2 hover:shadow-md hover:shadow-blue-500 transition-all text-white px-[1vw] py-[1vh] rounded-xl block font-normal text-lg w-fit mt-7"
            >
              Schedule a Meeting
            </a>
          </div>
        </div>
      </div>

      
    </>
  );
}
