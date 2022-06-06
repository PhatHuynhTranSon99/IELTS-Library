import React from "react";
import TitleAndTask from "../../../Auxiliary/Question/TitleAndTask"
import SubHeading from "../../../Auxiliary/Text/SubHeading";
import Questions from "./questions";

const NoteCompletion = ({ name, task, title, questions }) => (
    <React.Fragment>
        <TitleAndTask name={name} 
            task={task}/>
        <SubHeading>{title}</SubHeading>
        <Questions questions={questions}/>
    </React.Fragment>
);

export default NoteCompletion;