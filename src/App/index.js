import React from "react";
import { Provider } from "react-redux";
import WritingTest from "../Pages/Writing";
import store from "../Redux";

const App = () => {
    return (
        <Provider store={store}>
            <WritingTest />
        </Provider>
    );
};

export default App;