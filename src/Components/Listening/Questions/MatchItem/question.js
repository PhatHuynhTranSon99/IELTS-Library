import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../Auxiliary/Input/TextInput";
import { updateAnswer } from "../../../../Redux/Listening/action";
import { getUserAnswer } from "../../../../Redux/Listening/select";

const Question = ({ id, content, value, onChange }) => {
    const onInputChange = (id, value) => onChange(value);

    return (
        <p className="my-3">
            {content} 
            <TextInput placeholder={id}
                id={id}
                onInputChange={onInputChange}
                defaultValue={value}/>
        </p>
    );
};

const QuestionWrapper = ({ id, content }) => {
    //Dispatch update answer question on change
    const dispatch = useDispatch();
    const onChange = answer => dispatch(updateAnswer(id, answer));

    //Retrieve the default value from Redux store
    const userAnswer = useSelector(getUserAnswer(id));

    return (
        <Question 
            id={id} 
            content={content}
            onChange={onChange}
            value={userAnswer}/>
    );
};

export default QuestionWrapper;