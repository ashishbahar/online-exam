import React, { useState, useEffect } from "react";
import { data } from "../Data/data";
import Modal from "react-modal";

const MondayQuiz = () => {
  const [visibleQuestions, setVisibleQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedAnswers, setSubmittedAnswers] = useState({});
  const [IsFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const randomQuestions = getRandomQuestions(data, 10);
    setVisibleQuestions(randomQuestions);
  }, []);

  useEffect(() => {
    console.log(submittedAnswers);
  }, [submittedAnswers]); // Log submittedAnswers whenever it changes

  const getRandomQuestions = (questions, count) => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handleOptionClick = (option, index) => {
    const updatedAnswers = { ...selectedAnswers, [index]: option };
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    const valid = validateAnswers();
    if (!valid) return;
    setIsOpen(true);
  };

  const validateAnswers = () => {
    const selectedAnswersCount = Object.keys(selectedAnswers).length;
    if (selectedAnswersCount !== 10) {
      alert("Please select answers for all 10 questions.");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleModalSubmit = () => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please provide your name and email.");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setSubmittedAnswers({
      ...formData,
      answers: selectedAnswers,
    });
    setIsFormSubmitted(true); // Set flag indicating form submission
  };
  const handleClose = () => {
    setIsOpen(false);
    setSelectedAnswers({}); // Reset selected answers state
    const randomQuestions = getRandomQuestions(data, 10); // Fetch new random questions
    setVisibleQuestions(randomQuestions); // Update visible questions
  };

  return (
    <section className="py-5">
      <div className="container w-100 mx-auto mt-4 p-8">
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
        <div className="text-center">
          <button onClick={handleSubmit} className="btn btn-primary mt-4 p-3">
            Submit Answers
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Submit Modal"
        style={{
          content: {
            width: "350px",
            height: "350px",
            margin: "auto", // Centers the modal horizontally
          },
        }}
      >
        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="bg-transparent border-none text-black text-2xl font-bold cursor-pointer"
          >
            &#10005;
          </button>
        </div>
        {!IsFormSubmitted && (
          <form>
            <h2 className="mb-4 text-center">Enter Your Information</h2>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-black rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email:</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-black rounded-md p-2 w-full"
              />
            </div>
            <button
              type="button"
              onClick={handleModalSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        )}

        {IsFormSubmitted && (
          <p className="text-green-500 text-center mb-4">
            Answers submitted successfully!
          </p>
        )}
      </Modal>
    </section>
  );
};

export default MondayQuiz;
