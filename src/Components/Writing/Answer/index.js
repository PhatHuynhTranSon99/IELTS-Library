import { useDispatch, useSelector } from "react-redux";
import { updateAnswer } from "../../../Redux/Writing/action";
import { getFocusedSectionId, getUserAnswer } from "../../../Redux/Writing/select";
import TextArea from "../../Auxiliary/Input/TextArea";

const Answer = ({ section, onChange, currentAnswer }) => {
    return (
        <TextArea placeholder={`Enter your response for task ${section}`}
            defaultValue={currentAnswer}
            onChange={onChange}/>
    );
};

const AnswerWrapper = () => {
    //Get the id of the current section
    const id = useSelector(getFocusedSectionId);

    //Get the answer for the current section
    const answer = useSelector(getUserAnswer(id));

    //On input change -> Update answer
    const dispatch = useDispatch();
    const onChange = value => dispatch(updateAnswer(id, value));

    return (
        <Answer section={id}
            onChange={onChange}
            currentAnswer={answer}/>
    );
};

export default AnswerWrapper;