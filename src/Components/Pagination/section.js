import NoWrap from "../Auxiliary/Text/NoWrap";
const SectionContainer = ({ children }) => (
    <div className="flex flex-row gap-4 items-center">{ children }</div>
);

const Button = ({ children, ...rest }) => (
    <button className="rounded border border-slate-300 w-10 h-10" {...rest}>{ children }</button>
);

const Section = ({ section, questions, onClick }) => {
    const onQuestionClick = question => () => onClick(section, question);

    return (
        <SectionContainer>
            <NoWrap>
                Section { section }
            </NoWrap>
            {
                questions.map(
                    question => (
                        <Button key={question}
                            onClick={onQuestionClick(question)}>
                            {question}
                        </Button>
                    )
                )
            }
        </SectionContainer>
    );
};

export default Section;