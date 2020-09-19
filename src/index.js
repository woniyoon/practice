import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Main from './routes/Main';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Route path="/" exact={true} component={Main} />
  </BrowserRouter>,
  document.getElementById('root')
);
