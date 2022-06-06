import React from "react";
import Background from "../../../Auxiliary/Question/Background";
import Answers from "./answers";

const Question = ({ id, content, visible, onClick }) => {
    return (
        <React.Fragment>
            <Background content={content}
                onClick={onClick}/>
            {
                visible ? 
                <Answers answers={["True", "False", "Not given"]}
                    question={id}/> :
                null 
            }
        </React.Fragment>
    );
};

export default Question;