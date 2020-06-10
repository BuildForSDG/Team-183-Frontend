import React from "react";
import "./Components/App.css";
import Header from "./Components/Header1";
import Profile from "./Profile1";
import EditProfile from "./EditProfile1";

class App2 extends React.Component {
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

export default App2;
