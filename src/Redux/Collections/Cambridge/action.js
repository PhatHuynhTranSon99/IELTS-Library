/**
 * Actions for the hot collection reducer
 */

import {
    setItems,
    setError,
    setLoading
} from "./index";

const updateItems = items => setItems({ items });

const updateLoading = () => setLoading();

const updateError = error => setError({ error });

export {
    updateItems,
    updateError,
    updateLoading
};