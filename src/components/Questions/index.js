import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import './style.css'

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
    return ''
  }

  if (quizQuestions.length === currentQuestion) {
    return (
      <>
        <Typography variant="subtitle1">Você acertou {score} questões</Typography>
        <div>
          {quizQuestions.map((question) => (
            <>
              <li>{question.question}</li>
              {question.incorrect_answers.map((incorrectAnswers) => (
                <li>{incorrectAnswers}</li>
              ))}
              <li>{question.correct_answer}</li>
            </>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="question-section">
      <div className="question-text">
        <Typography variant="h6">{quizQuestions?.[currentQuestion]?.question}</Typography>
        {quizQuestions?.[currentQuestion]?.incorrect_answers.map(
          (answer, i) => (
            <li key={i}>
              <Button size="small" variant="contained" onClick={handleWrongAnswer}>
                {answer}
              </Button>
            </li>
          )
        )}
        <li>
          <Button size="small" variant="contained" onClick={handleCorrectAnswer}>
            {quizQuestions?.[currentQuestion]?.correct_answer}
          </Button>
        </li>
      </div>
    </div>
  );
};

export default Questions;
