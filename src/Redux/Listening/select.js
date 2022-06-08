/**
 * All the select function for the listening slice
 */

//Select all the question data from the slice
const getQuestions = state => state.listening.questions;

//Select the user answers and correct answers from the slice
const getUserAnswers = state => state.listening.userAnswers;

//Select a single user answer from the slice
const getUserAnswer = questionId => (
    state => state.listening.userAnswers[questionId]
);

//Get the focused section and question
const getFocusedSection = state => {
    const currentSectionIndex = state.listening.focusedSection;
    return state.listening.questions.sections.find(section => section.id === currentSectionIndex);
}

//Get all questions for the focused section
const getAllQuestions = state => {
    const focusedSectionIndex = state.listening.focusedSection;
    const focusedSection = state.listening.questions.sections.find(section => section.id === focusedSectionIndex);
    return focusedSection ? focusedSection.tasks : null;
};

const getFocusedQuestion = state => state.listening.focusedQuestion;

//Get the pagination data
const getPagination = state => state.listening.questions.pagination;

export { 
    getQuestions, 
    getAllQuestions,
    getUserAnswers, 
    getUserAnswer,
    getFocusedSection,
    getPagination,
    getFocusedQuestion,
};