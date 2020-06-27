import React from 'react';
import jwt_decode from 'jwt-decode';

class Header extends React.Component {
  state = {
    first_name: ''
  };

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.identity.first_name
    });
  }
  render() {
    return (
      <div className="container d-flex align-items-center bg-dark">
        <div className="row">
          <div className="pad-left">
            {/* <div className="col-lg-7 col-md-10"> */}

            <h1 className="display-2 text-white">Hello {this.state.first_name}</h1>
            <p className="text-white mt-0 mb-5">Please edit your profile to serve you better.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
