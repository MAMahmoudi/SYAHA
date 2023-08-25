import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav_Bar.css";
import { Menu_Items } from "./Menu_Items";

class Nav_Bar extends React.Component {
  state = { clicked: false };
  handle_click = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="Nav_Bar_Items">
        <div className="Menu_Icon" onClick={this.handle_click}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <h1 className="Nav_Bar_Logo">سياحة</h1>

        <ul className="Nav_Bar_Menu">
          {Menu_Items.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <span>{item.title}</span>
                  <i className={item.icon}></i>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Nav_Bar;
