import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './Components/Pages/Main';
import NotFound from './Components/Pages/NotFound';
import Book from './Components/Pages/Book';
import { BookPath } from './helpers/BookPath';
import Contacts from './Components/Pages/Contacts';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Main} path='/' exact />
          <Route component={Book} path={BookPath()} strict exact />
          <Route component={Contacts} path='/contacts' strict exact />
          <Route component={NotFound}  />
        </Switch>
      </Router>
    );
  }
}

export default App;
