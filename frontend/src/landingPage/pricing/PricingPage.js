import React from "react";
import Brokerage from "./Brokerage";

function PricingPage() {
  return (
    <>
      <section className="pricing-page-hero">
        <div className="container">
          <div className="row align-items-center pricing-page-row">
            <div className="col-lg-6">
              <h1>Pricing</h1>
              <p className="pricing-page-copy">
                Free equity investments and flat pricing for intraday, F&O, and
                all other trades. Transparent charges designed to stay simple.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="pricing-page-summary">
                <div className="pricing-page-stat">
                  <h3>₹0</h3>
                  <p>Equity delivery and direct mutual funds</p>
                </div>
                <div className="pricing-page-stat">
                  <h3>₹20</h3>
                  <p>Intraday and F&O per executed order</p>
                </div>
                <div className="pricing-page-stat">
                  <h3>Free</h3>
                  <p>Simple account opening for individual investors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Brokerage />
    </>
  );
}

export default PricingPage;
