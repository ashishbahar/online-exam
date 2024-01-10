import React, { useState } from "react";
import { data } from "../Data/data.jsx";
const Quiz = () => {
  let [index, setIndex] = useState(1);

  let [question, setQuestion] = useState(data[index]);
  let [lock,setlock]=useState(false)

  // Answar Cheaking
  const checkAns=(e,ans) => {
   if(lock==false)
    if(question.Ans == ans) {
      e.target.classList.add("correct");
      setlock(true);
     } 
     else { 
      e.target.classList.add("wrong");
      setlock(true);
  
    }
  };

  return (
    <>
      <div className="">
        <div className="container bg-white p-10 rounded-md">
          <h1 className="text-start text-4xl font-semibold">Quiz</h1>
          <hr className="h-[2px] bg-black border-none" />
          <h2 className="text-2xl text-start ">
            {index + 1}. {question.Questions}
          </h2>
          <div className="Quiz_list">
            <ul>
              <li
                onClick={(e) => {
                  checkAns(e,"A");
                }}
              >
                {question.A}
              </li>
              <li
                onClick={(e) => {
                  checkAns(e, "B");
                }}
              >
                {question.B}
              </li>
              <li
                onClick={(e) => {
                  checkAns(e, "C");
                }}
              >
                {question.C}
              </li>
              <li
                onClick={(e) => {
                  checkAns(e, "D");
                }}
              >
                {question.D}
              </li>
            </ul>
          </div>

          <button className="">Next</button>

          <div className="m-auto text-md">1 of 5 Questions</div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
