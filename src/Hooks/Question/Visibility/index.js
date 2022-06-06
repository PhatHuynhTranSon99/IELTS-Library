import { useState } from "react";

function useVisibleQuestion(questions) {
    //State for holding active question (question that is currently visible)
    const firstQuestionId = questions.length > 0 ? questions[0].id : null;
    const [visibleQuestionId, setVisibleQuestionId] = useState(firstQuestionId);

    //Set visible question id
    return [visibleQuestionId, setVisibleQuestionId];
};

export default useVisibleQuestion;