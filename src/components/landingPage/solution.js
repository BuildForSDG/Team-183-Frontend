import React from 'react';

class Solution extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row row-grid align-items-center mb-5 mb-md-7" id="solution">
          <div className="col-12 col-md-5">
            <h2 className="font-weight-bolder mb-4" style={{ color: 'orange' }}>
              Farmers
            </h2>
            <p className="lead">
              Whether you manage a small free-range farm or a large full scale poultry farm, Chicken-Farm-Ke can help
              you sell to end consumers or restaurants effortlessly and with ease. We cut out the middleman and enable
              you to get paid on time. Grow your business faster with Chicken-Farm-Ke. Get access to faster payments and
              a platform to manage your business
            </p>
          </div>
          <div className="col-12 col-md-6 ml-md-auto">
            <img
              src="https://lukaszadam.com/IMG/woman_desk.svg"
              alt=" "
              className=" img-fluid "
              style={{ width: '300px', height: '300px' }}
            />
          </div>
        </div>

        <div className="row row-grid align-items-center mb-5 mb-md-7">
          <div className="col-12 col-md-5 order-md-2">
            <h2 className="font-weight-bolder mb-4" style={{ color: 'orange' }}>
              Restaurants
            </h2>
            <p>
              open an account with Chicken-Farm-Ke today and get access to exclusive deals on wholesale chicken for all
              your menu needs. From organic, free range or kieneji chicken we have the freshest and widest range of
              chicken in Kenya today.
            </p>
          </div>
          <div className="col-12 col-md-6 mr-lg-auto">
            <img
              src="https://lukaszadam.com/storefront_illustration.svg"
              alt=" "
              className="img-fluid "
              style={{ width: '300px', height: '300px' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Solution;
