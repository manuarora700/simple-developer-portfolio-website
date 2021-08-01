import React from "react";
import Link from "next/link";

export default function LatestCode() {
  return (
    <section className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center lg:text-left">
            Latest Code
          </h1>

          <a
            href="https://github.com/manuarora700"
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View GitHub</p>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20">
        {/* Single github Repo */}
        <div className="github-repo">
          <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
            Tailwind Starter Portfolio Project
          </h1>
          <p className="text-base font-normal my-4 text-gray-500">
            Starting out with tailwindcss, Tailwind Master Kit provides an
            amazing starter kit which I've integrated in a boilerplate code.
          </p>
          <a
            href="https://github.com"
            className="font-semibold group flex flex-row space-x-2 w-full items-center"
          >
            <p>View Repository </p>
            <div className="transform  group-hover:translate-x-2 transition duration-300">
              &rarr;
            </div>
          </a>
        </div>

        {/* Single github Repo */}
        <div className="github-repo">
          <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
            Javascript Mini Projects
          </h1>
          <p className="text-base font-normal my-4 text-gray-500">
            20 Javascript mini projects - taught by Wes Bos - is a collection of
            20 projects built with vanilla javascript.
          </p>
          <a
            href="https://github.com"
            className="font-semibold group flex flex-row space-x-2 w-full items-center"
          >
            <p>View Repository </p>
            <div className="transform  group-hover:translate-x-2 transition duration-300">
              &rarr;
            </div>
          </a>
        </div>

        {/* Single github Repo */}
        <div className="github-repo">
          <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
            Music Streaming Project
          </h1>
          <p className="text-base font-normal my-4 text-gray-500">
            A spotify clone with included functionalities like playlist
            creation, user account creation, pause, play, repeat and shuffle
            music.
          </p>
          <a
            href="https://github.com"
            className="font-semibold group flex flex-row space-x-2 w-full items-center"
          >
            <p>View Repository </p>
            <div className="transform  group-hover:translate-x-2 transition duration-300">
              &rarr;
            </div>
          </a>
        </div>
        {/* Single github Repo */}
        <div className="github-repo">
          <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
            Accept Payments With Razorpay
          </h1>
          <p className="text-base font-normal my-4 text-gray-500">
            Payment gateway integration using Razorpay with Next.js. Includes
            login and authentication with payments validation in test and
            production.
          </p>
          <a
            href="https://github.com"
            className="font-semibold group flex flex-row space-x-2 w-full items-center"
          >
            <p>View Repository </p>
            <div className="transform  group-hover:translate-x-2 transition duration-300">
              &rarr;
            </div>
          </a>
        </div>

        {/* Single github Repo */}
        <div className="github-repo">
          <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
            Covid Resources Portal
          </h1>
          <p className="text-base font-normal my-4 text-gray-500">
            A covid resources portal - to get information and availability on
            beds, oxygen and Remdesivir - built with Next.js and tailwindcss.
          </p>
          <a
            href="https://github.com"
            className="font-semibold group flex flex-row space-x-2 w-full items-center"
          >
            <p>View Repository </p>
            <div className="transform  group-hover:translate-x-2 transition duration-300">
              &rarr;
            </div>
          </a>
        </div>

        {/* Single github Repo */}
        <div className="github-repo">
          <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
            Expense Tracker Application
          </h1>
          <p className="text-base font-normal my-4 text-gray-500">
            A small javascript utility application that tracks your expenditure
            and savings on a daily basis. Get analytics delivered to your email.
          </p>
          <a
            href="https://github.com"
            className="font-semibold group flex flex-row space-x-2 w-full items-center"
          >
            <p>View Repository </p>
            <div className="transform  group-hover:translate-x-2 transition duration-300">
              &rarr;
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
