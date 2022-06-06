import React from "react";
import Answer from "./answer";

const Answers = ({ question, answers }) => (
    <React.Fragment>
    {
        answers.map(
            answer => (
                <Answer key={answer.id} 
                    question={question}
                    {...answer}/>
            )
        )
    }
    </React.Fragment>
);

export default Answers;