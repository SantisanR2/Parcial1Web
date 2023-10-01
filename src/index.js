import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {IntlProvider} from 'react-intl';
import Login from './components/login';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Home from "./components/home";
import Detail from "./components/detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import localeEsMessages from "./locales/es";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale="es-ES" messages={localeEsMessages}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:carModel" element={<Detail />} />
        </Routes>
    </BrowserRouter>
  </IntlProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
