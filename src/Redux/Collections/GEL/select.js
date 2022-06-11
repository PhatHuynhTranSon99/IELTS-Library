/**
 * Selector for the hot collection reducer
 */

const getItems = state => state.collections.gel.items;

const getError = state => state.collections.gel.error;

const getLoading = state => state.collections.gel.loading;

export {
    getItems,
    getError,
    getLoading
};

