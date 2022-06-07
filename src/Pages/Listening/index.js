import Box from "../../Components/Auxiliary/Box";
import Container from "../../Components/Auxiliary/Container";
import { 
    ListeningLayout, 
    PaginationSection, 
    PlayerSection, 
    TestSection, 
    TimerSection 
} from "../../Components/Listening/Layout";
import ListeningPagination from "../../Components/Listening/Pagination";
import Timer from "../../Components/Timer";

const ListeningTest = () => (
    <Container>
        <Box>
            <ListeningLayout>
                <TimerSection>
                    <Timer />
                </TimerSection>

                <PlayerSection>
                </PlayerSection>

                <TestSection>
                </TestSection>

                <PaginationSection>
                    <ListeningPagination />
                </PaginationSection>
            </ListeningLayout>
        </Box>
    </Container>
);

export default ListeningTest;