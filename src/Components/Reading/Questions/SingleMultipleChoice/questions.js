import React from "react";
import Question from "./question";
import useVisibleQuestion from "../../../../Hooks/Question/Visibility";

const Questions = ({ questions }) => {
    const [visibleQuestion, setVisibleQuestion] = useVisibleQuestion(questions);

    //Set visible question on click
    const onQuestionClick = question => () => setVisibleQuestion(question.id);

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