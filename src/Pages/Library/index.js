import Header from "../../Components/Auxiliary/Web/Header";
import Main from "../../Components/Auxiliary/Web/Main";
import { OneHalfPanel, Panel } from "../../Components/Auxiliary/Web/Panel";

const LibraryPage = () => (
    <div className="w-1/2 mx-auto">
        <Header />
        <Main>
            <Panel>
                <OneHalfPanel>

                </OneHalfPanel>

                <OneHalfPanel>
                    
                </OneHalfPanel>
            </Panel>
        </Main>
    </div>
);

export default LibraryPage;