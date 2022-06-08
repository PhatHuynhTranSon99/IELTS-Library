import { useSelector } from "react-redux";
import { getFocusedSection } from "../../../Redux/Speaking/select";
import Question from "../Question";

const QuestionContainer = () => {
    //Get the current section from store
    const section = useSelector(getFocusedSection);

    return (
        <Question {...section}/>
    );
};

export default QuestionContainer;