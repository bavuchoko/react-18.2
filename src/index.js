import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./assets/css/size.css"
import "./assets/css/common.css"
import "./assets/css/color.css"
import "./assets/css/custom.css"
import App from './App';
import {Provider} from "react-redux";
import store from "./reducer/store.js";
import {BrowserRouter as Router} from "react-router-dom";

import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

export let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={ null } persistor ={ persistor }>
            <Router>
                <App />
            </Router>
        </PersistGate>
    </Provider>
);

