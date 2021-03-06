import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <ul className="navbar-nav align-items-center ml-auto ml-md-0 d-flex align-items-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link pr-0"
              href="/profile"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="media align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt=""
                    // alt="Image placeholder"
                    style={{ height: "35", width: "10" }}
                    src="data:image/jpeg;base64,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"
                  />
                </span>
                <div className="media-body ml-2 d-none d-lg-block">
                  <span className="mb-0 text-sm font-weight-bold">Salma</span>
                </div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-single-02"></i> <span>My profile</span>{" "}
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-settings-gear-65"></i> <span>Settings</span>{" "}
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-calendar-grid-58"></i> <span>Activity</span>{" "}
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-support-16"></i> <span>Support</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="/profile" className="dropdown-item">
                <i className="ni ni-user-run"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default Profile;
