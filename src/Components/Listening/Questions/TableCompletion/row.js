import { useDispatch, useSelector } from "react-redux";
import { updateAnswer } from "../../../../Redux/Listening/action";
import { getUserAnswers } from "../../../../Redux/Listening/select";
import Markdown from "../../../Auxiliary/Markdown";

const Row = ({ items, onChange, retrieveAnswer }) => (
    <tr>
    {
        items.map(
            item => (
                <td key={item}
                    className="border border-slate-300 p-3">
                    <Markdown content={item}
                        onInputChange={onChange}
                        inputValue={retrieveAnswer}/>
                </td>
            )
        )
    }
    </tr>
);

const RowWrapper = ({ items }) => {
    //Update answer question
    const dispatch = useDispatch();
    const onChange = (question, answer) => dispatch(updateAnswer(question, answer));

    //Get the question value
    const answers = useSelector(getUserAnswers);
    const retrieveAnswer = question => answers[question];

    return (
        <Row items={items}
            onChange={onChange}
            retrieveAnswer={retrieveAnswer}/>
    );
}

export default RowWrapper;