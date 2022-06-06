import Section from "./section";

const PaginationContainer = ({ children }) => (
    <div className="flex flex-row p-3 overflow-x-scroll gap-5 no-wrap">{ children }</div>
);

const Pagination = ({ content }) => (
    <PaginationContainer>
    {
        content.map(
            item => <Section key={item.section} {...item}/>
        )
    }
    </PaginationContainer>
);

export default Pagination;