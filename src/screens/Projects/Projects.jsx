import "./Projects.css";
import calculater from "../../images/Calculator.png";
import gif from "../../images/gif.png";
import rps from "../../images/rock-paper-scissors.png";
import shop from "../../images/shop.png";
import simonsays from "../../images/simonsays.png";
import vidster from "../../images/vidster.png";

function Projects() {
  return (
    <div className="projects-section">
      <div className="card">
        <div className="card-header">
          <img src={shop} alt="shop app logo" />
        </div>
        <div className="card-body">
          <h4>E-commerce sports shop</h4>
          <span className="tag">Tech stack</span>
          <p>Python, Django, PSQL, HTML, and CSS</p>
          <p>This allows users to buy athletic products.</p>
          <div className="live-github">
            <button className="project-live-btn">
              <a
                href="https://ed-shop.herokuapp.com"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </button>
            <button className="project-github-btn">
              <a
                href="https://github.com/CabralE/shop-product"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src={vidster} alt="vidster app logo" />
        </div>
        <div className="card-body">
          <h4>Vidster</h4>
          <span className="tag">Tech stack</span>
          <p>MongoDB, Express, React, Node.js, HTML, and CSS</p>
          <p>
            A web sharing application that allows users to create, update, and
            delete playlists. In addition, they may search for videos to add to
            their playlist using the built-in Youtube API.
          </p>
          <span class="live-github">
            <button className="project-live-btn">
              <a
                href="https://vplaylist-client-2.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </button>
            <button className="project-github-btn">
              <a
                href="https://github.com/CabralE/Vplaylist-client-2"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </button>
          </span>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src={gif} alt="gif app logo" />
        </div>
        <div className="card-body">
          <h4>Giphy</h4>
          <span class="tag">Tech stack</span>
          <p>HTML,CSS, and JavaScript(jQuery)</p>
          <p>
            A giphy genarator. Enter anything in the search bar, then watch
            giphy regarding your search appear!
          </p>
          <span className="live-github">
            <button className="project-live-btn">
              <a
                href="https://ed-gifs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </button>
            <button className="project-github-btn">
              <a
                href="https://github.com/CabralE/Giphy-Project"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </button>
          </span>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src={calculater} alt="calculator app logo" />
        </div>
        <div className="card-body">
          <h4>Calculator</h4>
          <span className="tag">Tech stack</span>
          <p>HTML,CSS, and JavaScript</p>
          <p>A standard calculator</p>
          <span className="live-github">
            <button className="project-live-btn">
              <a
                href="https://ec-calculator.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </button>
            <button className="project-github-btn">
              <a
                href="https://github.com/CabralE/Calculator"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </button>
          </span>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src={rps} alt="rock-paper-scisscor app logo" />
        </div>
        <div className="card-body">
          <h4>Rock-Paper-Scissors</h4>
          <span className="tag">Tech stack</span>
          <p>HTML,CSS, and JavaScript</p>
          <p>rock-paper-scissors agaisnt cpu</p>
          <span className="live-github">
            <button className="project-live-btn">
              <a
                href="https://ec-rock-paper-scissors.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </button>
            <button className="project-github-btn">
              <a
                href="https://github.com/CabralE/rock-paper-siccors"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </button>
          </span>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src={simonsays} alt="simonsays logo" />
        </div>
        <div className="card-body">
          <h4>Simon Says Game</h4>
          <span className="tag">Tech stack</span>
          <p>HTML,CSS, and JavaScript</p>
          <p>Simon Says Game</p>
          <span className="live-github">
            <button className="project-live-btn">
              <a
                href="https://ec-simon-says-game.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </button>
            <button className="project-github-btn">
              <a
                href="https://github.com/CabralE/SimonSaysGame"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
