import logo from "./pozaprofil.jpg";
import { MainMenu } from "../menu/MainMenu";

export default function AppHeader() {
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
