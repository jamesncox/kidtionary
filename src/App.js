import React from "react";
import "./styles.css";
import "./responsive.css"
import Container from "./Container"

export default function App() {
  return (
    <div className="App">

      {/* <div class="theme-switch-wrapper">
        <label class="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <div class="slider round"></div>
        </label>
        <em>Enable Dark Mode</em>
      </div> */}

      <h1>Kidtionary</h1>
      <Container />
    </div>
  );
}
