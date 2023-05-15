import { SideMenu } from "../menu/SideMenu";
import { TeamsTable, TeamsTableWrapper } from "../teams/TeamsTable";

export function ContentWrapper() {
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
        <div className="page" id="teams" style={{ display: "block" }}>
          <TeamsTableWrapper />
        </div>
        <div className="page" id="projects">
          <div className="container">
            <table>
              <tbody className="text-align: center">
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
              </tbody>
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
