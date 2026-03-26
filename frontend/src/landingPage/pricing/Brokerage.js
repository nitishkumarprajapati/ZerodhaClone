import React from "react";

const cards = [
  {
    image: "media/assets/pricing-eq.svg",
    title: "Free equity delivery",
    text: "All equity delivery investments are absolutely free with no brokerage charged.",
  },
  {
    image: "media/assets/other-trades.svg",
    title: "Flat ₹20 per order",
    text: "Intraday, F&O, currency, and commodity trades come with straightforward flat pricing.",
  },
  {
    image: "media/assets/coin.svg",
    title: "Direct mutual funds",
    text: "Invest in direct mutual funds online with no distribution commission layers.",
  },
];

const charges = [
  ["Equity delivery", "₹0"],
  ["Equity intraday", "0.03% or ₹20/executed order whichever is lower"],
  ["Equity futures", "0.03% or ₹20/executed order whichever is lower"],
  ["Equity options", "Flat ₹20 per executed order"],
  ["Currency futures", "0.03% or ₹20/executed order whichever is lower"],
  ["Currency options", "Flat ₹20 per executed order"],
  ["Commodity futures", "0.03% or ₹20/executed order whichever is lower"],
  ["Commodity options", "Flat ₹20 per executed order"],
];

function Brokerage() {
  return (
    <section className="pricing-brokerage">
      <div className="container">
        <div className="row g-4">
          {cards.map((card) => (
            <div className="col-lg-4" key={card.title}>
              <div className="pricing-brokerage-card">
                <img
                  src={card.image}
                  alt={card.title}
                  className="pricing-brokerage-image"
                ></img>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-charges">
          <div className="pricing-section-head text-center">
            <h3>Brokerage charges</h3>
            <p>
              A quick view of the pricing structure across products and trading
              segments.
            </p>
          </div>
          <div className="pricing-charges-table">
            {charges.map(([label, value]) => (
              <div className="pricing-charge-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brokerage;
