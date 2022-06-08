import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Markdown from "../../../Auxiliary/Markdown";
import { updateAnswer } from "../../../../Redux/Listening/action";
import { getUserAnswers } from "../../../../Redux/Listening/select";

const Questions = ({ questions, onChange, retrieveAnswer }) => (
    <React.Fragment>
        <Markdown content={questions}
            onInputChange={onChange}
            inputValue={retrieveAnswer}/>
    </React.Fragment>
);

const QuestionsWrapper = ({ questions }) => {
    //Dispatch update question answer
    const dispatch = useDispatch();
    const onChange = (question, answer) => dispatch(updateAnswer(question, answer));

    //Retrieve answers from store
    const answers = useSelector(getUserAnswers);
    const retrieveAnswer = question => answers[question];

    return (
        <Questions questions={questions}
            onChange={onChange}
            retrieveAnswer={retrieveAnswer}/>
    );
};

export default QuestionsWrapper;