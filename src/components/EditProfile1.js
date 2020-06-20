import React from 'react';
import jwt_decode from 'jwt-decode';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import axios from 'axios';

// import NavBar from './NavBar_Profile';
import NavBar from './NavBar_Responsive';

import { edit_profile, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL } from './UserFunctions';

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

    user_type: '',
    is_farmer: '',
    is_vendor: '',
    // is_farmer: false,
    // is_vendor: false,

    files: [],
    uploadedFile: null,

    uploadedFileCloudinaryUrl: '',
    profile_completed: ''
  };

  componentDidMount() {
    const token = localStorage.getItem("usertoken");
    // const token = localStorage.usertoken;

    if (token) {
      const decoded = jwt_decode(token);
      this.setState({
        first_name: decoded.identity.first_name,
        last_name: decoded.identity.last_name,
        username: decoded.identity.username,
        email: decoded.identity.email,

        address: decoded.identity.address,
        phone_number: decoded.identity.phone_number,
        city: decoded.identity.city,
        country: decoded.identity.country,
        postal_code: decoded.identity.postal_code,

        bio: decoded.identity.bio,
        uploadedFileCloudinaryUrl: decoded.identity.image_url,

        is_farmer: decoded.identity.is_farmer,
        is_vendor: decoded.identity.is_vendor,
        profile_completed: decoded.identity.profile_completed

        // showComponent: false
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleToggle = () => {
    console.log(this.state.user_type);
    if (this.state.user_type === 'is_vendor') {
      this.setState({
        is_farmer: false,
        is_vendor: true
      });
    }

    console.log(this.state.user_type === 'is_farmer');
    if (this.state.user_type === 'is_farmer') {
      this.setState({
        is_farmer: true,
        is_vendor: false
      });
    }
  };

  onImageDrop = (files) => {
    this.setState({
      files: files.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      ),
      // files: files[0],
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  };

  handleImageUpload = async (file) => {
    const url = CLOUDINARY_UPLOAD_URL;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    try {
      let response = await axios.post(url, formData);

      // console.log(response);
      if (response.data.url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.data.url
        });
      }
    } catch (err) {
      console.log(err);
    }

    this.setState({ files: [] });
  };
  // }

  componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks
    this.state.files.forEach((file) => URL.revokeObjectURL(file.preview));
  }

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      first_name: this.state.first_name ? this.state.first_name : '',
      last_name: this.state.last_name ? this.state.last_name : '',
      username: this.state.username ? this.state.username : '',
      email: this.state.email ? this.state.email : '',

      phone_number: this.state.phone_number ? this.state.phone_number : '',
      address: this.state.address ? this.state.address : '',
      city: this.state.city ? this.state.city : '',
      country: this.state.country ? this.state.country : '',
      postal_code: this.state.postal_code ? this.state.postal_code : '',

      bio: this.state.bio ? this.state.bio : '',
      image_url: this.state.uploadedFileCloudinaryUrl ? this.state.uploadedFileCloudinaryUrl : '',

      // user_type: this.state.user_type,
      is_farmer: this.state.is_farmer,
      is_vendor: this.state.is_vendor
      // profile_completed: this.state.profile_completed
    };

    edit_profile(user).then((res) => {
      console.log(user);
      if (res.data.message) {
        toast.success(`Message: ${res.data.message}`);
        localStorage.setItem('usertoken', res.data.token);
        setTimeout(() => this.props.history.push(`/login`), 5000);
      } else if (res.data.warning) {
        toast.warning(`Warning: ${res.data.warning}`);
        setTimeout(() => this.props.history.push(`/edit_profile`), 5000);
      } else if (res.error) {
        // console.log(res.error);
        toast.error(`Message: ${res.error.data}`);
      }
    });
  };

  render() {
    const previewStyle = {
      display: 'inline',
      width: 100,
      height: 100
    };

    const { files } = this.state;
    const thumbs = files.map((file) => (
      <div className="thumb" key={file.name}>
        <div className="thumbInner">
          <img alt="" src={file.preview} className="img kv-avatar col-sm-4 text-center" />
        </div>
      </div>
    ));

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
                  <div className="col-12 text-right">
                    <button type="submit" className="btn btn-sm btn-primary">
                      Save Profile
                    </button>
                  </div>
                </form>

                <section>
                  <Dropzone onDrop={this.onImageDrop} accept="image/*">
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />

                        <div className="kv-avatar-hint drop-area">
                          <i className="glyphicon glyphicon-tag"></i>
                          <h6 className="text-muted">Drop an image or Click here to select a file to upload.</h6>
                        </div>
                      </div>
                    )}
                  </Dropzone>
                  <aside className="thumbsContainer">{thumbs}</aside>

                  <div>
                    {this.state.uploadedFileCloudinaryUrl === '' ? null : (
                      <div>
                        {/* <p>{this.state.uploadedFileCloudinaryUrl.name}</p> */}
                        <img alt="Preview" src={this.state.uploadedFileCloudinaryUrl} style={previewStyle} />
                        <h6 className="text-muted">My Profile Preview</h6>
                      </div>
                    )}
                  </div>
                </section>
              </div>
            </div>
            <div className="card-body">
              <ToastContainer />
              <form>
                <h6 className="heading-small text-muted mb-4">User information</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-username" style={{ color: 'orange' }}>
                          Username <span className="kv-reqd">*</span>
                        </label>
                        <input
                          type="text"
                          id="input-username"
                          className="form-control"
                          placeholder="Username"
                          value={this.state.username}
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-email" style={{ color: 'orange' }}>
                          Email address <span className="kv-reqd">*</span>
                        </label>
                        <input
                          type="email"
                          id="input-email"
                          className="form-control"
                          placeholder="salma@example.com"
                          value={this.state.email}
                          required
                          autoFocus
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-first-name" style={{ color: 'orange' }}>
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
                        <label className="form-control-label" htmlFor="input-last-name" style={{ color: 'orange' }}>
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
                        <label className="form-control-label" htmlFor="input-address" style={{ color: 'orange' }}>
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
                        <label className="form-control-label" htmlFor="input-city" style={{ color: 'orange' }}>
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
                        <label className="form-control-label" htmlFor="input-country" style={{ color: 'orange' }}>
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
                        <label className="form-control-label" htmlFor="input-country" style={{ color: 'orange' }}>
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
                        <label className="form-control-label" htmlFor="input-country" style={{ color: 'orange' }}>
                          Phone number
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

                <div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        // type="checkbox"

                        className="p-2 form-check-input"
                        // defaultChecked
                        // value=""
                        // value={this.state.is_vendor}
                        value="is_vendor"
                        name="user_type"
                        onClick={this.handleToggle}
                        onChange={this.onChange}
                        // style={{ color: 'red' }}
                        // checked={this.state.showComponent}
                        checked={this.state.is_vendor}

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
                        // type="checkbox"
                        className="p-2 form-check-input"
                        // value={this.state.is_farmer}
                        value="is_farmer"
                        // style={{ color: 'green' }}
                        name="user_type"
                        onClick={this.handleToggle}
                        onChange={this.onChange}
                        // checked={this.state.showComponent}
                        checked={this.state.is_farmer}

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
