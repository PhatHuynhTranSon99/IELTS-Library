import Header from "../../Components/Auxiliary/Web/Header";
import Image from "../../Components/Auxiliary/Web/Image";
import Main from "../../Components/Auxiliary/Web/Main";
import Footer from "../../Components/Auxiliary/Web/Footer";
import { 
    OneFourthPanel, 
    OneThirdPanel, 
    Panel, 
    ThreeFourthPanel, 
    TwoThirdPanel 
} from "../../Components/Auxiliary/Web/Panel";
import SideNav from "../../Components/Auxiliary/Web/SideNav";
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

            <Panel>
                <OneFourthPanel>
                    <SideNav />
                </OneFourthPanel>

                <ThreeFourthPanel>

                </ThreeFourthPanel>
            </Panel>
        </Main>
        <Footer />
    </div>
);

export default LibraryPage;