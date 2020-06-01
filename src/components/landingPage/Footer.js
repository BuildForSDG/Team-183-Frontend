import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className=" py-5 bg-light mb-0">
          <ol className="px-0 ">
            <li>
              <a href="https://www.facebook.com/ ">
                <i className="fab fa-facebook "></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/ ">
                <i className="fab fa-twitter "></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ ">
                <i className="fab fa-instagram "></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/ ">
                <i className="fab fa-linkedin-in "></i>
              </a>
            </li>
          </ol>
        </footer>
      </div>
    );
  }
}
export default Footer;
