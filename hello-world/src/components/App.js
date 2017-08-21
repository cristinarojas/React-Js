// Dependencies
import React, { Component } from 'react';

// Components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

// Data
import items from '../data/menu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="CodeJobs" items={items} />
        <Content />
        <Footer/>
      </div>
    );
  }
}

export default App;
