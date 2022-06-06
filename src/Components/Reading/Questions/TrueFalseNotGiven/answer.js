import { useDispatch, useSelector } from "react-redux";
import { updateAnswer } from "../../../../Redux/Reading/action";
import { getUserAnswer } from "../../../../Redux/Reading/select";

const Answer = ({ question, answer, onChange, checked }) => {
    const onInputChange = event => {
        if (event.target.checked) {
            onChange(event.target.value);
        }
    }

    return (
        <div className="m-3">
            <input type="radio" 
                name={`${question}`}
                className="mr-2"
                value={answer}
                onChange={onInputChange}
                defaultChecked={checked}/>
                
            <label>{answer}</label>
        </div>
    )
};

const AnswerWrapper = ({ question, id, answer }) => {
    //Dispatch the update answer action when answer changed
    const dispatch = useDispatch();
    const onChange = answer => dispatch(updateAnswer(question, answer));

    //Retrieve the current answer from the Redux store
    const userAnswer = useSelector(getUserAnswer(question));
    const checked = userAnswer === answer;

    return (
        <Answer question={question}
            id={id}
            answer={answer}
            onChange={onChange}
            checked={checked}/>
    );
};

export default AnswerWrapper;