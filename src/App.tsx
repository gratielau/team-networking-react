import React from "react";
import logo from "./logo.svg";
import "./App.css";

function AppHeader() {
  return (
    <div>
      <button id="removeSelected">Remove selected</button>
      <input type="search" name="search" id="search" />
    </div>
  );
}

function MainMenu() {
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#" data-page="home">
          HOME
        </a>
      </li>
      <li>
        <a href="#" data-page="skills">
          Skills
        </a>
      </li>
      <li>
        <a href="#" data-page="projects">
          Projects
        </a>
      </li>
      <li>
        <a href="#" data-page="languages">
          Languages
        </a>
      </li>
    </ul>
  );
}

function SideMenu() {
  return (
    <div id="side-menu">
      <section id="firs-section">
        <form action="" method="post">
          <h3>Contact Form</h3>
          <label htmlFor="userEmail">Email:</label>
          <input type="email" name="email" id="userEmail" placeholder="example.@me.com" required />
          <label htmlFor="userName"> Name:</label>
          <input type="text" id="userName" name="Name" placeholder="please enter your name" required />
          <label>Message:</label>
          <textarea></textarea>
          <div id="send-button-div">
            <button type="submit" id="send-button">
              <img src="pictures/send.png" width="16px" height="16px" />
              <b>SEND</b>
            </button>
          </div>
        </form>
      </section>
      <section id="second-section"></section>
    </div>
  );
}
function App() {
  return (
    <div>
      <AppHeader />
      <MainMenu />
      <SideMenu />
    </div>
  );
}
function App_old() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
