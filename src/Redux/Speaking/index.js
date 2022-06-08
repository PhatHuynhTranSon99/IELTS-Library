import { createSlice } from "@reduxjs/toolkit";
import mockData from "../../Mock/Speaking";

const speakingSlice = createSlice({
    name: "speaking",
    initialState: {
        questions: mockData,
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

export const { setQuestions, setFocusedSection } = speakingSlice.actions;

export default speakingSlice.reducer;