import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAnswer } from "../../../../Redux/Reading/action";
import { getUserAnswer } from "../../../../Redux/Reading/select";

const Answer = ({ question, 
    choice, 
    content, 
    onChange, 
    checked 
}) => {
    const onInputChange = (event) => {
        if (event.target.checked) {
            onChange(event.target.value);
        }
    };

    return (
        <div className="m-3">
            <input type="radio" 
                name={`${question}`}
                className="mr-2"
                value={choice}
                onChange={onInputChange}
                defaultChecked={checked}/>
                
            <label>{content}</label>
        </div>
    );
};

const AnswerWrapper = ({ question, choice, content }) => {
    //Dispatch the answer update question
    const dispatch = useDispatch();
    const onChange = answer => dispatch(updateAnswer(question, answer));

    //Get the checked state from redux
    const answer = useSelector(getUserAnswer(question));
    const checked = answer === choice;

    return (
        <Answer question={question}
            choice={choice}
            content={content}
            onChange={onChange}
            checked={checked}/>
    );
};

export default AnswerWrapper;