import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import ScoreReport from "../ScoreReport";
import "./style.css";

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

  const playAgain = () => {
    window.location.reload(false);
  };

  if (quizQuestions === undefined) {
    return "";
  }

  if (quizQuestions.length === currentQuestion) {
    return (
      <>
        <Button variant="contained" color="success" onClick={playAgain}>
          Play again
        </Button>
        <ScoreReport scorePoints={score} questions={quizQuestions} />
      </>
    );
  }

  return (
    <div className="question-section">
      <div className="question-text">
        <Typography variant="h6">
          {quizQuestions?.[currentQuestion]?.question}
        </Typography>
        {quizQuestions?.[currentQuestion]?.incorrect_answers.map(
          (answer, i) => (
            <ul className="questions">
              <li key={i}>
                <Button
                  size="small"
                  variant="contained"
                  onClick={handleWrongAnswer}
                >
                  {answer}
                </Button>
              </li>
            </ul>
          )
        )}
        <ul className="questions">
          <li key={quizQuestions[currentQuestion].incorrect_answers}>
            <Button
              size="small"
              variant="contained"
              onClick={handleCorrectAnswer}
            >
              {quizQuestions?.[currentQuestion]?.correct_answer}
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Questions;
