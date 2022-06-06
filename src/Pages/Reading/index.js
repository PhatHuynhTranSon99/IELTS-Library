import Box from "../../Components/Auxiliary/Box";
import Container from "../../Components/Auxiliary/Container";
import { 
    PaginationSection, 
    ParagraphSection, 
    QuestionSection, 
    ReadingLayout, 
    TimerSection 
} from "../../Components/Reading/Layout";
import Paragraph from "../../Components/Reading/Paragraph";
import QuestionsContainer from "../../Components/Reading/QuestionContainer";
import Timer from "../../Components/Timer";
import Pagination from "../Pagination";

const ReadingTest = () => {
    return (
        <Container>
            <Box>
                <ReadingLayout>
                    <TimerSection>
                        <Timer />
                    </TimerSection>

                    <ParagraphSection>
                        <Paragraph />
                    </ParagraphSection>

                    <QuestionSection>
                        <QuestionsContainer />
                    </QuestionSection>

                    <PaginationSection>
                        <Pagination />
                    </PaginationSection>
                </ReadingLayout>
            </Box>
        </Container>
    );
};

export default ReadingTest;