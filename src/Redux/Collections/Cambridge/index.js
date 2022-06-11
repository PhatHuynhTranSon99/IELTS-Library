import { createSlice } from "@reduxjs/toolkit";

const CambridgeCollection = createSlice({
    name: "hot",
    initialState: {
        items: [],
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

export const { setItems, setLoading, setError } = CambridgeCollection.actions;

export default CambridgeCollection.reducer;