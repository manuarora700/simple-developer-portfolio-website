import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              desc={proj.desc}
              learnedPoints={proj.learnedPoints}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, desc, learnedPoints }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="font-semibold text-xl text-center">{title}</h1>
      <img
        src={imgUrl}
        alt="project picture"
        className="w-full my-4"
        style={{ height: 350 }}
      />
      <a href={link} target="_blank" className="text-gray-500">
        {link ? "Link" : <p>TBA</p>}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
      {learnedPoints ? (
        <>
          <p className="text-gray-600 dark:text-gray-400 my-4 font-bold">
            Skills I Learned:
          </p>
          <ul className="list-inside, list-disc">
            {learnedPoints.map((point) => {
              return (
                <li className="text-gray-600 dark:text-gray-400 my-2 list-inside list-disc">
                  {point}
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
    </div>
  );
};
