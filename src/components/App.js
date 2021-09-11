import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import { Main } from './Main';

export const App = (props) => {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );

};

export default App;
