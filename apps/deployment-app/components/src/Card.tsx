import React from "react";
import { twMerge } from "tailwind-merge";

export interface CardInterface {
  name: string;
  size?: string;
}

const Card: React.FC<CardInterface> = ({ name = "John Doe", size }) => {
  return (
    <div className="w-full flex justify-center">
      <div
        className={twMerge(
          "relative border w-fit max-w-60 rounded-md cursor-pointer group",
          "px-5 py-3 ",
          "shadow-md hover:shadow-lg",
          "bg-red-300",
          size
        )}
      >
        {name}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[8%] group-focus:opacity-[12%]"></div>
      </div>
    </div>
  );
};

export default Card;
