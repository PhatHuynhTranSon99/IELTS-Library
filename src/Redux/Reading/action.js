/**
 * All the action for the reading slice
 */
import { setAnswer } from "./index"

const updateAnswer = (questionId, questionAnswer) => {
    return setAnswer({ id: questionId, answer: questionAnswer });
};

export {
    updateAnswer
};