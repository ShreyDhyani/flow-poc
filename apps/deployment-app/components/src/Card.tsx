import React from "react";
import { twMerge } from "tailwind-merge";

export interface CardInterface {
  name: string;
  size?: string;
}

const Card: React.FC<CardInterface> = ({ name = "John Doe", size }) => {
  return (
    <div
      className={twMerge(
        "border w-fit max-w-60 rounded-md ",
        "px-5 py-3 ",
        "shadow-md hover:shadow-lg",
        "bg-red-300 hover:bg-red-400",
        size
      )}
    >
      {name}
    </div>
  );
};

export default Card;
