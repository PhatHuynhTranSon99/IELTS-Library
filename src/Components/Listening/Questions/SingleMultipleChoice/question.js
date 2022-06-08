import React from "react";
import Background from "../../../Auxiliary/Question/Background";
import Answers from "./answers";

const Question = ({ id, content, answers, onClick, visible }) => {
    return (
        <React.Fragment>
            <Background content={content}
                onClick={onClick}/>
            {
                visible ? 
                <Answers answers={answers}
                question={id}/> :
                null
            }
        </React.Fragment>
    )
};

export default Question;