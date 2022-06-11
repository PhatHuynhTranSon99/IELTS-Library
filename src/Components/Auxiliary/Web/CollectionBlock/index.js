import SmallHeading from "../Text/SmallHeading";
import SubTitle from "../Text/SubTitle";

const CollectionBlock = ({ title, text, items }) => (
    <div className="mx-5">
        <SmallHeading>{ title }</SmallHeading>
        <SubTitle>{ text }</SubTitle>
    </div>
);

export default CollectionBlock;