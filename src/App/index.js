import React from "react";
import { Provider } from "react-redux";
import ReadingTest from "../Pages/Reading";
import store from "../Redux";

const App = () => {
    return (
        <Provider store={store}>
            <ReadingTest />
        </Provider>
    );
};

export default App;