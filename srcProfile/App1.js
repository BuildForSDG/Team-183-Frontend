import React, { useState } from "react";
import "./Components/App.css";
import Search from "./Components/Search";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Progress from "./Components/Progress";
import EditProfile from "./Components/EditProfile";


function App1() {
//   const [userQuery, setUserQuery] = useState("");
//   const updateUserQuery = (event) => {
//     setUserQuery(event.target.value);
//     console.log(userQuery);
//   };
//   const searchQuery = () => {
//     window.open(`https://www.google.com/?q=${userQuery}`, "_blank");
//   };
//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       searchQuery();
//     }
//   };
  return (
//     <div className="container " style={{ marginTop: "1.5rem" }}>
//       <div className="form d-flex  " style={{ margin: "auto" }}>
//         <input
//           value={userQuery}
//           onChange={updateUserQuery}
//           onKeyPress={handleKeyPress}
//           style={{
//             border: "2px solid orange",

//             width: "80%",
//           }}
//         />
//         <button
//           onClick={searchQuery}
//           className="btn text-white btn-block btn-primary"
//           style={{ width: "20%" }}
//         >
//           search
//         </button>
//       </div>
      <Search />
      <Profile />
      <Header />
      <Progress />
      <EditProfile />
  //    </div>
  );
};

export default App1;
