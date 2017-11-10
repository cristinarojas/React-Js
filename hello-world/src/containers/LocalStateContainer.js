// Import react and component method
import React, {Component} from 'react';

// Global
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

// Components
import LocalState from '../components/LocalState';

// Data
import items from '../data/menu';

class LocalStateContainer extends Component {
  render() {
    return(
      <div>
        <Header title="CodeJobs" items={items} />
        <LocalState />
        <Footer />
      </div>
    );
  }
}

export default LocalStateContainer;
