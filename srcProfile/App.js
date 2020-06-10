import React from "react";
import "./Components/App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import EditProfile from "./Components/EditProfile";

class App extends React.Component {
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

export default App;
