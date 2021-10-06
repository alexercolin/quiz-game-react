import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { api } from "../service/api";

const InputQuestion = () => {
  const [question, setQuestionsNumber] = useState("");

  function handleSubmit() {
    api.get(`?amount=${question}`).then((response) => {
      console.log(response.data.results);
    });
  }
  return (
    <div>
      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event) => setQuestionsNumber(event.target.value)}
      />
      <Button onClick={handleSubmit} variant="contained">
        Confirmar
      </Button>
    </div>
  );
};

export default InputQuestion;
