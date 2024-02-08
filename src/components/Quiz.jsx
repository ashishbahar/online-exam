import React from "react";
import { QuizData } from "./Helper";
import { Link, NavLink } from "react-router-dom";

const Quiz = () => {
  return (
    <div>
      <div className="max-w-[1140px] mx-auto pt-[40px]">
        <h2 className=" text-3xl font-bold text-center">QUIZ TIME</h2>
        <p className="text-center text-2xl mb-[80px] text-black opacity-[.7] mt-2 max-w-[600px] mx-auto">
          Exercise your brain with these interesting quizzes and puzzles; win
          points, badges, prizes and impress your friends & colleagues!
        </p>
        <p className="font-medium text-3xl ">Latest Quizzes</p>
        <div className=" flex-wrap pt-10 mx-[-12px] flex-col lg:flex-row flex">
          {QuizData &&
            QuizData.map((obj, i) => {
              return (
                <div className="w-[25%] px-[12px]" key={i}>
                  <div className="border-solid border-[2px] rounded-lg border-[black] p-[12px]">
                    <img className=" rounded-lg" src={obj.Img} alt="img" />
                    <h5 className=" font-bold mt-4 text-xl">{obj.Heading}</h5>
                    <p className=" pt-1">{obj.Para}</p>

                    <NavLink to={obj.nextpage}>
                      <button className="w-full text-[#fff] bg-black hover:bg-white hover:text-[#000]  duration-200 font-semibold py-2 mt-5 border-[2px] rounded-lg border-solid border-black">
                        Play
                      </button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
