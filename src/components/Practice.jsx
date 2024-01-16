import React, { useState } from "react";
import { data } from "../Data/data.jsx";
import { useRef } from "react";
const Quiz = () => {
  let [index, setIndex] = useState(1);

  let [question, setQuestion] = useState(data[index]);
  let [lock,setlock]=useState(false)



  let Option1=useRef(null)
  let Option2=useRef(null)
  let Option3=useRef(null)
  let Option4=useRef(null)

  let option_array=[Option1,Option2,Option3,Option4]

  // Answar Cheaking
  const checkAns=(e,ans) => {
   if(lock===false)
    if(question.Ans===ans) {
      console.log(ans)
      e.target.classList.add("correct");
      setlock(true);
      
     } 
     else { 
      e.target.classList.add("wrong");
      setlock(true);
      // option_array[(question.Ans-1)].current.classList.add("correct")
  
    }
  };

  const next=()=>{

  }
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
              <li ref={Option1}
                onClick={(e) => {
                  checkAns(e,"A");
                }}
              >
                {question.A}
              </li>
              <li  ref={Option2}
                onClick={(e) => {
                  checkAns(e, "B");
                }}
              >
                {question.B}
              </li>
              <li  ref={Option3}
                onClick={(e) => {
                  checkAns(e, "C");
                }}
              >
                {question.C}
              </li>
              <li  ref={Option4}
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
