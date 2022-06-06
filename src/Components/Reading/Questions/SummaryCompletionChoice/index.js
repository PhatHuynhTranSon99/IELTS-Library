import React from "react";
import SummaryCompletion from "../SummaryCompletion";
import Choices from "./choices";

const SummaryCompletionChoice = ({ 
    name, 
    task, 
    questions, 
    choices 
}) => (
    <React.Fragment>
        <SummaryCompletion name={name}
            task={task}
            questions={questions}/>
        <Choices choices={choices}/>
    </React.Fragment>
);

export default SummaryCompletionChoice;