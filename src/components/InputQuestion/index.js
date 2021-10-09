import { useState } from "react";
import { TextField, Button, FormControl } from "@material-ui/core";
import { api } from "../service/api";
import "./style.css";

const InputQuestion = (props) => {
  const [question, setQuestionsNumber] = useState("");

  function handleSubmit() {
    if (question > 1) {
      return api.get(`?amount=${question}`).then((response) => {
        props.onShowQuestions(response.data.results);
      });
    }
    window.alert(
      "Please enter a number greater than zero in the question field"
    );
  }

  return (
    <FormControl>
      <div className="question-section">
        <div className="question-input">
          <TextField
            id="outlined-number"
            label="Number of questions"
            type="number"
            onChange={(event) => setQuestionsNumber(event.target.value)}
          />
        </div>
        <Button size="large" onClick={handleSubmit} variant="contained">
          Start Game!
        </Button>
      </div>
    </FormControl>
  );
};

export default InputQuestion;
