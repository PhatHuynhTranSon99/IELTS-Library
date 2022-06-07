import React from "react";
import { useSelector } from "react-redux";
import { getAllQuestions } from "../../../Redux/Listening/select";
import Question from "../Questions";

const Questions = ({ questions }) => {
    return (
        <React.Fragment>
        {
            questions.map(
                question => (
                    <Question key={question.name} {...question}/>
                )
            )
        }
        </React.Fragment>
    );
};

const QuestionsContainer = () => {
    const questions = useSelector(getAllQuestions);

    return (
        <Questions questions={questions}/>
    );
};

export default QuestionsContainer;