import Header from "../../Components/Auxiliary/Web/Header";
import Image from "../../Components/Auxiliary/Web/Image";
import Main from "../../Components/Auxiliary/Web/Main";
import { OneThirdPanel, Panel, TwoThirdPanel } from "../../Components/Auxiliary/Web/Panel";
import Heading from "../../Components/Auxiliary/Web/Text/Heading";
import SubTitle from "../../Components/Auxiliary/Web/Text/SubTitle";
import Background4 from "../../Images/Background4.png";

const LibraryPage = () => (
    <div className="w-2/3 mx-auto">
        <Header />
        <Main>
            <Panel>
                <OneThirdPanel>
                    <Heading>Ngân hàng đề thi IELTS</Heading>
                    <SubTitle>Các đề thi IELTS từ các nguồn uy tín như Cambridge và GEL IELTS - đối tác chính thức của British Council</SubTitle>
                </OneThirdPanel>

                <TwoThirdPanel>
                    <Image src={Background4} alt="Background"/>
                </TwoThirdPanel>
            </Panel>
        </Main>
    </div>
);

export default LibraryPage;