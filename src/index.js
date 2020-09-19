import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Navigator from './components/Navigator';
import Main from './routes/Main';
import About from './routes/About';

ReactDOM.render(
  <BrowserRouter>
    <Navigator />
    <Route path="/" exact={true} component={Main} />
    <Route path="/about" component={About} />
  </BrowserRouter>,
  document.getElementById('root')
);
