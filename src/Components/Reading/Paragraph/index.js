import { useSelector } from "react-redux";
import { getParagraph } from "../../../Redux/Reading/select";
import Markdown from "../../Auxiliary/Markdown";

const Paragraph = ({ content }) => (
    <div className="m-3">
        <Markdown content={content}/>
    </div>
);

const ParagraphWrapper = () => {
    const content = useSelector(getParagraph);

    return (
        <Paragraph content={content}/>
    )
};

export default ParagraphWrapper;
