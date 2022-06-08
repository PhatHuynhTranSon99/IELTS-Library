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

const WritingTest = () => (
    <Container>
        <Box>
            <WritingLayout>
                <TimerSection>
                    <Timer />
                </TimerSection>
                <QuestionSection>

                </QuestionSection>

                <AnswerSection>

                </AnswerSection>

                <PaginationSection>

                </PaginationSection>
            </WritingLayout>
        </Box>
    </Container>
);

export default WritingTest;