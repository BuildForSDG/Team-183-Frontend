import React from "react";
class Progress extends React.Component {
  render() {
    return (
      <div className="container bg-dark">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="card bg-gradient-info border-0"
              style={{ background: " #ffb347" }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h5 className="card-title text-uppercase text-muted mb-0 text-white">
                      Total traffic
                    </h5>
                    <span className="h2 font-weight-bold mb-0 text-white">
                      350,897
                    </span>
                  </div>
                  <div className="col-auto">
                    <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                      <i className="ni ni-active-40"></i>
                    </div>
                  </div>
                </div>
                <p className="mt-3 mb-0 text-sm">
                  <span className="text-white mr-2">
                    <i className="fa fa-arrow-up"></i> 3.48%
                  </span>
                  <span className="text-nowrap text-light">
                    Since last month
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="card bg-gradient-danger border-0"
              style={{ background: " #ffb347" }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h5 className="card-title text-uppercase text-muted mb-0 text-white">
                      Performance
                    </h5>
                    <span className="h2 font-weight-bold mb-0 text-white">
                      49,65%
                    </span>
                  </div>
                  <div className="col-auto">
                    <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                      <i className="ni ni-spaceship"></i>
                    </div>
                  </div>
                </div>
                <p className="mt-3 mb-0 text-sm">
                  <span className="text-white mr-2">
                    <i className="fa fa-arrow-up"></i> 3.48%
                  </span>
                  <span className="text-nowrap text-light">
                    Since last month
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Progress;
