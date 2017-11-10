// Import react and component method
import React, {Component} from 'react';

// Global
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

// Components
import Map from '../components/Map';

// Data
import items from '../data/menu';

class MapContainer extends Component {
  render() {
    return(
      <div>
        <Header title="CodeJobs" items={items} />
        <Map />
        <Footer />
      </div>
    );
  }
}

export default MapContainer;
