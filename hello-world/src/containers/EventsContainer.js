// Import react and component method
import React, {Component} from 'react';

// Global
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

// Components
import Events from '../components/Events';

// Data
import items from '../data/menu';

class EventsContainer extends Component {
  render() {
    return(
      <div>
        <Header title="CodeJobs" items={items} />
        <Events />
        <Footer />
      </div>
    );
  }
}

export default EventsContainer;
