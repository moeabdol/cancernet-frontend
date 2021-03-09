import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends Component {
  render = () => {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            CancerNet
          </Link>
        </div>
      </nav>
    );
  };
}

export default Header;
