import React from "react";
import Markdown from "../../Markdown";
import SubHeading from "../../Text/SubHeading";

const TitleAndTask = ({ name, task }) => (
    <div className="mb-3">
        <SubHeading>{name}</SubHeading>
        <Markdown content={task}/>
    </div>
);

export default TitleAndTask;