import React from "react";
import ButtonLink from "../ButtonLink";
import Heading from "../Text/Heading";

const CarouselIntroBlock = ({ title, text, buttonText, buttonLink, children }) => (
    <React.Fragment>
        <Heading>{ title }</Heading>
        <p className="text-xl my-5">{ text }</p>
        { children }
        <ButtonLink text={buttonText}
            href={buttonLink}/>
    </React.Fragment>
);

export default CarouselIntroBlock;