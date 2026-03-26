import React from "react";
function Stats() {
  return (
    <>
      <section className="container stats-section">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="stats-title mb-4">Trust with Confidence</h2>
            <div className="stats-grid">
              <div className="stats-card">
                <h3 className="stats-heading">Customer-first always</h3>
                <p className="stats-copy">
                  That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                  crores of equity investments, making us India’s largest
                  broker; contributing to 15% of daily retail exchange volumes
                  in India.
                </p>
              </div>
              <div className="stats-card">
                <h3 className="stats-heading">No spam or gimmicks</h3>
                <p className="stats-copy">
                  No gimmicks, spam, "gamification", or annoying push
                  notifications. High quality apps that you use at your pace,
                  the way you like.
                </p>
              </div>
              <div className="stats-card">
                <h3 className="stats-heading">The Zerodha universe</h3>
                <p className="stats-copy">
                  Not just an app, but a whole ecosystem. Our investments in
                  30+ fintech startups offer you tailored services specific to
                  your needs.
                </p>
              </div>
              <div className="stats-card">
                <h3 className="stats-heading">Do better with money</h3>
                <p className="stats-copy">
                  With initiatives like Nudge and Kill Switch, we do not just
                  facilitate transactions, but actively help you do better with
                  your money.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="media/assets/ecosystem.png"
              alt="Zerodha ecosystem"
              className="img-fluid stats-image"
            ></img>
            <div className="icons">
              <a className="m-5">Explore our Products <i class="fa-solid fa-arrow-right"></i></a>
              <a className="m-5">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <img src="media/assets/press-logos.png" className="p-5"></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
