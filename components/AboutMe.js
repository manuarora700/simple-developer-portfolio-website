import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      {/* <div className="bg-[#bbd1d6] -mt-0 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working on{" "}
            <a
              className="bg-[#EEEDDE] -500 rounded-md px-2 py-1 text-Black"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div> */}
      <div className="relative z-10 rounded-md shadow-md bg-[#bbd1d6] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-0 mt-0 dark:bg-gray-600">
        <div className="pt-0 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-600 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, {" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-600 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  email
                </a>{" "}
                me and I'll get back to you.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-600 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently, If you see me as a good fit,
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{" "}
                and I'd love to have a chat.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-600 mt-8 dark:text-gray-200">
              Find Me Here
            </h1>
            <div className="mt-4 ml-4">
              
                <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
             
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}
            <div className="flex flex-row justify-start items-center mb-5">
            <p className="bg-[#5f97ae]-500 text-3xl rounded-md  inline-block font-bold text-gray-600">
            Tech Skills
            </p>
            </div>
            
            {/* <div className="flex flex-row flex-wrap mt-8"> */}
            <div className="flex flex-row justify-start items-center">
                  <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">
                  JavaScript | React-Redux | HTML | CSS  
                  </p>
              </div>

              <div className="flex flex-row justify-start items-center">
              <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">Node.js | CI/CD | RESTful APIs | Agile | TDD</p>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
