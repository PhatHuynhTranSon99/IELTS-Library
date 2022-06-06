import React from "react";
import TitleAndTask from "../../../Auxiliary/Question/TitleAndTask";
import Questions from "./questions";

const SummaryCompletion = ({ name, task, questions }) => (
    <React.Fragment>
        <TitleAndTask name={name} 
            task={task}/>
        <Questions questions={questions}/>
    </React.Fragment>
);

export default SummaryCompletion;