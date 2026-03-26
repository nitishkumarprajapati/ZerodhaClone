import React from "react";
function Pricing() {
  return (
    <>
      <section className="container pricing-section">
        <div className="row align-items-center g-0">
          <div className="col-lg-4">
            <h3 className="pricing-title">Unbeatable Pricing</h3>
            <p className="pricing-copy">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="#" className="pricing-link">
              See pricing <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-lg-8">
            <div className="pricing-visuals d-flex justify-content-start align-items-center">
              <div className="pricing-item d-flex align-items-center gap-2">
                <img
                  src="media/assets/pricing-eq.svg"
                  alt="Free equity delivery"
                  className="img-fluid pricing-item-image"
                ></img>
                <p className="pricing-item-text">Free equity delivery</p>
              </div>
              <div className="pricing-item d-flex align-items-center gap-2">
                <img
                  src="media/assets/pricing-eq.svg"
                  alt="Intraday and F&O"
                  className="img-fluid pricing-item-image"
                ></img>
                <p className="pricing-item-text">Intraday and F&O</p>
              </div>
              <div className="pricing-item d-flex align-items-center gap-2">
                <img
                  src="media/assets/other-trades.svg"
                  alt="Flat fee on other trades"
                  className="img-fluid pricing-item-image"
                ></img>
                <p className="pricing-item-text">Flat fee on all other trades</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
