import React from "react";
class EditProfile extends React.Component {
  render() {
    return (
      <div
        className="container "
        style={{ margin: "auto", background: "#ffb347" }}

      >
        <div className="card">
          <div className="card-header">
            <div className="row align-items-center">
              <div className="col-8">
                <h3 className="mb-0" style={{ color: "orange" }}>
                  Edit profile
                </h3>
              </div>
              <div className="col-4 text-right ">
                <button type="submit" className="btn btn-sm btn-primary card1">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <form>
              <h6 className="heading-small text-muted mb-4">
                User information
              </h6>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label

                        className="form-control-label"
                        htmlFor="input-username"
                        style={{ color: "orange" }}
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="input-username"
                        className="form-control"
                        placeholder="Username"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                        style={{ color: "orange" }}
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="input-email"
                        className="form-control"
                        placeholder="salma@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="input-first-name"
                        style={{ color: "orange" }}
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="input-first-name"
                        className="form-control"
                        placeholder="First name"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="input-last-name"
                        style={{ color: "orange" }}
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="input-last-name"
                        className="form-control"
                        placeholder="Last name"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <h6 className="heading-small text-muted mb-4">
                Contact information
              </h6>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="input-address"
                        style={{ color: "orange" }}
                      >
                        Address
                      </label>
                      <input
                        id="input-address"
                        className="form-control"
                        placeholder="Home Address"
                        value=""
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="input-city"
                        style={{ color: "orange" }}
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="input-city"
                        className="form-control"
                        placeholder="City"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                        style={{ color: "orange" }}
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        id="input-country"
                        className="form-control"
                        placeholder="Country"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                        style={{ color: "orange" }}
                      >
                        Postal code
                      </label>
                      <input
                        type="number"
                        id="input-postal-code"
                        className="form-control"
                        placeholder="Postal code"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <h6 className="heading-small text-muted mb-4">Bio</h6>
              <div className="pl-lg-4">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    style={{ color: "orange" }}
                  >
                    Description
                  </label>{" "}
                  <textarea
                    rows="4"
                    className="form-control"
                    placeholder="A few words about you ..."
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default EditProfile;
