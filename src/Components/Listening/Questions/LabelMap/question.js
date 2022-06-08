import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../Auxiliary/Input/TextInput"
import { updateAnswer } from "../../../../Redux/Listening/action";
import { getUserAnswer } from "../../../../Redux/Listening/select";

const Question = ({ id, onChange, value }) => {
    const onInputChange = (id, value) => onChange(value);

    return (
        <div className="my-3">
            <TextInput id={id} 
                placeholder={id}
                onInputChange={onInputChange}
                defaultValue={value}/>
        </div>
    );
};

const QuestionWrapper = ({ id }) => {
    //Dispatch update answer action
    const dispatch = useDispatch();
    const onChange = answer => dispatch(updateAnswer(id, answer));

    //Retrieve current answer from the store
    const answer = useSelector(getUserAnswer(id));

    return (
        <Question id={id}
            onChange={onChange}
            value={answer}/>
    );
};

export default QuestionWrapper;