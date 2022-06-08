import { 
    setFocusedSection,
    setQuestions
} from "./index";

//Update question action
const updateQuestions = questions => setQuestions({ questions });

//Update current question action
const updateFocusedSection = section => setFocusedSection({ section });

export {
    updateQuestions,
    updateFocusedSection
};