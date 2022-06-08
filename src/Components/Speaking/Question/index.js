import React from "react";
import Heading from "../../Auxiliary/Text/Heading";
import Markdown from "../../Auxiliary/Markdown";

const Question = ({ name, content }) => (
    <React.Fragment>
        <Heading>{ name }</Heading>
        <Markdown content={content}/>
    </React.Fragment>
);

export default Question;