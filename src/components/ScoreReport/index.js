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
        <Typography variant="h6">Gabarito</Typography>
        <div>
          {props.questions.map((question) => (
            <>
              <Typography variant="h6">{question.question}</Typography>
              {question.incorrect_answers.map((incorrectAnswers) => (
                <ul className="questions-report">
                  <li>
                    <Button color="error" variant="contained">
                      {incorrectAnswers}
                    </Button>
                  </li>
                </ul>
              ))}
              <ul className="questions-report">
                <li>
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
