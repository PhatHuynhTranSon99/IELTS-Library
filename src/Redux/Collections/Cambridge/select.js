/**
 * Selector for the hot collection reducer
 */

const getItems = state => state.collections.cambridge.items;

const getError = state => state.collections.cambridge.error;

const getLoading = state => state.collections.cambridge.loading;

export {
    getItems,
    getError,
    getLoading
};

