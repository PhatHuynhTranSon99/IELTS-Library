import { createSlice } from "@reduxjs/toolkit";
import mockData from "../../Mock/Listening";

const listeningSlice = createSlice({
    name: "listening",
    initialState: {
        questions: mockData, //All the questions along with pagination data
        userAnswers: {}, //When user chooses an answer, it will be recorded here
        correctAnswers: {}, //The correct answer, retrieve from the server, will be saved heree
        focusedSection: 5, //Focused section, when user clicks on the pagination question
        focusedQuestion: 1 //Focused question, when user clickes on the pagination question
    },
    reducers: {
        setQuestions: (state, action) => {
            /**
             * action has the following structure
             * {
             *     payload: { 
             *         the question payload
             *     }
             * }
             */
            state.questions = action.payload;
        },
        setAnswer: (state, action) => {
            /**
             * action has the following structure
             * {
             *     payload: {
             *         id: the question's id
             *         answer: the question's answer
             *     }
             * }
             */
            const { id, answer } = action.payload;
            state.userAnswers[id] = answer;
        },
        setCorrectAnswers: (state, action) =>  {
            /**
             * action has the following structure
             * {
             *     payload: {
             *         the correct answer payload
             *     }
             * }
             */
            state.correctAnswers = action.payload;
        },
        setFocusedQuestion: (state, action) => {
            /**
             * action has following structure
             * {
             *      payload: {
             *          section: the focused part,
             *          question: the focused question
             *      }
             * }
             */
            const { section, question } = action.payload;
            state.focusedSection = section;
            state.focusedQuestion = question;
        }
    }
});

export const { setAnswer, setCorrectAnswers, setFocusedQuestion, setQuestions } = listeningSlice.actions;

export default listeningSlice.reducer;