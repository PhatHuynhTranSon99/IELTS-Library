import Container from "../../Auxiliary/Question/Container";
import FlowchartCompletion from "./FlowchartCompletion";
import ManyMultipleChoice from "./ManyMultipleChoice";
import MatchHeading from "./MatchHeading";
import MatchStatements from "./MatchStatement";
import NoteCompletion from "./NoteCompletion";
import SingleMultipleChoice from "./SingleMultipleChoice";
import SummaryCompletion from "./SummaryCompletion";
import SummaryCompletionChoice from "./SummaryCompletionChoice";
import TrueFalseNotGiven from "./TrueFalseNotGiven";
import {
    SINGLE_MULTIPLE_CHOICE,
    TRUE_FALSE_NOT_GIVEN,
    MATCH_HEADINGS,
    MULTIPLE_MULTIPLE_CHOICES,
    NOTE_COMPLETION,
    SUMMARY_COMPLETION,
    FLOWCHART_COMPLETION,
    SENTENCE_COMPLETION,
    MATCH_PARAGRAPH,
    SUMMARY_COMPLETION_CHOICE,
    MATCH_STATEMENT
} from "./types";

const Question = ({ type, ...rest }) => (
    <Container>
    {
        (() => {switch(type) {
            case SINGLE_MULTIPLE_CHOICE:
                return <SingleMultipleChoice {...rest}/>;
            case TRUE_FALSE_NOT_GIVEN:
                return <TrueFalseNotGiven {...rest}/>;
            case MATCH_HEADINGS:
                return <MatchHeading {...rest}/>;
            case MULTIPLE_MULTIPLE_CHOICES:
                return <ManyMultipleChoice {...rest}/>;
            case NOTE_COMPLETION:
                return <NoteCompletion {...rest}/>;
            case SUMMARY_COMPLETION:
                return <SummaryCompletion {...rest}/>;
            case FLOWCHART_COMPLETION:
                return <FlowchartCompletion {...rest}/>;
            case SENTENCE_COMPLETION:
                return <NoteCompletion {...rest}/>;
            case MATCH_PARAGRAPH:
                return <NoteCompletion {...rest}/>;
            case SUMMARY_COMPLETION_CHOICE:
                return <SummaryCompletionChoice {...rest}/>;
            case MATCH_STATEMENT:
                return <MatchStatements {...rest}/>;
            default:
                return null;
        }})()
    }
    </Container>
);

export default Question;