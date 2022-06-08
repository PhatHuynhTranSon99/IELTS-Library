import { 
    AnswerSection,
    PaginationSection,
    QuestionSection, 
    TimerSection, 
    WritingLayout
} from "../../Components/Writing/Layout";
import Container from "../../Components/Auxiliary/Container";
import Box from "../../Components/Auxiliary/Box";
import Timer from "../../Components/Timer";
import Task from "../../Components/Writing/Tasks";
import WritingPagination from "../../Components/Writing/Pagination";
import Answer from "../../Components/Writing/Answer";

const WritingTest = () => (
    <Container>
        <Box>
            <WritingLayout>
                <TimerSection>
                    <Timer />
                </TimerSection>

                <QuestionSection>
                    <Task />
                </QuestionSection>
                    
                <AnswerSection>
                    <Answer />
                </AnswerSection>

                <PaginationSection>
                    <WritingPagination />
                </PaginationSection>
            </WritingLayout>
        </Box>
    </Container>
);

export default WritingTest;