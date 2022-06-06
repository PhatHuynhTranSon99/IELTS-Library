import parse, { domToReact } from "html-react-parser";
import Heading from "../Text/Heading";
import List from "../List";
import SubHeading from "../Text/SubHeading";
import TextInput from "../Input/TextInput";

const Markdown = ({ content, onInputChange, inputValue }) => {
    const options = {
        replace: ({ name, attribs, children }) => {
            switch(name) {
                case "h1":
                    return <Heading {...attribs}>{domToReact(children, options)}</Heading>;
                case "h2":
                    return <SubHeading {...attribs}>{domToReact(children, options)}</SubHeading>;
                case "ul":
                    return <List {...attribs}>{domToReact(children, options)}</List>;
                case "input":
                    return <TextInput placeholder={attribs.id} onInputChange={onInputChange} inputValue={inputValue} {...attribs} />;
                default:
                    return null;
            }
        }
    };
    
    return parse(content, options);
};

export default Markdown;