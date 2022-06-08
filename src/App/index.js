import React from "react";
import { Provider } from "react-redux";
import SpeakingTest from "../Pages/Speaking";
import store from "../Redux";

const App = () => {
    return (
        <Provider store={store}>
            <SpeakingTest />
        </Provider>
    );
};

export default App;