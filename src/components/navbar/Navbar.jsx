import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <label className="my-name">EC</label>
      <div className="nav-container">
        <ul>
          <li>
            <Link to={"/"} className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to={"/projects"} className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1cC7edbc-2SpyTRRYERvH2puoWdqHZ1t9/edit"
              target="_blank"
              className="nav-link"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
