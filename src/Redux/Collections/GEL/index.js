import { createSlice } from "@reduxjs/toolkit";
import mockData from "../../../Mock/Collections";

const GelCollection = createSlice({
    name: "hot",
    initialState: {
        items: mockData,
        loading: false,
        error: null
    },
    reducers: {
        setItems: (state, action) => {
            /**
             * action has following structure
             * {
             *      payload: {
             *          items: []
             *      }
             * }
             */
            const { items } = action.payload;
            state.items = items;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state, action) => {
            state.loading = true;
        },
        setError: (state, action) => {
            /**
             * action has following structure
             * {
             *      payload: {
             *          error: Object
             *      }
             * }
             */
            const { error } = action.payload;
            state.error = error;
        }
    }
});

export const { setItems, setLoading, setError } = GelCollection.actions;

export default GelCollection.reducer;