import { PaginationSection, QuestionSection, SpeakingLayout } from "../../Components/Speaking/Layout";
import Container from "../../Components/Auxiliary/Container";
import Box from "../../Components/Auxiliary/Box";
import SpeakingPagination from "../../Components/Speaking/Pagination";
import QuestionContainer from "../../Components/Speaking/QuestionContainer";

const SpeakingTest = () => (
    <Container>
        <Box>
            <SpeakingLayout>
                <QuestionSection>
                    <QuestionContainer />
                </QuestionSection>

                <PaginationSection>
                    <SpeakingPagination />
                </PaginationSection>
            </SpeakingLayout>
        </Box>
    </Container>
);

export default SpeakingTest;