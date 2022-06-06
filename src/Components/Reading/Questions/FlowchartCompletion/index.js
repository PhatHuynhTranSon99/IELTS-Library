import React from "react";
import TitleAndTask from "../../../Auxiliary/Question/TitleAndTask";
import SubHeading from "../../../Auxiliary/Text/SubHeading";
import TextCenter from "../../../Auxiliary/Text/Center";
import Image from "../../../Auxiliary/Question/Image";
import Questions from "./questions";

const FlowchartCompletion = ({ 
    name, 
    task, 
    title, 
    image, 
    questions 
}) => (
    <React.Fragment>
        <TitleAndTask name={name} 
            task={task}/>
        <SubHeading>
            <TextCenter>{ title }</TextCenter>
        </SubHeading>
        <Image src={image} alt={name}/>
        <Questions questions={questions}/>
    </React.Fragment>
);

export default FlowchartCompletion;