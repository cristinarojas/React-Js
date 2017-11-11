// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './Footer.css';

class Footer extends Component {
  // Validations with PropTypes
  static propType = {
    copyright: PropTypes.string
  };

  render() {
    const { copyright = '&copy; React 2017' } = this.props;

    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{__html: copyright }} />
      </div>
    );
  }
}

export default Footer;
