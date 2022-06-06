import { useDispatch } from "react-redux";
import Markdown from "../../../Auxiliary/Markdown";
import { updateAnswer } from "../../../../Redux/Reading/action";

const Question = ({ content, onChange }) => {
    const onInputChange = (id, value) => onChange(value);

    return (
        <div className="m-3">
            <Markdown content={content} onInputChange={onInputChange}/>
        </div>
    );
};

const QuestionWrapper = ({ id, content }) => {
    //Dispatch update answer action
    const dispatch = useDispatch();

    const onChange = answer => dispatch(updateAnswer(id, answer));

    return (
        <Question content={content}
            onChange={onChange}/>
    );
};

export default QuestionWrapper;