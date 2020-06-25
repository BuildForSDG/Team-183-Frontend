import React, { Component } from "react";
import "./NewProfile.css";
export default class NewProfile extends Component {
  // state = {
  //     first_name: "",
  //     last_name: "",
  //     username: "",
  //     email: "",
  //     address: "",
  //     phone_number: "",

  //     city: "",
  //     country: "",
  //     postal_code: "",
  //     bio: "",

  //     user_type: "",
  //     is_farmer: "",
  //     is_vendor: "",
  //     // is_farmer: false,
  //     // is_vendor: false,

  //     files: [],
  //     uploadedFile: null,

  //     uploadedFileCloudinaryUrl: "",
  //     profile_completed: "",
  //   };

  //   componentDidMount() {
  //     const token = localStorage.getItem("usertoken");
  //     // const token = localStorage.usertoken;

  //     if (token) {
  //       const decoded = jwt_decode(token);
  //       this.setState({
  //         first_name: decoded.identity.first_name,
  //         last_name: decoded.identity.last_name,
  //         username: decoded.identity.username,
  //         email: decoded.identity.email,

  //         address: decoded.identity.address,
  //         phone_number: decoded.identity.phone_number,
  //         city: decoded.identity.city,
  //         country: decoded.identity.country,
  //         postal_code: decoded.identity.postal_code,

  //         bio: decoded.identity.bio,
  //         uploadedFileCloudinaryUrl: decoded.identity.image_url,

  //         is_farmer: decoded.identity.is_farmer,
  //         is_vendor: decoded.identity.is_vendor,
  //         profile_completed: decoded.identity.profile_completed,

  //         // showComponent: false
  //       });
  //     }
  //   }

  //   onChange = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  //   handleToggle = () => {
  //     console.log(this.state.user_type);
  //     if (this.state.user_type === "is_vendor") {
  //       this.setState({
  //         is_farmer: false,
  //         is_vendor: true,
  //       });
  //     }

  //     console.log(this.state.user_type === "is_farmer");
  //     if (this.state.user_type === "is_farmer") {
  //       this.setState({
  //         is_farmer: true,
  //         is_vendor: false,
  //       });
  //     }
  //   };

  //   onImageDrop = (files) => {
  //     this.setState({
  //       files: files.map((file) =>
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file),
  //         })
  //       ),
  //       // files: files[0],
  //       uploadedFile: files[0],
  //     });

  //     this.handleImageUpload(files[0]);
  //   };

  //   handleImageUpload = async (file) => {
  //     const url = CLOUDINARY_UPLOAD_URL;

  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  //     try {
  //       let response = await axios.post(url, formData);

  //       // console.log(response);
  //       if (response.data.url !== "") {
  //         this.setState({
  //           uploadedFileCloudinaryUrl: response.data.url,
  //         });
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }

  //     this.setState({ files: [] });
  //   };
  //   // }

  //   componentWillUnmount() {
  //     // Make sure to revoke the data uris to avoid memory leaks
  //     this.state.files.forEach((file) => URL.revokeObjectURL(file.preview));
  //   }

  //   onSubmit = (e) => {
  //     e.preventDefault();

  //     const user = {
  //       first_name: this.state.first_name ? this.state.first_name : "",
  //       last_name: this.state.last_name ? this.state.last_name : "",
  //       username: this.state.username ? this.state.username : "",
  //       email: this.state.email ? this.state.email : "",

  //       phone_number: this.state.phone_number ? this.state.phone_number : "",
  //       address: this.state.address ? this.state.address : "",
  //       city: this.state.city ? this.state.city : "",
  //       country: this.state.country ? this.state.country : "",
  //       postal_code: this.state.postal_code ? this.state.postal_code : "",

  //       bio: this.state.bio ? this.state.bio : "",
  //       image_url: this.state.uploadedFileCloudinaryUrl
  //         ? this.state.uploadedFileCloudinaryUrl
  //         : "",

  //       // user_type: this.state.user_type,
  //       is_farmer: this.state.is_farmer,
  //       is_vendor: this.state.is_vendor,
  //       // profile_completed: this.state.profile_completed
  //     };

  //     edit_profile(user).then((res) => {
  //       console.log(user);
  //       if (res.data.message) {
  //         toast.success(`Message: ${res.data.message}`);
  //         localStorage.setItem("usertoken", res.data.token);
  //         setTimeout(() => this.props.history.push(`/login`), 5000);
  //       } else if (res.data.warning) {
  //         toast.warning(`Warning: ${res.data.warning}`);
  //         setTimeout(() => this.props.history.push(`/edit_profile`), 5000);
  //       } else if (res.error) {
  //         // console.log(res.error);
  //         toast.error(`Message: ${res.error.data}`);
  //       }
  //     });
  //   };
  render() {
    return (
      // const previewStyle = {
      //     display: "inline",
      //     width: 100,
      //     height: 100,
      //   };

      //   const { files } = this.state;
      //   const thumbs = files.map((file) => (
      //     <div className="thumb" key={file.name}>
      //       <div className="thumbInner">
      //         <img
      //           alt=""
      //           src={file.preview}
      //           className="img kv-avatar col-sm-4 text-center"
      //         />
      //       </div>
      //     </div>
      //   ));
      // <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="portlet light profile-sidebar-portlet bordered">
              <div className="profile-userpic">
                {/* <img src={} className="img-responsive" alt=""/> </div> */}
                <div className="profile-usertitle">
                  <div className="profile-usertitle-name"> salma mohamed </div>
                  <div className="profile-usertitle-job"> Developer </div>
                </div>
                <div className="profile-userbuttons">
                  <button type="button" className="btn btn-info  btn-sm">
                    Follow
                  </button>
                  <button type="button" className="btn btn-info  btn-sm">
                    Message
                  </button>
                </div>
                <div className="profile-usermenu">
                  <ul className="nav">
                    <li className="active">
                      <a href="#">
                        <i className="icon-home"></i> Ticket List{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-settings"></i> Support Staff{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-info"></i> Configurations{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="portlet light bordered">
                <div className="portlet-title tabbable-line">
                  <div className="caption caption-md">
                    <i className="icon-globe theme-font hide"></i>
                    <span className="caption-subject font-blue-madison bold uppercase">
                      Your info
                    </span>
                  </div>
                </div>
                <div className="portlet-body">
                  <div>
                    <ul className="nav nav-tabs" role="tablist">
                      <li role="presentation" className="active ">
                        <a
                          href="#home"
                          className=" p-2"
                          aria-controls="home"
                          role="tab"
                          data-toggle="tab"
                        >
                          Update
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#profile"
                          aria-controls="profile"
                          role="tab"
                          data-toggle="tab"
                          className=" p-2"
                        >
                          Profile
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#messages"
                          aria-controls="messages"
                          role="tab"
                          data-toggle="tab"
                          className=" p-2"
                        >
                          Messages
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#settings"
                          aria-controls="settings"
                          role="tab"
                          data-toggle="tab"
                          className=" p-2"
                        >
                          Settings
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div
                        role="tabpanel"
                        className="tab-pane active"
                        id="home"
                      >
                        <form>
                          <div className="form-group">
                            <label for="inputName">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputName"
                              placeholder="Name"
                            />
                          </div>
                          <div className="form-group">
                            <label for="inputLastName">Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputLastName"
                              placeholder="Last Name"
                            />
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail1">
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Email"
                            />
                          </div>
                          <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Password"
                            />
                          </div>
                          <div className="form-group">
                            <label for="exampleInputFile">File input</label>
                            <input type="file" id="exampleInputFile" />
                            <p className="help-block">
                              Example block-level help text here.
                            </p>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" /> Check me out
                            </label>
                          </div>
                          <button type="submit" className="btn btn-default">
                            Submit
                          </button>
                        </form>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="profile">
                        Profile
                      </div>
                      <div role="tabpanel" className="tab-pane" id="messages">
                        Messages
                      </div>
                      <div role="tabpanel" className="tab-pane" id="settings">
                        Settings
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
