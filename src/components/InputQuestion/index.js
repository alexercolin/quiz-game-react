import { useState } from "react";
import {
  TextField,
  Button,
  Modal,
  Typography,
  Box,
  FormControl,
} from "@material-ui/core";
import { api } from "../service/api";
import "./style.css";

const InputQuestion = (props) => {
  const [question, setQuestionsNumber] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleSubmit() {
    if (question > 1) {
      return api.get(`?amount=${question}`).then((response) => {
        props.onShowQuestions(response.data.results);
      });
    }
    window.alert("Favor insira um número maior que zero no campo de perguntas");
  }

  return (
    <FormControl>
      <div className="question-section">
        <div className="question-input">
        <TextField
          id="outlined-number"
          label="Número de perguntas"
          type="number"
          onChange={(event) => setQuestionsNumber(event.target.value)}
        />
        </div>
        <Button size="large" onClick={handleSubmit} variant="contained">
          Start Game!
        </Button>
        <Button size="small" onClick={handleOpenModal} variant="outlined">
          Cancel
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="warning-modal">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Hey friend!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              You need to chose a number to start the game =D
            </Typography>
          </Box>
        </Modal>
      </div>
    </FormControl>
  );
};

export default InputQuestion;
