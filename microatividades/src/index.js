import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PizzaTranslator from './components/microatividade-1';
import App from './components/microatividade-2';
import FlatListBasics from './components/microatividade-3';
import SectionListBasics from './components/microatividade-3_2';
import DisplayAnImage from './components/microatividade-4';
import DisplayAnImageWithStyle from './components/microatividade-4_2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PizzaTranslator />
    <App />
    <FlatListBasics />
    <SectionListBasics />
    <DisplayAnImage />
    <DisplayAnImageWithStyle />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
