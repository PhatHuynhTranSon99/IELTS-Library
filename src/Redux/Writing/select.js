//Get all the questions from the store
const getAllQuestions = state => state.writing.questions.sections;

//Get the pagination from the store
const getPagination = state => state.writing.questions.pagination;

//Get the current focused section
const getFocusedSection = state => {
    return state.writing.questions.sections.find(
        item => item.id === state.writing.focusedSection
    );
};

const getFocusedSectionId = state => state.writing.focusedSection;

//Get a single answer from store
const getUserAnswer = question => state => state.writing.userAnswers[question];

export {
    getAllQuestions,
    getFocusedSection,
    getFocusedSectionId,
    getPagination,
    getUserAnswer
};