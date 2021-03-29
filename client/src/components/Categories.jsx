import React, { Component } from 'react';

class Categories extends Component {

    addTargetTrigger() {

    }
  
  render() {
    return (
        <div>
        <h1>Category Affinity</h1>
        <p>Each of the elements below have an onclick event listener attached to them which will trigger the Adobe Target trackEvent function:</p>
        <code>code</code>
        <p>The current category is then retrieved using the getOffer function.</p>
        </div>
    );
  }
}

export default Categories;