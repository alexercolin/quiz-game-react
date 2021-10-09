import { Typography } from "@material-ui/core";
import "./style.css";

const GameTitle = () => {
  return (
    <div className="quiz-title">
      <Typography variant="h4">Welcome to the quiz game!</Typography>
      <Typography variant="h5">
        Choose a number of questions and test your knowledge!
      </Typography>
    </div>
  );
};

export default GameTitle;
