import React from "react";
import ItemCard from "../ItemCard";
import Loading from "../Loading";
import SmallHeading from "../Text/SmallHeading";
import SubTitle from "../Text/SubTitle";

const DisplayItems = ({ items, loading, error }) => (
    <React.Fragment>
    {
        loading ? 
        <Loading /> :
        (
            error ? 
            null :
            <div className="grid grid-cols-3">
            {
                items.map(
                    item => (
                        <ItemCard key={item.id} 
                            {...item}/>
                    )
                )
            }
            </div>
        )
    }
    </React.Fragment>
);

const CollectionBlock = ({ title, text, items, loading, error }) => (
    <div className="mx-5">
        <SmallHeading>{ title }</SmallHeading>
        <SubTitle>{ text }</SubTitle>
        <DisplayItems items={items}
            error={error}
            loading={loading}/>
    </div>
);

export default CollectionBlock;