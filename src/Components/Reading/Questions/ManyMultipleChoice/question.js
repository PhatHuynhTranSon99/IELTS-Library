import React from "react";
import Background from "../../../Auxiliary/Question/Background";
import Answers from "./answers";

const Question = ({ id, content, answers, visible, onClick }) => {
    return (
        <React.Fragment>
            <Background content={content} onClick={onClick}/>
            {
                visible ? 
                <Answers question={id} 
                    answers={answers}/> :
                null
            }
        </React.Fragment>
    )
};

export default Question;