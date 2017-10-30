// Dependencies
import React, { Component } from 'react';

// Components
import Header from './global/Header';
import Statecomponent from './global/Statecomponent';
import Content from './global/Content';
import Article from './global/Article';
import Section from './global/Section';
import Footer from './global/Footer';
import MapComponent from './global/MapComponent';
import Forms from './global/Forms';

// Data
import items from '../data/menu';


class App extends Component {
  render() {
    const style = {
      color: 'purple',
      fontSize: '56px'
    };

    const attrs = {
      id: '1',
      className: 'nombre-clase'
    };

    const theTitle = "The title";

    return (
      <div className="App">
        <Header title="CodeJobs" items={items} />
        <Section theTitle={theTitle} title="Passing this prop" name="cristina" thestyle={style} theattrs={attrs} />
        <Statecomponent />
        <MapComponent />
        <Article />
        <Content />
        <Footer/>
      </div>
    );
  }
}

export default App;
