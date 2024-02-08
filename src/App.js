import logo from "./logo.svg";
import "./App.css";
// import Quiz from "./components/Quiz";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Practice from "./components/Practice";
import Quiz from "./components/Quiz";
import { Route, Routes } from "react-router";
import MondayQuiz from "./components/MondayQuiz";

function App() {
  return (
    <>
      <NavBar />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Practice" element={<Practice />} />
      </Routes> */}
      <MondayQuiz />
    </>
  );
}

export default App;
