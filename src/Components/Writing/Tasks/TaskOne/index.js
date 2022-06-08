import React from "react";
import Heading from "../../../Auxiliary/Text/Heading";
import Markdown from "../../../Auxiliary/Markdown";
import Image from "../../../Auxiliary/Question/Image/full";

const TaskOne = ({ name, content, image }) => (
    <React.Fragment>
        <Heading>{ name }</Heading>
        <Markdown content={content}/>
        <Image src={image} alt={name}/>
    </React.Fragment>
);

export default TaskOne;