import React from "react";
import Markdown from "../../../Auxiliary/Markdown";
import Heading from "../../../Auxiliary/Text/Heading";

const TaskTwo = ({ name, content }) => (
    <React.Fragment>
        <Heading>{ name }</Heading>
        <Markdown content={content}/>
    </React.Fragment>
);

export default TaskTwo;