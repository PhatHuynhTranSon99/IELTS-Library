import { 
    setFocusedSection,
    setAnswer,
    setQuestions
} from "./index";

//Update answer action
const updateAnswer = (question, answer) => setAnswer({ question, answer });

//Update question action
const updateQuestions = questions => setQuestions({ questions });

//Update current question action
const updateFocusedSection = section => setFocusedSection({ section });

export {
    updateAnswer,
    updateQuestions,
    updateFocusedSection
};