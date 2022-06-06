import React from "react";
import useVisibleQuestion from "../../../../Hooks/Question/Visibility";
import Question from "./question";

const Questions = ({ questions }) => {
    const [visibleQuestion, setVisibleQuestion] = useVisibleQuestion(questions);

    //Set question visibility on click
    const onQuestionClick = question => () => setVisibleQuestion(question.id);

    //Check if a question is visible
    const isVisible = question => question.id === visibleQuestion;

    return (
        <React.Fragment>
        {
            questions.map(
                question => (
                    <Question key={question.id} 
                        visible={isVisible(question)}
                        onClick={onQuestionClick(question)}
                        {...question}/>
                )
            )
        }
        </React.Fragment>
    )
};

export default Questions;