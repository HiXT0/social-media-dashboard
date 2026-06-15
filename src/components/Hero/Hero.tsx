import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>
          Manage All Your Social Media
          From One Dashboard
        </h1>

        <p>
          Connect, schedule, analyze and grow your social media presence
          across multiple platforms from a single workspace.
        </p>

        <div className="hero-buttons">
          <button className="get-started">
            Get Started
          </button>

          <button className="learn-more">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;