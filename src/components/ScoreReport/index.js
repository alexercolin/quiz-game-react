import { Typography, Button } from "@material-ui/core";
import "./style.css";

const ScoreReport = (props) => {
  localStorage.setItem('Score Points', `${props.scorePoints}`);
  return (
    <>
      <div className="report">
        <Typography variant="h4">
          You scored {props.scorePoints}{" "}
          {props.scorePoints === 1 ? "point" : "points"}
        </Typography>
        <Typography variant="h6">Answers List</Typography>
        <div>
          {props.questions.map((question) => (
            <>
              <Typography variant="h6">{question.question}</Typography>
              {question.incorrect_answers.map((i,incorrectAnswers) => (
                <ul className="questions-report">
                  <li key={i}>
                    <Button color="error" variant="contained">
                      {incorrectAnswers}
                    </Button>
                  </li>
                </ul>
              ))}
              <ul className="questions-report">
                <li key={props.questions.correct_answer}>
                  <Button color="success" variant="contained">
                    {question.correct_answer}
                  </Button>
                </li>
              </ul>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScoreReport;
