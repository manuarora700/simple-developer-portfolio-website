import React from "react";
import userData from "@constants/data";

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center md:items-center mt-8">
          <div>
            {/* Support me by keeping this in the footer, please. :) */}
            <p>
              Adapted from a template by
              <a className="" href="https://manuarora.in">
                {" "}
                Manu Arora
              </a>{" "}
              🙏🏻
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
