import React from "react";
import TitleAndTask from "../../../Auxiliary/Question/TitleAndTask";
import Headings from "./headings";
import Questions from "./questions";

const MatchHeading = ({ name, task, title, headings, questions }) => (
    <React.Fragment>
        <TitleAndTask name={name} 
            task={task}/>
        <Headings title={title} headings={headings}/>
        <Questions questions={questions}/>
    </React.Fragment>
);

export default MatchHeading;