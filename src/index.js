import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./inex.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)