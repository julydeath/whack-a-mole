"use client";

import React, { useEffect, useState } from "react";

type BoardProps = {
  size: number;
};

const Board = ({ size }: BoardProps) => {
  const array = Array.from({ length: size }, (_, i) => i);

  const [human, setHuman] = useState(1);
  const [demon, setDemon] = useState(2);
  const [score, setScore] = useState(0);
  const [isStart, setIsStart] = useState(false);

  const handleClick = (value: number) => {
    if (value === human) {
      setScore((prev) => prev + 1);
    } else {
      setScore(0);
      setIsStart(false);
    }
  };

  console.log({ isStart, human, demon });

  useEffect(() => {
    let timer = null;
    if (isStart) {
      timer = setInterval(() => {
        const x = Math.floor(Math.random() * 9);
        const y = Math.floor(Math.random() * 9);
        setHuman(x);
        setDemon(y);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isStart]);

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="mx-auto p-8">Score : {score}</div>
        <button
          disabled={isStart}
          onClick={() => setIsStart(true)}
          className="bg-black border border-gray-400 text-gray-200  px-10 rounded-lg py-2"
        >
          start
        </button>
      </div>
      <div className="grid grid-cols-3 w-64 h-64 gap-2 mx-auto my-6">
        {array.map((value) => (
          <div
            onClick={() => handleClick(value)}
            className={`border border-gray-600 ${
              value === human && "bg-green-700"
            } ${value === demon && "bg-red-700"}`}
            key={value}
          >
            {value}
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
