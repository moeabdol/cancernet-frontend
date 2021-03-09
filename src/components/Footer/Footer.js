import React, { Component } from 'react';

import { Container } from './FooterStyles';

class Footer extends Component {
  render = () => {
    return (
      <Container className="navbar fixed-bottom navbar-dark bg-dark">
        <div className="container-fluid">
          <p className="text-white my-2 mx-2">
            Made With&nbsp;
            <span className="heart"> ❤ </span>
            &nbsp;by NCAI
          </p>
        </div>
      </Container>
    );
  };
}

export default Footer;
