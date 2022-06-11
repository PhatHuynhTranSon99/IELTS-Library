/**
 * Selector for the hot collection reducer
 */

const getItems = state => state.collections.latest.items;

const getError = state => state.collections.latest.error;

const getLoading = state => state.collections.latest.loading;

export {
    getItems,
    getError,
    getLoading
};

