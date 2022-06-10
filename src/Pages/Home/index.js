import React from "react";
import Article from "../../Components/Auxiliary/Web/Article";
import Header from "../../Components/Auxiliary/Web/Header";
import Image from "../../Components/Auxiliary/Web/Image";
import IntroBlock from "../../Components/Auxiliary/Web/IntroBlock";
import Main from "../../Components/Auxiliary/Web/Main";
import { Panel, PanelItem } from "../../Components/Auxiliary/Web/Panel";
import Background1 from "../../Images/Background1.png";
import Background2 from "../../Images/Background2.png";
import Background3 from "../../Images/Background3.png";

const HomePage = () => (
    <div className="w-2/3 mx-auto">
        <Header />
        <Main>
            <Article>
                <Panel>
                    <PanelItem className="w-1/3">
                        <IntroBlock title="Đề thi IELTS"
                            text="Tổng hợp các đề thi IELST chính thức và mới nhất hiện nay"
                            buttonText="Xem ngay"
                            buttonLink="https://google.com"/>
                    </PanelItem>

                    <PanelItem className="w-2/3">
                        <Image src={Background1} alt="Background 1"/>
                    </PanelItem>
                </Panel>
            </Article>

            <Article>
                <Panel>
                    <PanelItem className="w-2/3">
                        <Image src={Background2} alt="Background 2"/>
                    </PanelItem>

                    <PanelItem className="w-1/3">
                        <IntroBlock title="Đề Speaking"
                            text="Các đề thi thật mới nhất tại Việt Nam cùng bài giải"
                            buttonText="Xem tất cả"
                            buttonLink="https://google.com"
                            alignLeft={false}/>
                    </PanelItem>
                </Panel>
            </Article>

            <Article>
                <Panel>
                    <PanelItem className="w-1/3">
                        <IntroBlock title="Đề Writing"
                            text="Các đề thi thật mới nhất cùng với chú thích chi tiết về từ vựng và ngữ pháp"
                            buttonText="Xem tất cả"
                            buttonLink="https://google.com"/>
                    </PanelItem>

                    <PanelItem className="w-2/3">
                        <Image src={Background3} alt="Background 3"/>
                    </PanelItem>
                </Panel>
            </Article>
        </Main>
    </div>
);

export default HomePage;