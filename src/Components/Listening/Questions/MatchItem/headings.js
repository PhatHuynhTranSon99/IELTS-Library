import React from "react";
import SubHeading from "../../../Auxiliary/Text/SubHeading";
import Bold from "../../../Auxiliary/Text/Bold";

const Heading = ({ id, content }) => (
    <p className="my-3"><Bold>{id}</Bold> {content}</p>
);

const Headings = ({ title, headings }) => (
    <div className="flex justify-center">
        <div className="px-5 py-3 border border-2 border-slate-300">
            <SubHeading>{ title }</SubHeading>
            {
                headings.map(
                    heading => (
                        <Heading key={heading.id} 
                            {...heading}/>
                    )
                )
            }
        </div>
    </div>
);

export default Headings;