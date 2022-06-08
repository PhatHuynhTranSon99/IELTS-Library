import { createSlice } from "@reduxjs/toolkit";
import mockData from "../../Mock/Writing";

const writingSlice = createSlice({
    name: "writing",
    initialState: {
        questions: mockData,
        userAnswers: {},
        focusedSection: 1
    },
    reducers: {
        setQuestions: (state, action) => {
            /**
             * payload has structure
             * {
             *      questions
             * }
             */
            const { questions } = action.payload;
            state.questions = questions;
        },
        setAnswer: (state, action) => {
            /**
             * payload has structure
             * {
             *      question: the question's id, 
             *      answer: the answer
             * }
             */
            const { question, answer } = action.payload;
            state.userAnswers[question] = answer;
        },
        setFocusedSection: (state, action) => {
            /**
             * payload has structure
             * {
             *      section: the id of focused section
             * }
             */
            const { section } = action.payload;
            state.focusedSection = section;
        }
    }
});

export const { setQuestions, setAnswer, setFocusedSection } = writingSlice.actions;

export default writingSlice.reducer;