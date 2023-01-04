import "./Home.css";
import headshot from "../../images/headshot.jpg";

function Home() {
  return (
    <div className="about-section">
      <div className="about-me-container">
        <div className="about-me-box" id="about-me-left">
          <img
            src={headshot}
            alt="Headshot of Edward Cabral"
            className="headshot-image"
          />
        </div>
        <div className="about-me-box" id="about-me-right">
          <h2>Edward Cabral</h2>
          <p>Software Engineer / Accountant / Grants</p>
          <br />
          <p>
            I am an advit learner who is always willing to acquiring new
            knowledge in different fields. Business, Grants, and technology are
            the things that make me tick. My goal is to utilizie my skills to
            contribute to businesses, culture, and communities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
