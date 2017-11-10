// Dependencies
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Containers
import Home from './Home';
import Props from '../containers/PropsContainer';
import LocalState from '../containers/LocalStateContainer';
import Map from '../containers/MapContainer';
import Events from '../containers/EventsContainer';
import OtherLocalState from '../containers/OtherLocalStateContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/props" component={Props} exact />
          <Route path="/localstate" component={LocalState} exact />
          <Route path="/map" component={Map} exact />
          <Route path="/events" component={Events} exact />
          <Route path="/otherlocalstate" component={OtherLocalState} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
