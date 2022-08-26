import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F6E37D", "#FFE7E2"];
  return (
    <aside class="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Front-end
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>

      <div class="relative h-64 overflow-hidden rounded-3xl sm:h-80 lg:h-full lg:order-last">
        <img
          src={userData.avatarUrl}
          alt="avatar"
          className="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_7rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:rounded-tr-[30px] md:rounded-tr-[60px] sm:self-end border-r-8 border-l-8 border-t-8 border-gray-900"
        />
      </div>
    </aside>
  );
}
