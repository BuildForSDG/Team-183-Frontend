import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { login } from './UserFunctions';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    login(user).then((res) => {
      if (res.data.message) {
        toast.success(`Message: ${res.data.message}`);
        localStorage.setItem('usertoken', res.data.token);
        setTimeout(() => this.props.history.push(`/edit_profile`), 5000);
      } else if (res.data.warning) {
        toast.warning(`Warning: ${res.data.warning}`);
        setTimeout(() => this.props.history.push(`/login`), 5000);
      } else if (res.error) {
        // console.log(res.error);
        toast.error(`Message: ${res.error.data}`);
      }
    });
  };

  render() {
    return (
      <div className="container h-100" style={{ marginTop: '6rem' }}>
        <div className="row d-flex  justify-content-center h-100">
          <div className="card-wrapper">
            {/* <div className="previewStyle">
                <img src="http://res.cloudinary.com/daniel2019/image/upload/v1592360735/snpvgk0lottbyu224ebx.png" alt="" />
              </div> */}

            <div className="card fat mb-3">
              <div className="card-body">
                <h4 className="card-title">Login</h4>
                <ToastContainer />
                <form onSubmit={this.onSubmit} className="my-login-validation" noValidate="">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter Email"
                      value={this.state.email}
                      onChange={this.onChange}
                      required
                      autoFocus
                    />
                    {/* <div className="invalid-feedback">Email is invalid</div> */}
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password </label>
                    <Link to="/Forgot" className="float-right d-flex justify-content-around">
                      Forgot Password?
                    </Link>

                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter Password"
                      value={this.state.password}
                      onChange={this.onChange}
                      required
                      data-eye
                    />
                    {/* <div className="invalid-feedback">Password is required</div> */}
                  </div>

                  <div className="form-group">
                    <div className="custom-checkbox custom-control">
                      <input type="checkbox" name="remember" id="remember" className="custom-control-input" />
                      <label htmlFor="remember" className="custom-control-label">
                        Remember Me
                      </label>
                    </div>
                  </div>

                  <div className="form-group m-0">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>

                  <div className="mt-4 text-center">
                    Don't have an account? <Link to="/Signup">Create One</Link>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="footer text-center"
              style={{
                background: 'black',
                padding: '2rem',
                color: 'orange',
                marginTop: '-14px'
              }}
            >
              Copyright &copy; 2020 &mdash; Chicken-Farm-ke
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
