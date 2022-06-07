import Container from "../../Auxiliary/Question/Container";
import {
    NOTE_COMPLETION,
    TABLE_COMPLETION,
    SINGLE_MULTIPLE_CHOICE,
    MULTIPLE_MULTIPLE_CHOICES,
    MATCH_ITEM,
    LABEL_MAP
} from "./types";
import NoteCompletion from "./NoteCompletion";

const Question = ({ type, ...rest }) => (
    <Container>
    {
        (() => {
            switch(type) {
                case NOTE_COMPLETION:
                    return <NoteCompletion {...rest}/>;
                case TABLE_COMPLETION:
                    return null;
                case SINGLE_MULTIPLE_CHOICE:
                    return null;
                case MULTIPLE_MULTIPLE_CHOICES:
                    return null;
                case MATCH_ITEM:
                    return null;
                case LABEL_MAP:
                    return null;
                default:
                    return null;
            }
        })()
    }
    </Container>
);

export default Question;