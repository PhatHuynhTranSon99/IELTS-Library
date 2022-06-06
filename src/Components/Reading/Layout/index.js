export const ReadingLayout = ({ children }) => (
    <div className="grid grid-cols-2 grid-rows-12 h-full w-full">{ children }</div>
);

export const TimerSection = ({ children }) => (
    <div className="row-start-1 row-span-1 col-start-1 col-span-2">{ children }</div>
);

export const ParagraphSection = ({ children }) => (
    <div className="row-start-2 row-span-10 col-start-1 col-span-1 overflow-y-scroll">{ children }</div>
);

export const QuestionSection = ({ children }) => (
    <div className="row-start-2 row-span-10 col-start-2 col-span-1 overflow-y-scroll">{ children }</div>
);

export const PaginationSection = ({ children }) => (
    <div className="row-start-12 row-span-1 col-start-1 col-span-2">{ children }</div>
);
