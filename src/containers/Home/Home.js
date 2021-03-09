import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './HomeStyles';
import IDCImage from '../../assets/images/idc.png';
import IDC2Image from '../../assets/images/idc2.png';

class Home extends Component {
  render = () => {
    return (
      <Container className="container">
        <div className="row mb-3 text-center">
          <div className="col-sm-12 col-md-6">
            <img className="img-fluid" src={IDCImage} alt="IDC Image" />
          </div>
          <div className="col-sm-12 col-md-6">
            <img className="img-fluid" src={IDC2Image} alt="IDC Image" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <p>
              Invasive Ductal Carcinoma is a common type of breast cancer that
              starts in cells that line the milk ducts, which carry breast milk
              to the nipple. There are two types: Invasive ductal carcinoma
              (IDC) Ductal carcinoma in situ (DCIS), also called intraductal
              carcinoma.
            </p>
            <p>
              The TensorFlow model was trained using a Convuloutional Neural
              Network, and have reached an accuracy of %79 after 40 epochs.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="d-grid gap-2 col-6 mx-auto">
              <Link className="btn btn-primary" to="/predict">
                Test Model
              </Link>
            </div>
          </div>
        </div>
      </Container>
    );
  };
}

export default Home;
