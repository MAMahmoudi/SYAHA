import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav_Bar.css";

class Nav_Bar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            SYAHA
          </Link>
        </div>
      </nav>
    );
  }
}
