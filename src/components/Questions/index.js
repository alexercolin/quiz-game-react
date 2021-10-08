import React, { useState } from "react";

const Questions = (props) => {
  const { quizQuestions } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleCorrectAnswer = () => {
    setCurrentQuestion(currentQuestion + 1);
    setScore(score + 1);
  };

  const handleWrongAnswer = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  if (quizQuestions === undefined) {
    return <div>loading...</div>;
  }

  if (quizQuestions.length === currentQuestion) {
    return <div>Você acertou {score} questões</div>;
  }

  return (
    <div className="question-section">
      <div className="question-text">
        <li>{quizQuestions?.[currentQuestion]?.question}</li>
        {quizQuestions?.[currentQuestion]?.incorrect_answers.map(
          (answer, i) => (
            <li key={i}>
              <button onClick={handleWrongAnswer}>{answer}</button>
            </li>
          )
        )}
        <li>
          <button onClick={handleCorrectAnswer}>
            {quizQuestions?.[currentQuestion]?.correct_answer}
          </button>
        </li>
      </div>
    </div>
  );
};

export default Questions;
