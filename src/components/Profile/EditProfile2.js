import React from "react";
import "../Components/App.css";
import Header from "../Components/Header";
import Profile from "./Profile1";
import EditProfile from "./EditProfile";

class EditProfile2 extends React.Component {
  render() {
    return (
      <div className="App ">
        <Profile />
        <Header />
        <EditProfile />
      </div>
    );
  }
}

export default EditProfile2;
