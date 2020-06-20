import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
// import NavBar from './NavBar_Profile';
// import NavBar from './NavBar_Responsive';


class Profile extends Component {
  state = {
    first_name: '',
    last_name: '',
    username: '',
    email: ''
  };

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.identity.first_name,
      last_name: decoded.identity.last_name,
      username: decoded.identity.username,
      email: decoded.identity.email
    });
  }

  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <div className="container">
          <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center">PROFILE</h1>
            </div>
            <table className="table col-md-6 mx-auto">
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td>{this.state.first_name}</td>
                  {/* <input
                    type="text"
                    value={this.state.first_name}
                    // ohchange=
                  /> */}
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>{this.state.last_name}</td>
                  {/* <input
                    type="text"
                    value={this.state.last_name}
                    // ohchange=
                  /> */}
                </tr>
                <tr>
                  <td>Username</td>
                  <td>{this.state.username}</td>
                  {/* <input
                    type="text"
                    value={this.state.username}
                    // ohchange=
                  /> */}
                </tr>

                <tr>
                  <td>Email</td>
                  <td>{this.state.email}</td>
                  {/* <input
                    type="text"
                    value={this.state.email}
                    // ohchange=
                  /> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
