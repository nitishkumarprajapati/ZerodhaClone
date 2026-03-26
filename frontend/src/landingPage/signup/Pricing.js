import React from "react";

const charges = [
  {
    title: "₹0",
    label: "Equity delivery and direct mutual funds",
    image: "media/signupassets/coin.svg",
  },
  {
    title: "₹20",
    label: "Intraday and F&O per executed order",
    image: "media/signupassets/kite-logo.svg",
  },
  {
    title: "Free",
    label: "Simple account opening for individual investors",
    image: "media/signupassets/logo.svg",
  },
];

function Pricing() {
  return (
    <section className="signup-block signup-pricing">
      <div className="container">
        <div className="signup-section-head text-center">
          <h3>Simple pricing that stays easy to understand</h3>
          <p>
            Transparent charges are one of the biggest reasons people choose
            Zerodha.
          </p>
        </div>
        <div className="row g-4">
          {charges.map((item) => (
            <div className="col-lg-4" key={item.label}>
              <div className="signup-charge-card">
                <img
                  src={item.image}
                  alt={item.label}
                  className="signup-charge-image"
                ></img>
                <h4>{item.title}</h4>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
