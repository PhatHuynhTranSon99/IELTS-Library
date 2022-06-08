import React from "react";
import SubHeading from "../../../Auxiliary/Text/SubHeading";
import Question from "./question";

const Questions = ({ title, questions }) => (
    <React.Fragment>
        <SubHeading>{ title }</SubHeading>
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