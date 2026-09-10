import { Link } from "react-router-dom";
import bikes from "../data/bikes";

function Home() {
  const featuredBikes = [1, 2, 3].map((id) =>
    bikes.find((bike) => bike.id === id),
  );

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-tag">
            <span className="status-dot" /> INDIAN SPORTS BIKES / 2026
          </p>

          <h1>
            Experience the Thrill of
            <span> Indian Sports Bikes</span>
          </h1>

          <p className="hero-description">
            Explore powerful machines built for speed, performance, technology
            and the ultimate riding experience.
          </p>

          <Link to="/categories" className="hero-button">
            Explore Bikes
          </Link>

          {/* <button class="font-60 hero-button"> Custom trigger feature</button> */}
          <button
            type="button"
            id="font-60"
            className="hero-button"
            aria-label="Turn magnifier on"
          >
            Magnifier
            {/* Braoza: Magnifier -> On */}
          </button>
        </div>

        <div className="hero-readout" aria-label="Performance highlights">
          <div>
            <span>01</span>
            <strong>RIDE</strong>
            <small>BEYOND LIMITS</small>
          </div>
          <div>
            <span>02</span>
            <strong>FEEL</strong>
            <small>EVERY RPM</small>
          </div>
          <div>
            <span>03</span>
            <strong>OWN</strong>
            <small>THE ROAD</small>
          </div>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span /> SCROLL TO DISCOVER
        </div>
      </section>

      <section
        className="signal-strip"
        aria-label="Indian bike performance stats"
      >
        <div>
          <strong>18+</strong>
          <span>machines indexed</span>
        </div>
        <div>
          <strong>225</strong>
          <span>km/h top speed</span>
        </div>
        <div>
          <strong>48</strong>
          <span>PS peak output</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>pure adrenaline</span>
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="featured-section">
        <div className="section-heading">
          <p>EXPLORE OUR PICKS</p>
          <h2>Featured Bikes</h2>
          <button type="button" id="mask" aria-label="Turn reading guide on">
            Reading Guide
            {/* Braoza: Reading Guide -> On */}
          </button>
        </div>

        <div className="featured-grid">
          {featuredBikes.map((bike) => (
            <article className="bike-card" key={bike.id}>
              <div className="bike-image">
                <img src={bike.image} alt={`${bike.brand} ${bike.name}`} />
              </div>

              <div className="bike-card-content">
                <p>{bike.brand}</p>
                <h3>{bike.name}</h3>
                <span>
                  {bike.engine} • {bike.power}
                </span>

                <Link to={`/bike/${bike.id}`} className="card-button">
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="collection-prompt">
          <div>
            <p className="section-kicker">THE NEXT GENERATION</p>
            <h3>
              Find the machine
              <br />
              <em>that moves you.</em>
            </h3>
          </div>
          <Link to="/categories" className="outline-button">
            Browse full collection <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
