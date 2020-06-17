import React from 'react';
// import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { forgot } from './UserFunctions';

class Forgot extends React.Component {
  state = {
    email: '',
    // url: ''

  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

//   getUrlHost = () => {
//     let url = new URL(window.location.host);
//     return url;
//   }

//   componentDidMount() {
//     let url = this.getUrl()
//     if (url != null || undefined) {
//       this.setState({
//         url: url
//       });
//     }
//   }

  onSubmit = (e) => {
    e.preventDefault();

    const forgotUser = {
      email: this.state.email,
    //   url: this.state.url,
    };

    forgot(forgotUser).then((res) => {
      if (res.data.message) {
        toast.success(`Message: ${res.data.message}`);
        setTimeout(() => this.props.history.push(`/login`), 5000);
      } else if (res.data.warning) {
        toast.warning(`Warning: ${res.data.warning}`);
        setTimeout(() => this.props.history.push(`/forgot`), 5000);
      }
    });
  };

  render() {
    return (
      <div className="container justify-content-center align-items-center d-flex h-100" style={{ marginTop: '3rem' }}>
        <div className="card fat">
          <div className="card-body">
            <h4 className="card-title">Forgot Password</h4>
            <ToastContainer />
            <form onSubmit={this.onSubmit} className="my-login-validation" noValidate="">
              <div className="form-group">
                <label htmlFor="email">E-Mail Address</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Your E-mail"
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                  autoFocus
                />
                <div className="invalid-feedback">Email is invalid</div>
                <div className="form-text text-muted">
                  By clicking "Reset Password" we will send a password reset link
                </div>
              </div>

              <div className="form-group m-0">
                    <button type="submit" className="btn btn-primary btn-block">
                    Forgot Password
                    </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Forgot;
