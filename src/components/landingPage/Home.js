import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div
        className="section-header pb-7 pb-lg-11 bg-soft"
        id="Home"
        style={{ marginBottom: "4rem" }}
      >
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-5 order-1 order-lg-2">
              <h1 className="display-3 mb-3" style={{ color: "brown", marginTop: "50px" }}>
                <strong>Connecting you to your favorite meal</strong>
              </h1>
              <p className="lead" style={{ fontSize: "1.5rem" }}>
                Join our growing number of consumers and vendors in the
                Chicken-Farm-Ke .
              </p>
            </div>

            <div className="col-12 col-md-6 order-2 order-lg-1">
              <img
                className="img-fluid"
                src="https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/5def2c159f7f67eda8e92222_5de59a6989c6853f0b7a6ed4_drawkit-grape-pack-illustration-5-white-bg.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
