import React from 'react';

// Global
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

// Data
import items from '../data/menu';

function Home(props) {
  return (
    <div>
      <Header title="CodeJobs" items={items} />
      <h1>Hello Home</h1>
      <Footer />
    </div>
  );
}

export default Home;
