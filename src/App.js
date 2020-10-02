import React from 'react';

import Main from './Components/Pages/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Book from './Components/Pages/Book';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Main} path='/' exact />
          <Route component={Book} path='/book/:id' strict exact />
          <Route render={() => <div>Такой страницы нет</div>}  />
        </Switch>
      </Router>
    );
  }
}

export default App;
