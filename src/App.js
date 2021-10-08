import InputQuestion from "./components/InputQuestion";
import Questions from "./components/Questions";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState();
  const quizQuestionsHandler = (quizQuestions) => {
    setQuestions(quizQuestions);
  };
  return (
    <div>
      <InputQuestion onShowQuestions={quizQuestionsHandler} />
      <Questions quizQuestions={questions} />
    </div>
  );
}

export default App;
