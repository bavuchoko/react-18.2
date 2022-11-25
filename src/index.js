import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./assets/css/size.css"
import "./assets/css/common.css"
import "./assets/css/color.css"
import "./assets/css/custom.css"
import App from './App';
import { Provider } from "react-redux";
import store from "./reducer/store.js";
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

