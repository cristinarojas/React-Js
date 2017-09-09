// Dependencies
import React, { Component } from 'react';

// Components
import Header from './global/Header';
import Content from './global/Content';
import Article from './global/Article';
import Section from './global/Section';
import Footer from './global/Footer';

// Data
import items from '../data/menu';


class App extends Component {
  render() {
    const style = {
      color: 'purple',
      fontSize: '36px'
    };

    const attrs = {
      id: '1',
      className: 'nombre-clase'
    };

  
    return (
      <div className="App">
        <Header title="CodeJobs" items={items} />
        
        <Section title="Props and destructuring" name="cristina" style={style} attrs={attrs} />

        <Article />
        <Content />
        <Footer/>
      </div>
    );
  }
}

export default App;
