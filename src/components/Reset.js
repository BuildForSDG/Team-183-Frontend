import React from 'react';
import jwt_decode from 'jwt-decode';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { reset } from './UserFunctions';


class Reset extends React.Component {
  state = {
    email: '',
    // old_password: '',
    password: '',
    confirm: ''
  };

  getQueryParameter = (key) => {
    let url = new URL(window.location.href);
    return url.searchParams.get(key);
  }

  componentDidMount() {
    let token = this.getQueryParameter('key')
    if (token != null || undefined) {
      const decoded = jwt_decode(token);
      this.setState({
        // username: decoded.identity.username,
        email: decoded.identity.email
      });
    }
  }
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const resetUser = {
      email: this.state.email,
      password: this.state.password,
      confirm: this.state.confirm

    };
    reset(resetUser).then((res) => {
      if (res.data.message) {
        toast.success(`Message sent: ${res.data.message}`);
        setTimeout(() => this.props.history.push(`/login`), 5000);
      } else if (res.data.warning) {
        toast.warning(`Warning: ${res.data.warning}`);
        setTimeout(() => this.props.history.push(`/reset`), 5000);
      }
    });
  }

  render() {
    return (
      <div className="h-100" style={{ marginTop: '3rem' }}>
        <div className="container h-100">
          <div className="row justify-content-md-center align-items-center h-100">
            <div className="card-wrapper">
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Reset Password</h4>
                  <ToastContainer />
                  <form onSubmit={this.onSubmit} className="my-login-validation" noValidate="">
                    <div className="form-group">
                      <label htmlFor="new-password">New Password</label>
                      <input
                        id="new-password"
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter New Password"
                        value={this.state.password}
                        onChange={this.onChange}
                        required
                        autoFocus
                        data-eye
                      />
                      <div className="invalid-feedback">Password is required</div>
                      <div className="form-text text-muted">Make sure your password is strong and easy to remember</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirm_new-password">Confirm New Password</label>
                      <input
                        id="confirm_new-password"
                        type="password"
                        className="form-control"
                        name="confirm"
                        placeholder="Enter Password Again"
                        value={this.state.confirm}
                        onChange={this.onChange}
                        required
                        autoFocus
                        data-eye
                      />
                      <div className="invalid-feedback">Password is required</div>
                    </div>

                    <div className="form-group m-0">
                      <button type="submit" className="btn btn-primary btn-block">
                        Reset Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer text-center">Copyright &copy; 2020 &mdash; Chicken-Farm-ke</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Reset;
