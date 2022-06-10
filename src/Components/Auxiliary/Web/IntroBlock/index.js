import React from "react";
import ButtonLink from "../ButtonLink";
import Heading from "../Text/Heading";

const IntroBlock = ({ title, text, buttonText, buttonLink, alignLeft = true }) => (
    <div className={alignLeft ? "text-left" : "text-right"}>
        <Heading>{ title }</Heading>

        <p className="text-xl my-5">{ text }</p>

        <ButtonLink text={buttonText} href={buttonLink}/>
    </div>
);

export default IntroBlock;