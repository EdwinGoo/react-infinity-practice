import React, { Fragment } from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import HooksUseEffect from './practice/HooksUseEffect';
import Home from '../src/practice/Home';
import HookUseMemo from '../src/practice/HookUseMemo';
import { Route, Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Fragment>
      <div className="Content">
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/CounterContainer" component={CounterContainer}></Route>
        <Route exact path="/HooksUseEffect" component={HooksUseEffect}></Route>
        <Route exact path="/HookUseMemo" component={HookUseMemo}></Route>
      </div>
      <div className="Mmenu">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/CounterContainer">CounterContainer</Link>
          </li>
          <li>
            <Link to="/HooksUseEffect">HooksUseEffect</Link>
          </li>
          <li>
            <Link to="/HookUseMemo">HookUseMemo</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default App;
