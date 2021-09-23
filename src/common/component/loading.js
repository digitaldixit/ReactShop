import React, { Component } from 'react';

class Loading extends Component {

  render() {
    return (
      <div>
        <div className="loader-overlay">
        </div>
        <div className="center-loading">
        <span className="loader"></span>
        </div>
      </div>
    );
  }
}

export default Loading;
