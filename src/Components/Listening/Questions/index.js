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
import TableCompletion from "./TableCompletion";

const Question = ({ type, ...rest }) => (
    <Container>
    {
        (() => {
            switch(type) {
                case NOTE_COMPLETION:
                    return <NoteCompletion {...rest}/>;
                case TABLE_COMPLETION:
                    return <TableCompletion {...rest}/>;
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