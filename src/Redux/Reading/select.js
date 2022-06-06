/**
 * All the select function for the reading slice
 */

//Select all the question data from the slice
const getQuestions = state => state.reading.questions;

//Select the user answers and correct answers from the slice
const getUserAnswers = state => state.reading.userAnswers;

//Select a single user answer from the slice
const getUserAnswer = questionId => (
    state => state.reading.userAnswers[questionId]
);

//Get the focused section and question
const getFocusedSection = state => {
    const currentSectionIndex = state.reading.focusedSection;
    return state.reading.questions.sections.find(section => section.id === currentSectionIndex);
}

//Get the paragraph only
const getParagraph = state => {
    const focusedSectionIndex = state.reading.focusedSection;
    const focusedSection = state.reading.questions.sections.find(section => section.id === focusedSectionIndex);

    return focusedSection ? focusedSection.paragraph : null;
};

//Get all questions for the focused section
const getAllQuestions = state => {
    const focusedSectionIndex = state.reading.focusedSection;
    const focusedSection = state.reading.questions.sections.find(section => section.id === focusedSectionIndex);

    return focusedSection ? focusedSection.tasks : null;
};

const getFocusedQuestion = state => state.reading.focusedQuestion;

//Get the pagination data
const getPagination = state => state.reading.questions.pagination;

export { 
    getQuestions, 
    getAllQuestions,
    getParagraph,
    getUserAnswers, 
    getUserAnswer,
    getFocusedSection,
    getPagination,
    getFocusedQuestion,
};