import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/index.css';
import ListsPage from './components/ListsPage';
import App from './components/App';
import reportWebVitals from './components/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ListsPage/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
