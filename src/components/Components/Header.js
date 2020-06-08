import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="container d-flex align-items-center bg-dark">
        <div className="row">
          <div className="col-lg-7 col-md-10">
            <h1 className="display-2 text-white">Hello Salma</h1>
            <p className="text-white mt-0 mb-5">
              This is your profile page. You can see the progress you've made
              with your work and manage your projects or assigned tasks
            </p>
            <button href="#" className="btn btn-neutral text-white text-center">
              Edit profile
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
