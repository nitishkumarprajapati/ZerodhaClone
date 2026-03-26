import React from "react";

const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
];

function Hero() {
  return (
    <section className="support-hero">
      <div className="container">
        <div className="row align-items-center support-hero-row">
          <div className="col-lg-7">
            <p className="support-overline">Support portal</p>
            <h1>Search for an answer or browse help topics</h1>
            <p className="support-hero-copy">
              Find answers about your account, trading, charges, margins, and
              everything else related to Zerodha.
            </p>
            <div className="support-search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Eg. how do I activate F&O, why is my order rejected..."
              ></input>
            </div>
            <div className="support-quick-links">
              {quickLinks.map((item) => (
                <a href="#" key={item}>
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="support-featured-card">
              <h3>Featured</h3>
              <a href="#">Latest margin policy updates</a>
              <a href="#">How to track account opening status</a>
              <a href="#">Understanding charges and contract notes</a>
              <a href="#">Report an unauthorised activity</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
