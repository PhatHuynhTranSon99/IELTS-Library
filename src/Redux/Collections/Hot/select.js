/**
 * Selector for the hot collection reducer
 */

const getItems = state => state.collections.hot.items;

const getError = state => state.collections.hot.error;

const getLoading = state => state.collections.hot.loading;

export {
    getItems,
    getError,
    getLoading
};

