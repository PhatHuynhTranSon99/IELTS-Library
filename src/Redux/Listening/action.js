/**
 * All the action for the reading slice
 */
import { setAnswer, setFocusedQuestion } from "./index"

const updateAnswer = (questionId, questionAnswer) => {
    return setAnswer({ id: questionId, answer: questionAnswer });
};

const updateFocusedQuestion = (section, question) => {
    return setFocusedQuestion({ section, question });
};

export {
    updateAnswer,
    updateFocusedQuestion
};