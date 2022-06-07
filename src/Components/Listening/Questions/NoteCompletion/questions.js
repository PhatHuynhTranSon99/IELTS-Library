import React from "react";
import { useDispatch } from "react-redux";
import Markdown from "../../../Auxiliary/Markdown";
import { updateAnswer } from "../../../../Redux/Listening/action";

const Questions = ({ questions, onChange }) => (
    <React.Fragment>
        <Markdown content={questions}
            onInputChange={onChange}/>
    </React.Fragment>
);

const QuestionsWrapper = ({ questions }) => {
    //Dispatch update question answer
    const dispatch = useDispatch();
    const onChange = (question, answer) => dispatch(updateAnswer(question, answer));

    return (
        <Questions questions={questions}
            onChange={onChange}/>
    );
};

export default QuestionsWrapper;