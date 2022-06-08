//Get all the questions from the store
const getAllQuestions = state => state.speaking.questions.sections;

//Get the pagination from the store
const getPagination = state => state.speaking.questions.pagination;

//Get the current focused section
const getFocusedSection = state => {
    return state.speaking.questions.sections.find(
        item => item.id === state.speaking.focusedSection
    );
};
const getFocusedSectionId = state => state.speaking.focusedSection;

export {
    getAllQuestions,
    getFocusedSection,
    getFocusedSectionId,
    getPagination
};