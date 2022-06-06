import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAnswer } from "../../../../Redux/Reading/action"
import { getUserAnswer } from "../../../../Redux/Reading/select";

const Answer = ({ question, id, content, checked, onCheck, onUncheck }) => {
    const onInputChecked = (event) => {
        if (event.target.checked) {
            onCheck(question, id);
        } else {
            onUncheck(question, id);
        }
    };

    return (
        <div className="my-3">
            <input type="checkbox" 
                    id={question + "-" + id} 
                    name={question} 
                    className="mr-2"
                    value={id}
                    defaultChecked={checked}
                    onChange={onInputChecked}/>
            <label htmlFor={question + "-" + id}>{content}</label>
        </div>
    );
};

const AnswerWrapper = ({ question, id, content }) => {
    //Dispatch answers answer
    const dispatch = useDispatch();

    //Get the answer from the store
    let chosenAnswer = useSelector(getUserAnswer(question[0])) || [];
    const checked = chosenAnswer.includes(id);

    //On check -> Add to answer array
    const onCheck = (questionId, id) => {
        const newAnswer = chosenAnswer.concat([id]);

        questionId.forEach(
            singleId => dispatch(updateAnswer(singleId, newAnswer))
        );
    };

    //On uncheck -> Filter from answer array
    const onUncheck = (questionId, id) => {
        const newAnswer = chosenAnswer.filter(item => item !== id);

        questionId.forEach(
            singleId => dispatch(updateAnswer(singleId, newAnswer))
        );
    };

    return (
        <Answer question={question}
            id={id}
            content={content}
            checked={checked}
            onCheck={onCheck}
            onUncheck={onUncheck}/>
    );
}

export default AnswerWrapper;