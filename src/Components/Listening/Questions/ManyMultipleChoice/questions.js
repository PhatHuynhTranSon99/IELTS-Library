import React from "react";
import Question from "./question";
import useVisibleQuestion from "../../../../Hooks/Question/Visibility";

const Questions = ({ questions }) => {
    //Visible question state
    const [visibleQuestion, setVisibleQuestion] = useVisibleQuestion(questions);

    //Set visible question on click
    const onQuestionClick = question => () => setVisibleQuestion(question.id);

    //Check if question is visible
    const isVisible = question => question.id === visibleQuestion;

    return (
        <React.Fragment>
        {
            questions.map(
                question => (
                    <Question key={question.id} 
                        onClick={onQuestionClick(question)}
                        visible={isVisible(question)}
                        {...question}/>
                )
            )
        }
        </React.Fragment>
    );
};

export default Questions;