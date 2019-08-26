import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <i className="fab fa-autoprefixer" />
        </div>

        <div className="headerList">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
