import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const scatId = '12345';
    this.props.history.push(`/edit/${scatId}`);
  }

  render() {
    return (
      <div className="Home">
        <h1>Home Component</h1>
        <button className="btn btn-info" onClick={this.editEvent}>Edit a thing</button>
        <Link to='/scat/12345'>View Single</Link>
        <Link to='/new'>New Scat</Link>
      </div>
    );
  }
}

export default Home;
