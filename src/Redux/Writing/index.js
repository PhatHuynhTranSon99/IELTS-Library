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
        setQuestions: (state, payload) => {
            /**
             * payload has structure
             * {
             *      questions
             * }
             */
            const { questions } = payload;
            state.questions = questions;
        },
        setAnswer: (state, payload) => {
            /**
             * payload has structure
             * {
             *      question: the question's id, 
             *      answer: the answer
             * }
             */
            const { question, answer } = payload;
            state.userAnswers[question] = answer;
        },
        setFocusedSection: (state, payload) => {
            /**
             * payload has structure
             * {
             *      section: the id of focused section
             * }
             */
            const { section } = payload;
            state.focusedSection = section;
        }
    }
});

export const { setQuestions, setAnswer, setFocusedSection } = writingSlice.actions;

export default writingSlice.reducer;