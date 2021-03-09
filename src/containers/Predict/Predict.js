import React, { Component } from 'react';

import Malignant1 from '../../assets/images/malignant1.png';
import Malignant2 from '../../assets/images/malignant2.png';
import Malignant3 from '../../assets/images/malignant3.png';
import Benign1 from '../../assets/images/benign1.png';
import Benign2 from '../../assets/images/benign2.png';
import Benign3 from '../../assets/images/benign3.png';

class Predict extends Component {
  render = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Test Images</h4>
            <p>
              The following images have not been used during the training of the
              network.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4 mb-3">
            <div className="card">
              <img src={Malignant1} alt="Malignant Breast Tumor" />
              <div className="card-body">
                <p className="card-text">Class: Malignant</p>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary">Test</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-3">
            <div className="card">
              <img src={Benign1} alt="Benign Breast Tissue" />
              <div className="card-body">
                <p className="card-text">Class: Benign</p>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary">Test</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-3">
            <div className="card">
              <img src={Malignant2} alt="Malignant Breast Tumor" />
              <div className="card-body">
                <p className="card-text">Class: Malignant</p>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary">Test</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-3">
            <div className="card">
              <img src={Benign2} alt="Benign Breast Tissue" />
              <div className="card-body">
                <p className="card-text">Class: Benign</p>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary">Test</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-3">
            <div className="card">
              <img src={Malignant3} alt="Malignant Breast Tumor" />
              <div className="card-body">
                <p className="card-text">Class: Malignant</p>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary">Test</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-3">
            <div className="card">
              <img src={Benign3} alt="Benign Breast Tissue" />
              <div className="card-body">
                <p className="card-text">Class: Benign</p>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary">Test</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Predict;
