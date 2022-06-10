import React from "react";
import { Provider } from "react-redux";
import HomePage from "../Pages/Home";
import store from "../Redux";

const App = () => {
    return (
        <Provider store={store}>
            <HomePage />
        </Provider>
    );
};

export default App;