import React from "react";
import { Provider } from "react-redux";
import ListeningTest from "../Pages/Listening";
import store from "../Redux";

const App = () => {
    return (
        <Provider store={store}>
            <ListeningTest />
        </Provider>
    );
};

export default App;