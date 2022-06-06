import React from "react";
import SubHeading from "../../../Auxiliary/Text/SubHeading";
import Bold from "../../../Auxiliary/Text/Bold";

const Heading = ({ id, content }) => (
    <p className="my-3"><Bold>{id}</Bold> {content}</p>
);

const Headings = ({ title, headings }) => (
    <React.Fragment>
        <SubHeading>{ title }</SubHeading>
        {
            headings.map(
                heading => (
                    <Heading key={heading.id} 
                        {...heading}/>
                )
            )
        }
    </React.Fragment>
);

export default Headings;