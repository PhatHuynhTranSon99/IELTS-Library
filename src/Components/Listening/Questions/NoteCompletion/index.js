import React from "react";
import TitleAndTask from "../../../Auxiliary/Question/TitleAndTask";
import Heading from "../../../Auxiliary/Text/Heading";
import Questions from "./questions";

const NoteCompletion = ({ name, task, heading, questions }) => (
    <React.Fragment>
        <TitleAndTask name={name} task={task}/>
        <Heading>{ heading }</Heading>
        <Questions questions={questions}/>
    </React.Fragment>
);

export default NoteCompletion;