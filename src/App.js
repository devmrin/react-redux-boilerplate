import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { FourOhFour, Home } from './screens';
class App extends Component {
  componentDidMount() {
    document.querySelector('.loader__main').classList.add('hide');
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={FourOhFour} />
      </Switch>
    );
  }
}

export default App;
