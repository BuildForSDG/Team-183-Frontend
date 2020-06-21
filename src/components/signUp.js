import React from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { register } from "./UserFunctions";

class Signup extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm: "",
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      confirm: this.state.confirm,
      email: this.state.email,
      password: this.state.password,
    };

    register(newUser).then((res) => {
      if (res.data.message) {
        toast.success(`Message: ${res.data.message}`);
        // localStorage.setItem("usertoken", res.data.token);
        setTimeout(() => this.props.history.push(`/login`), 5000);
      } else if (res.data.warning) {
        toast.warning(`Warning: ${res.data.warning}`);
        setTimeout(() => this.props.history.push(`/signup`), 5000);
      }
    });
  };

  render() {
    return (
      <div className="h-100" style={{ marginTop: "3rem" }}>
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="card fat mb-3">
                <div className="card-body">
                  <h4 className="card-title">Sign Up</h4>
                  <ToastContainer />
                  <form
                    className="my-login-validation"
                    onSubmit={this.onSubmit}
                    noValidate=""
                  >
                    <div className="form-group">
                      <label htmlFor="username">UserName</label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Enter UserName"
                        value={this.state.username}
                        onChange={this.onChange}
                        required
                        autoFocus
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>

                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.onChange}
                        required
                        autoFocus
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Confirm Password </label>
                      <input
                        type="password"
                        className="form-control"
                        name="confirm"
                        placeholder="Enter Password Again"
                        value={this.state.confirm}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="form-group">
                      <div className="custom-checkbox custom-control">
                        <input
                          type="checkbox"
                          name="agree"
                          id="agree"
                          className="custom-control-input"
                          required=""
                        />
                        <label htmlFor="agree" className="custom-control-label">
                          I agree to the <a href="/">Terms and Conditions</a>
                        </label>
                      </div>
                    </div>

                    <div className="form-group m-0">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Sign Up
                      </button>
                    </div>

                    <div className="mt-4 text-center">
                      Already have an account? <Link to="/Login">Login</Link>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="footer text-center"
                style={{
                  background: "black",
                  padding: "2rem",
                  color: "orange",
                  marginTop: "-14px",
                }}
              >
                Copyright &copy; 2020 &mdash; Chicken-Farm-ke
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
