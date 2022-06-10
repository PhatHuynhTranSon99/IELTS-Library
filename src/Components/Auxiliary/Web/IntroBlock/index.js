import React from "react";
import ButtonLink from "../ButtonLink";
import Heading from "../Text/Heading";
import SubTitle from "../Text/SubTitle";

const IntroBlock = ({ title, text, buttonText, buttonLink, alignLeft = true }) => (
    <div className={alignLeft ? "text-left" : "text-right"}>
        <Heading>{ title }</Heading>
        <SubTitle>{ text }</SubTitle>
        <ButtonLink text={buttonText} href={buttonLink}/>
    </div>
);

export default IntroBlock;