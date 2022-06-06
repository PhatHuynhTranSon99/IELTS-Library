import React from "react";
import Question from "./question";

const Questions = ({ questions }) => (
    <React.Fragment>
    {
        questions.map(
            question => (
                <Question key={question.id}
                    {...question}/>
            )
        )
    }
    </React.Fragment>
);

export default Questions;