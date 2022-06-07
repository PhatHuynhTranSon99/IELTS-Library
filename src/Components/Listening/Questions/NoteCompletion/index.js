import React from "react";
import TitleAndTask from "../../../Auxiliary/Question/TitleAndTask";
import Heading from "../../../Auxiliary/Text/Heading";
import TextCenter from "../../../Auxiliary/Text/Center";
import Questions from "./questions";

const NoteCompletion = ({ name, task, heading, questions }) => (
    <React.Fragment>
        <TitleAndTask name={name} task={task}/>
        <Heading><TextCenter>{ heading }</TextCenter> </Heading>
        <Questions questions={questions}/>
    </React.Fragment>
);

export default NoteCompletion;