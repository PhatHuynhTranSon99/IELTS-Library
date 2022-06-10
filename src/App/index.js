import React from "react";
import { Provider } from "react-redux";
import LibraryPage from "../Pages/Library";
import store from "../Redux";

const App = () => {
    return (
        <Provider store={store}>
            <LibraryPage />
        </Provider>
    );
};

export default App;