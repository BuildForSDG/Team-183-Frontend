import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-top navbar-expand navbar-dark border-bottom"
          style={{ background: "orange" }}
        >
          <div className="container">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form
                className="navbar-search navbar-search-light form-inline mr-sm-3"
                id="navbar-search-main"
                style={{
                  float: "left",
                  alignItems: "flex-start",
                  width: "80%",
                }}
              >
                <div className="form-group mb-0">
                  <div className="input-group input-group-alternative input-group-merge">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-search"></i>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Search"
                      type="text"
                    />
                  </div>
                </div>
              </form>

              <ul
                className="navbar-nav  ml-auto ml-md-0"
                style={{
                  float: "right",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <li className="nav-item dropdown">
                  <a
                    className="nav-link pr-0"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="media ">
                      <span className="avatar avatar-sm rounded-circle">
                        <img
                          alt="Image placeholder"
                          src="https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914__340.png"
                          style={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      </span>
                      <div className="media-body ml-2 d-none d-lg-block">
                        <span className="mb-0 text-sm font-weight-bold">
                          Salma
                        </span>
                      </div>
                    </div>
                  </a>

                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-header noti-title">
                      <h6 className="text-overflow m-0">Welcome!</h6>
                    </div>
                    <a href="#!" className="dropdown-item">
                      <i className="ni ni-single-02"></i>{" "}
                      <span>My profile</span>{" "}
                    </a>
                    <a href="#!" className="dropdown-item">
                      <i className="ni ni-settings-gear-65"></i>{" "}
                      <span>Settings</span>{" "}
                    </a>
                    <a href="#!" className="dropdown-item">
                      <i className="ni ni-calendar-grid-58"></i>{" "}
                      <span>Activity</span>{" "}
                    </a>
                    <a href="#!" className="dropdown-item">
                      <i className="ni ni-support-16"></i> <span>Support</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#!" className="dropdown-item">
                      <i className="ni ni-user-run"></i> <span>Logout</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Profile;
