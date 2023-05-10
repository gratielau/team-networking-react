import React from "react";
import logo from "./pictures/pozaprofil.jpg";
import linkedin from "./pictures/linkedin.png";
import git from "./pictures/github.png";
import youtube from "./pictures/youtube.png";
import send from "./pictures/send.png";
import "./App.css";

function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div>
          <img src={logo} alt="poza" id="profil-picture" height="100" />
        </div>
        <div>
          <h1>Gratiela Uivari</h1>
          <h2 id="job-title">Programator</h2>
        </div>
      </div>
      <MainMenu />
    </header>
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
              <img src={send} width="16px" height="16px" />
              <b>SEND</b>
            </button>
          </div>
        </form>
      </section>
      <section id="second-section"></section>
    </div>
  );
}

function AppFooter() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/gratiela-uivari-651336270/" target="_blank">
            <img height="30px" width="60px" src={linkedin} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank">
            <img height="30px" src={youtube} />
          </a>
        </li>
        <li>
          <a href="https://github.com/gratielau" target="_blank">
            <img height="30px" src={git} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

function ContentWrapper() {
  return (
    <section id="content">
      <SideMenu></SideMenu>
      <div id="main">
        <div className="page" id="home">
          Home content ...
        </div>
        <div className="page" id="skills">
          <h2>Skills & Endorcements</h2>
          <ul></ul>
        </div>
        <div className="page" id="projects">
          <div className="container">
            <table className="text-align: center">
              <tr>
                <td>
                  <h2>Your score:</h2>
                </td>
                <td></td>
                <td>
                  <h2>Time Left:</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h2 id="score">0</h2>
                </td>
                <td>
                  <button type="button" id="btnStart">
                    Start
                  </button>
                </td>
                <td>
                  <h2 id="time-left">30</h2>
                </td>
              </tr>
            </table>

            <div className="grid">
              <div className="square" id="1"></div>
              <div className="square" id="2"></div>
              <div className="square" id="3"></div>
              <div className="square" id="4"></div>
              <div className="square" id="5"></div>
              <div className="square" id="6"></div>
              <div className="square" id="7"></div>
              <div className="square" id="8"></div>
              <div className="square" id="9"></div>
            </div>
          </div>
        </div>
        <div className="page" id="languages">
          Languages content...
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </>
  );
}

export default App;
