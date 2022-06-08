export const SpeakingLayout = ({ children }) => (
    <div className="grid grid-cols-1 grid-rows-12 h-full">{ children }</div>
);

export const QuestionSection = ({ children }) => (
    <div className="row-start-1 row-span-11 col-start-1 col-span-1">{ children }</div>
);

export const PaginationSection = ({ children }) => (
    <div className="row-start-12 row-span-1 col-start-1 col-span-1">{ children }</div>
);