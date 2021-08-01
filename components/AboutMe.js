import React from "react";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            I'm a software developer that loves building products and web
            applications that impact millions of lives. Currently working on{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href="https://tailwindmasterkit.com"
            >
              Tailwind Master Kit ✈️
            </a>
          </p>
        </div>
      </div>
      <div class="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p class="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <a
                  href="#"
                  class="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{" "}
                and I'll get back. I swear.
              </p>
            </div>
            <div class="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p class="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently, If you see me as a good fit,
                check my{" "}
                <a
                  href="#"
                  class="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div class="mt-4 ml-4">
              <div class="flex flex-row justify-start items-center ">
                <a
                  href="https://facebook.com"
                  class="flex flex-row items-center space-x-4 group"
                >
                  <div class="my-4">&rarr;</div>
                  <p class="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div class="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </p>
                </a>
              </div>
              <div class="flex flex-row justify-start items-center">
                <a
                  href="https://twitter.com"
                  class="flex flex-row items-center space-x-4 group"
                >
                  <div class="my-4">&rarr;</div>
                  <p class="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div class="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </p>
                </a>
              </div>
              <div class="flex flex-row justify-start items-center">
                <a
                  href="https://github.com"
                  class="flex flex-row items-center space-x-4 group"
                >
                  <div class="my-4">&rarr;</div>
                  <p class="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div class="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div class="flex flex-row justify-start items-center">
                <a
                  href="https://linkedin.com"
                  class="flex flex-row items-center space-x-4 group"
                >
                  <div class="my-4">&rarr;</div>
                  <p class="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div class="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
              <div class="flex flex-row justify-start items-center">
                <a
                  href="https://twitter.com"
                  class="flex flex-row items-center space-x-4 group"
                >
                  <div class="my-4">&rarr;</div>
                  <p class="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div class="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div class="col-span-1 md:col-span-2">
            <p class="text-xl text-gray-700 mb-4 dark:text-gray-300 ">
              I've been developing full-stack application since I was 10 years
              old. I didn't know what full-stack meant at that time because the
              term was not coined back then. I'm so out of content right now
              that I'm literally crying writing this text since lorem text is so
              2012 now.
            </p>
            <p class="text-xl text-gray-700 my-4 dark:text-gray-300">
              After learning HTML and struggling with CSS, I came up with a
              brilliant idea of using bootstrap so that I don't have to style
              everything by myself and - for obvious reasons - if you knew
              bootstrap, you were cool.
            </p>
            <p class="text-xl text-gray-700 my-4 dark:text-gray-300">
              But now, I'm a legend. I've been coding in React, Angular, Vue,
              Svelte, Node.js, Express, Fastify, MongoDB, MySQL, Bootstrap,
              Tailwind, C, C++, C#, Rust, Haskell, Perl, PHP, Assembly, Logo and
              YouDontKnowShit programming language etc to name a few. Although I
              barely know the syntax (Psst, Stack overflow!), I consider myself
              a Ninja developer I'm laughing right now.
            </p>
            <h1 class="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div class="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                class="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
                class="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                class="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                class="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                class="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                class="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
                class="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                class="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                class="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                class="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                class="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                class="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
