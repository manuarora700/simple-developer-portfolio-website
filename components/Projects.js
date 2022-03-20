import React from "react";
import userData from "@constants/data";

export default function Projects() {
  const meta = {
    webpage:""
  }
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="relative z-10 rounded-md shadow-md bg-[#bbd1d6] p-4 md:p-10 lg:p-10 max-w-6xl mx-auto mb-0 mt-0 dark:bg-gray-600 ">
        <div className="text-container max-w-6xl mx-auto pt-10">
          <p
            className="leading-loose text-xl mb-4 md:text-4xl text-gray-600 font-semibold  mx-4 "
            style={{ lineHeight: "1rem" }}
          >
            {userData.about.title}
            </p>
            <br></br>
            <p className="leading-loose text-2xl :text-4xl text-gray-600 font-semibold  mx-4 "
            style={{ lineHeight: "2rem" }}>
              {userData.about.summary}
            </p>
            {/* <p>
            Currently working on{" "}
            <a
              className="bg-[#EEEDDE] -500 rounded-md px-2 py-1 text-Black"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p> */}
        </div>
      
     
      {/* Grid starts here */}
      <div className="bg-[#bbd1d6] dark:bg-gray-900">
        <div classname="relative z-10 rounded-md shadow-md bg-[#bbd1d6] bg-[#bbd1d6] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 mt-0" >
        {/* <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40"> */}
        <button
              className="bg-[#5f97ae] -00 rounded-md w-30px mx-2 mt-2 py-2 px-2 text-gray-600 text-s font-semibold"
             >
             <a href= "https://kiwikickz.herokuapp.com/">View Webpage</a>  
        </button>
         <button
              className="bg-[#5f97ae] -00 rounded-md w-30px mx-2 mt-2 py-2 px-2 text-gray-600 text-s font-semibold"
             >
             <a href= "https://github.com/meiyangdev/kiwikickz">View Code</a>  
          </button>
          <div></div>

          {userData.projects.map((proj, idx) => (
            <ProjectCard
              key = {proj.title}
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
         
        </div>
      </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
