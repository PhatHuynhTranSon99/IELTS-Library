import { useDispatch, useSelector } from "react-redux";
import { updateAnswer } from "../../../../Redux/Reading/action";
import { getUserAnswers } from "../../../../Redux/Reading/select";
import Markdown from "../../../Auxiliary/Markdown";

const Questions = ({ questions, onChange, retrieveAnswer }) => {
    const onInputChange = (id, value) => onChange(id, value);

    return (
        <Markdown content={questions}
            onInputChange={onInputChange}
            inputValue={retrieveAnswer}/>
    );
};

const QuestionsWrapper = ({ questions }) => {
    //Dispatch answer update action
    const dispatch = useDispatch();
    const onChange = (question, answer) => dispatch(updateAnswer(question, answer));

    //Get the answer from store
    const allAnswers = useSelector(getUserAnswers);
    const retrieveAnswer = question => allAnswers[question];

    return (
        <Questions questions={questions}
            onChange={onChange}
            retrieveAnswer={retrieveAnswer}/>
    );
};

export default QuestionsWrapper;