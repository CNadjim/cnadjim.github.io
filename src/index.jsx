import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import './assets/font/Inter-italic.var.woff2';
import './assets/font/Inter-roman.var.woff2';
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Store from "./app/store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={Store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);