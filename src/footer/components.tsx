import linkedin from "./linkedin.png";
import git from "./github.png";
import youtube from "./youtube.png";
import "./style.css";

export function AppFooter() {
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
