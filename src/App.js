import React from "react";
import "./App.css";
import Nav_Bar from "./components/Nav_Bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav_Bar />
      </Router>
    </div>
  );
}

export default App;
