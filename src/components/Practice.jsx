import React, { useEffect, useState } from "react";
import { data } from "../Data/data.jsx";
const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setshowAnswer] = useState(question.Ans);
  const [lock, setLock] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  // Answer Checking
  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.Ans === ans) {
        setLock(true);
      } else {
        setLock(true);
      }
      setSelectedAnswer(ans);
      setUserAnswers((prevAnswers) => [...prevAnswers, ans]);
    }
  };
  console.log(userAnswers);
  // Use useEffect to update the question when index changes
  useEffect(() => {
    setSelectedAnswer(null);
    setLock(false);
    setQuestion(data[index]);
    setshowAnswer(false);
  }, [index]);

  function prevQues() {
    setIndex(index - 1);
    setSelectedAnswer(userAnswers);
    setLock(true);
  }
  function fnshowAns() {
    setshowAnswer(true);
    setSelectedAnswer(question.Ans);
  }

  return (
    <>
      <div className="py-5">
        <div className="container bg-white p-10 rounded-md">
          <h1 className="text-center text-4xl font-semibold">Quiz</h1>
          <hr className="h-[2px] bg-black border-none" />
          <div id="question-box" className={index === 50 ? "hidden" : "block"}>
            <h2 className="text-2xl text-start mt-3">
              {index + 1}. {question.Questions}
            </h2>
            <div className="Quiz_list mt-3">
              <ul>
                <li
                  onClick={(e) => checkAns(e, "A")}
                  className={
                    selectedAnswer === "A" || showAnswer === true
                      ? question.Ans === "A"
                        ? "correct"
                        : "wrong"
                      : ""
                  }
                >
                  {question.A}
                </li>
                <li
                  onClick={(e) => checkAns(e, "B")}
                  className={
                    selectedAnswer === "B" || showAnswer === true
                      ? question.Ans === "B"
                        ? "correct"
                        : "wrong"
                      : ""
                  }
                >
                  {question.B}
                </li>
                <li
                  onClick={(e) => checkAns(e, "C")}
                  className={
                    selectedAnswer === "C" || showAnswer === true
                      ? question.Ans === "C"
                        ? "correct"
                        : "wrong"
                      : ""
                  }
                >
                  {question.C}
                </li>
                <li
                  onClick={(e) => checkAns(e, "D")}
                  className={
                    selectedAnswer === "D" || showAnswer === true
                      ? question.Ans === "D"
                        ? "correct"
                        : "wrong"
                      : ""
                  }
                >
                  {question.D}
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <button disabled={index === 0} onClick={prevQues}>
                    Prev
                  </button>
                  <button
                    disabled={selectedAnswer === null}
                    onClick={() => setIndex(index + 1)}
                  >
                    Next
                  </button>
                </div>

                <button disabled={index === 0} onClick={() => setIndex(0)}>
                  Restart Quiz
                </button>
              </div>
              <div className="flex text-start mt-3">
                <button onClick={fnshowAns}>Show Answer</button>
              </div>
              <div className="m-auto text-md mt-3">
                {index + 1} of 50 Questions
              </div>
            </div>
          </div>
          <h2
            id="completion "
            className={
              index === 50
                ? "block text-center text-4xl font-semibold mt-8"
                : "hidden"
            }
          >
            You have completed set 1
          </h2>
          <button
            id="restart-quiz"
            className={index === 50 ? "block mx-auto mt-5" : "hidden"}
            onClick={() => setIndex(0)}
          >
            Restart Quiz
          </button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
