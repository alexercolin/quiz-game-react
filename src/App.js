import InputQuestion from "./components/InputQuestion";
import Questions from "./components/Questions";
import GameTitle from "./components/GameTitle";
import { useState } from "react";
import { Grid } from "@material-ui/core";

function App() {
  const [questions, setQuestions] = useState();
  const quizQuestionsHandler = (quizQuestions) => {
    setQuestions(quizQuestions);
  };
  return (
    <Grid container direction="column" alignItems="center">
      <GameTitle />
      <InputQuestion onShowQuestions={quizQuestionsHandler} />
      <Questions quizQuestions={questions} />
    </Grid>
  );
}

export default App;
