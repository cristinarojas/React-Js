// Import react and component method
import React, {Component} from 'react';

// Global
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

// Components
import OtherLocalState from '../components/OtherLocalState';

// Data
import items from '../data/menu';

class OtherLocalStateContainer extends Component {
  render() {
    return(
      <div>
        <Header title="CodeJobs" items={items} />
        <OtherLocalState />
        <Footer />
      </div>
    );
  }
}

export default OtherLocalStateContainer;
