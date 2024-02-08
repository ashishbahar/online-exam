import React, { useEffect, useState } from "react";
import { data } from "../Data/data.jsx";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(9).fill(null));
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("MS-Office");
  const [currentSet, setCurrentSet] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);
  const questionsPerPage = 10;

  // Update the question when index, selectedTopic, or currentSet changes
  useEffect(() => {
    const filteredQuestions = selectedTopic
      ? data.filter((q) => q.TOPIC === selectedTopic)
      : data;
    const startIndex = (currentSet - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    setQuestion(filteredQuestions.slice(startIndex, endIndex)[index]);
  }, [index, selectedTopic, currentSet]);

  // Reset selected answers when changing the topic or set
  useEffect(() => {
    setSelectedAnswers(Array(10).fill(null));
    setUserAnswers([]);
    setShowAnswer(false);
  }, [selectedTopic, currentSet]);

  // Topics
  const topics = Array.from(new Set(data.map((item) => item.TOPIC)));

  // Calculate the total number of sets for the selected topic
  const totalSets = selectedTopic
    ? Math.ceil(
        data.filter((q) => q.TOPIC === selectedTopic).length / questionsPerPage
      )
    : 1;

  // Display only the first 9 questions for the selected set and topic
  const visibleQuestions = selectedTopic
    ? data
        .filter((q) => q.TOPIC === selectedTopic)
        .slice(
          (currentSet - 1) * questionsPerPage,
          currentSet * questionsPerPage
        )
    : data.slice(
        (currentSet - 1) * questionsPerPage,
        currentSet * questionsPerPage
      );

  // Function to handle click on an option
  const handleOptionClick = (ans, questionIndex) => {
    if (!showAnswer) {
      setSelectedAnswers([
        ...selectedAnswers.slice(0, questionIndex),
        ans,
        ...selectedAnswers.slice(questionIndex + 1),
      ]);
      setUserAnswers((prevAnswers) => [...prevAnswers, ans]);
    }
  };

  // Function to show results
  const showResults = () => {
    setShowAnswer(true);
    const correctCount = calculateCorrectAnswers();
    alert(`You got ${correctCount} out of ${visibleQuestions.length} correct!`);
    // Reset selected answers after alert is closed
    setShowAnswer(false);
    setSelectedAnswers(Array(9).fill(null));
    setUserAnswers([]);
  };

  // Function to calculate the number of correct answers
  const calculateCorrectAnswers = () => {
    let correctCount = 0;
    visibleQuestions.forEach((val, key) => {
      if (val.Ans === selectedAnswers[key]) {
        correctCount++;
      }
    });
    return correctCount;
  };

  return (
    <>
      <div className="py-5 px-2 flex justify-between">
        <div className="container bg-white p-10 rounded-md">
          <h1 className="text-center text-4xl font-semibold">Quiz</h1>
          <hr className="h-[2px] bg-black border-none" />
          {visibleQuestions.map((val, key) => (
            <div
              key={key}
              className={`Quiz_list mt-3 border border-gray-300 p-4 rounded-md col-6`}
            >
              <>
                <h2 className="text-2xl text-start mt-3">
                  {key + 1}. {val.Questions}
                </h2>
                <ul className="mt-3">
                  <li
                    className="h-100 p-2"
                    onClick={() => handleOptionClick("A", key)}
                  >
                    <label>
                      <input
                        className="me-2"
                        type="radio"
                        name={`question-${key}`}
                        checked={selectedAnswers[key] === "A"}
                        readOnly
                      />
                      {val.A}
                    </label>
                  </li>
                  <li
                    className="h-100 p-2"
                    onClick={() => handleOptionClick("B", key)}
                  >
                    <label>
                      <input
                        className="me-2"
                        type="radio"
                        name={`question-${key}`}
                        checked={selectedAnswers[key] === "B"}
                        readOnly
                      />
                      {val.B}
                    </label>
                  </li>
                  <li
                    className="h-100 p-2"
                    onClick={() => handleOptionClick("C", key)}
                  >
                    <label>
                      <input
                        className="me-2"
                        type="radio"
                        name={`question-${key}`}
                        checked={selectedAnswers[key] === "C"}
                        readOnly
                      />
                      {val.C}
                    </label>
                  </li>
                  <li
                    className="h-100 p-2"
                    onClick={() => handleOptionClick("D", key)}
                  >
                    <label>
                      <input
                        className="me-2"
                        type="radio"
                        name={`question-${key}`}
                        checked={selectedAnswers[key] === "D"}
                        readOnly
                      />
                      {val.D}
                    </label>
                  </li>
                </ul>
              </>
            </div>
          ))}
          <div className="text-center mt-5">
            <button
              className="border border-solid border-black p-2 rounded-md"
              onClick={showResults}
            >
              Show Results
            </button>
          </div>
        </div>

        <div className="topics-div border-2 border-solid border-black p-10 rounded-md">
          {topics.map((topic, index) => (
            <button
              key={index}
              className={`ms-1 mt-1 border border-solid border-black p-2 rounded-md ${
                selectedTopic === topic ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                setSelectedTopic(topic);
                setCurrentSet(1);
                setIndex(0);
              }}
            >
              {topic}
            </button>
          ))}

          {totalSets > 1 && (
            <div className="mt-3">
              {Array.from({ length: totalSets }, (_, i) => i + 1).map(
                (setNum) => (
                  <button
                    key={setNum}
                    className={`mt-1 border border-solid border-black p-2 rounded-md mx-1 ${
                      currentSet === setNum ? "bg-gray-300" : ""
                    }`}
                    onClick={() => {
                      setCurrentSet(setNum);
                      setIndex(0);
                    }}
                  >
                    Set {setNum}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
