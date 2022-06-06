import MatchHeading from "../MatchHeading";

const MatchStatements = ({ 
    name, 
    task,
    title,
    questions,
    statements
}) => (
    <MatchHeading name={name}
        task={task}
        title={title}
        questions={questions}
        headings={statements}/>
);

export default MatchStatements