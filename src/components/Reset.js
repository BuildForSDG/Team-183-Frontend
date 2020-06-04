import React from 'react';
// import {Link} from 'react-router-dom'

class Reset extends React.Component {
  render() {
    return (
      <div className="h-100" style={{ marginTop: '3rem' }}>
        <div className="container h-100">
          <div className="row justify-content-md-center align-items-center h-100">
            <div className="card-wrapper">
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Reset Password</h4>
                  <form method="POST" className="my-login-validation" novalidate="">
                    <div className="form-group">
                      <label htmlFor="new-password">New Password</label>
                      <input
                        id="new-password"
                        type="password"
                        className="form-control"
                        name="password"
                        required
                        autofocus
                        data-eye
                      />
                      <div className="invalid-feedback">Password is required</div>
                      <div className="form-text text-muted">Make sure your password is strong and easy to remember</div>
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
