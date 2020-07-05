import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer" style={{ marginTop: '-250px' }}>
        <div className="pb-2">
          <ol className="px-0">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100007706285441 ">
                <i className="fab fa-facebook "></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/salma12221348">
                <i className="fab fa-twitter "></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/szaki_creative_thinkers/ ">
                <i className="fab fa-instagram "></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/salma-mohamed-4b991115a/">
                <i className="fab fa-linkedin-in "></i>
              </a>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Footer;
