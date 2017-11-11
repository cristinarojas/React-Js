// Import react and component method
import React, { Component } from 'react';

// Global
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

// Components
import CoursePage from '../components/CoursePage';

// Data
import items from '../data/menu';

class CoursePageContainer extends Component {
  render() {
    return(
      <div>
        <Header title="CodeJobs" items={items} />
        <CoursePage />
        <Footer />
      </div>
    );
  }
}

export default CoursePageContainer;
