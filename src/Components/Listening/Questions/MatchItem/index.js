import React from "react";
import TitleAndTask from "../../../Auxiliary/Question/TitleAndTask";
import SubHeading from "../../../Auxiliary/Text/SubHeading";
import Headings from "./headings";
import Questions from "./questions";

const MatchItem = ({ 
    name, 
    task,
    heading, 
    questions,
    questionTitle, 
    items, 
    itemTitle 
}) => (
    <React.Fragment>
        <TitleAndTask name={name} 
            task={task}/>
        <SubHeading>{ heading }</SubHeading>
        <Headings title={itemTitle} headings={items}/>
        <Questions title={questionTitle} questions={questions}/>
    </React.Fragment>
);

export default MatchItem;