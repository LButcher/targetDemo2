import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Home extends Component {
  
  render() {
    return (
      <div>
        <h3>Here are some live demo examples using Adobe Target</h3>
        <div>
        <p>Category Affinity Example: <Link id="CategoryLink" to={'/Categories'}>Categories</Link></p> 
        </div>
      </div>
    );
  }
}

export default Home;