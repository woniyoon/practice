import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './index.css';
import Navigator from './components/Navigator';
import Main from './routes/Main';
import About from './routes/About';
import Works from './routes/Works';

ReactDOM.render(
  <HashRouter>
    <Navigator />
    <Route path="/" exact={true} component={Main} />
    <Route path="/about" component={About} />
    <Route path="/works" component={Works} />
  </HashRouter>,
  document.getElementById('root')
);
