import React from 'react';
import jwt_decode from 'jwt-decode';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from 'react-router-dom';

import NavBar from './NavBar_Profile';

import { edit_profile } from './UserFunctions';

class EditProfile extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    address: '',
    phone_number: '',

    city: '',
    country: '',
    postal_code: '',
    bio: '',

    // is_farmer: '',
    // is_vendor: '',
    is_farmer: 'false',
    is_vendor: 'true',

    // img_url: '',
    profile_completed: ''
  };

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.identity.first_name,
      last_name: decoded.identity.last_name,
      username: decoded.identity.username,
      address: decoded.identity.address,
      email: decoded.identity.email,
      phone_number: decoded.identity.phone_number,

      city: decoded.identity.city,
      country: decoded.identity.country,
      postal_code: decoded.identity.postal_code,
      bio: decoded.identity.bio,

      is_farmer: decoded.identity.is_farmer,
      is_vendor: decoded.identity.is_vendor,

      // image_url: decoded.identity.image_url,
      profile_completed: decoded.identity.profile_completed
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleToggle = () => {
    this.setState({
      is_farmer: !this.state.is_farmer,
      is_vendor: !this.state.is_vendor,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const user = {

      first_name: this.state.first_name ? this.state.first_name : '',
      last_name: this.state.last_name ? this.state.last_name : '',
      username: this.state.username ? this.state.username : '',
      address: this.state.address ? this.state.address : '',
      email: this.state.email ? this.state.email : '',
      phone_number: this.state.phone_number ? this.state.phone_number : '',

      city: this.state.city ? this.state.city : '',
      country: this.state.country ? this.state.country : '',
      postal_code: this.state.postal_code ? this.state.postal_code : '',
      bio: this.state.bio ? this.state.bio : '',

      is_farmer: this.state.is_farmer ? this.state.is_farmer : '',
      is_vendor: this.state.is_vendor ? this.state.is_vendor : '',

      // image: this.state.image,
      // image_url: this.state.image_url,
      // profile_completed: this.state.profile_completed
    };
    
    edit_profile(user).then((res) => {
      console.log(user)
      if (res.data.message) {
        toast.success(`Message sent: ${res.data.message}`);
        localStorage.setItem('usertoken', res.data.token);
        setTimeout(() => this.props.history.push(`/login`), 5000);
      } else if (res.data.warning) {
        toast.warning(`Warning: ${res.data.warning}`);
        setTimeout(() => this.props.history.push(`/edit_profile`), 5000);
      } else if (res.error) {
        // console.log(res.error);
        toast.error(`Message sent: ${res.error.data}`);
      }
    });
  };

  render() {
    return (
      <React.Fragment>
      <NavBar />
      <div className="container " style={{ margin: 'auto', fontSize: '2rem', background: '#ffb347' }}>
        
        <div className="card">
          <div className="card-header">
            <div className="row align-items-center">
              <div className="col-8">
                <h3 className="mb-0" style={{ color: 'orange' }}>
                  Edit profile
                </h3>
              </div>

              <form onSubmit={this.onSubmit} className="my-login-validation" noValidate="">

                <div className="col-4 text-right">
                  <button type="submit" className="btn btn-sm btn-primary">
                    Save Profile
                  </button>
                </div>


                
              </form>
              
            </div>
          </div>
          <div className="card-body">
            <ToastContainer />
            <form>
              
              <h6 className="heading-small text-muted mb-4">User information</h6>
              <div className="pl-lg-4">
                <div className="row">
{/* 
                  <div className="col-lg-6">
                    <div className="form-group"> */}
                      {/* <label className="form-control-label" for="input-username" style={{ color: 'orange' }}>
                        Username
                      </label>
                      <input
                        type="text"
                        id="input-username"
                        className="form-control"
                        placeholder="Username"
                        value={this.state.username}
                      /> */}
                      {/* <label for="img">Select image:</label>
                      <input type="file" id="image" name="image" accept="image/*" /> */}
                      {/* <input type="submit"></input> */}
                    {/* </div>
                  </div> */}

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label" for="input-username" style={{ color: 'orange' }}>
                        Username
                      </label>
                      <input
                        type="text"
                        id="input-username"
                        className="form-control"
                        placeholder="Username"
                        value={this.state.username}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label" for="input-email" style={{ color: 'orange' }}>
                        Email address
                      </label>
                      <input
                        type="email"
                        id="input-email"
                        className="form-control"
                        placeholder="salma@example.com"
                        value={this.state.email}
                        required
                        autoFocus
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label" for="input-first-name" style={{ color: 'orange' }}>
                        First name
                      </label>
                      <input
                        type="text"
                        id="input-first-name"
                        className="form-control"
                        placeholder="First name"
                        value={this.state.first_name}
                        name="first_name"
                        onChange={this.onChange}
                        required
                        autoFocus
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label" for="input-last-name" style={{ color: 'orange' }}>
                        Last name
                      </label>
                      <input
                        type="text"
                        id="input-last-name"
                        className="form-control"
                        placeholder="Last name"
                        value={this.state.last_name}
                        name="last_name"
                        onChange={this.onChange}
                        required
                        autoFocus
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <h6 className="heading-small text-muted mb-4">Contact information</h6>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-control-label" for="input-address" style={{ color: 'orange' }}>
                        Address
                      </label>
                      <input
                        id="input-address"
                        className="form-control"
                        placeholder="Home Address"
                        value={this.state.address}
                        type="text"
                        name="address"
                        onChange={this.onChange}
                        required
                        autoFocus
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label className="form-control-label" for="input-city" style={{ color: 'orange' }}>
                        City
                      </label>
                      <input
                        type="text"
                        id="input-city"
                        className="form-control"
                        placeholder="City"
                        value={this.state.city}
                        name="city"
                        onChange={this.onChange}
                        required
                        autoFocus
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label className="form-control-label" for="input-country" style={{ color: 'orange' }}>
                        Country
                      </label>
                      <input
                        type="text"
                        id="input-country"
                        className="form-control"
                        placeholder="Country"
                        value={this.state.country}
                        name="country"
                        onChange={this.onChange}
                        required
                        autoFocus
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label className="form-control-label" for="input-country" style={{ color: 'orange' }}>
                        Postal code
                      </label>
                      <input
                        type="number"
                        id="input-postal-code"
                        className="form-control"
                        placeholder="Postal code"
                        value={this.state.postal_code}
                        name="postal_code"
                        onChange={this.onChange}
                        required
                        autoFocus
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label className="form-control-label" for="input-country" style={{ color: 'orange' }}>
                        Postal code
                      </label>
                      <input
                        // type="number"
                        id="input-postal-code"
                        className="form-control"
                        placeholder="Phone number"
                        value={this.state.phone_number}
                        name="phone_number"
                        onChange={this.onChange}
                        required
                        autoFocus
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <h6 className="heading-small text-muted mb-4">Bio</h6>
              <div className="container">
                <div className="form-group">
                  <label className="form-control-label" style={{ color: 'orange' }}>
                    Description
                  </label>{' '}
                  <textarea
                    rows="4"
                    className="form-control"
                    placeholder="A few words about you ..."
                    value={this.state.bio}
                    name="bio"
                    onChange={this.onChange}
                    required
                    autoFocus
                  ></textarea>
                </div>
              </div>
              <h4 className="text-center text-muted p-2">Please answer this to help us to serve you better..</h4>

              <legend>Choose your user type!</legend>

              <div onChange={this.onChange}>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="p-2 form-check-input"
                      // defaultChecked
                      // value=""
                      value={this.state.is_vendor}
                      name="is_vendor"
                      onChange={this.handleToggle}
                      style={{ color: 'red' }}
                      // required
                      // autoFocus
                    />
                    Are you a vendor?
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="p-2 form-check-input"
                      value={this.state.is_farmer}
                      style={{ color: 'red' }}
                      name="is_farmer"
                      onChange={this.handleToggle}
                      // required
                      // autoFocus
                    />
                    Are you a customer?
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="footer text-center" style={{ color: 'black' }}>
          Copyright &copy; 2020 &mdash; Chicken-Farm-ke
        </div>
      </div>
      </React.Fragment>
    );
  }
}
export default withRouter(EditProfile);
