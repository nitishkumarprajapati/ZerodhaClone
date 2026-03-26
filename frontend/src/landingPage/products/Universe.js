import React from "react";

const partners = [
  {
    image: "media/assets/zerodhafundhouse.png",
    title: "Zerodha Fund House",
    text: "Our asset management venture for simple and transparent index-first investing.",
  },
  {
    image: "media/assets/sensibull-logo.svg",
    title: "Sensibull",
    text: "Options trading platform with strategies, analysis, and option chain tools.",
  },
  {
    image: "media/assets/tijori.svg",
    title: "Tijori",
    text: "Stock research platform for deeper company fundamentals and business insights.",
  },
  {
    image: "media/assets/streak-logo.png",
    title: "Streak",
    text: "Create, backtest, and deploy trading strategies without writing code.",
  },
  {
    image: "media/assets/smallcase-logo.png",
    title: "smallcase",
    text: "Curated baskets of stocks and ETFs built around ideas, sectors, and strategies.",
  },
  {
    image: "media/assets/ditto-logo.png",
    title: "Ditto",
    text: "Insurance guidance designed to help you choose policies with better clarity.",
  },
];

function Universe() {
  return (
    <section className="products-universe">
      <div className="container">
        <div className="products-universe-head text-center">
          <h2>The Zerodha Universe</h2>
          <p>
            Extend your trading and investing experience with partner platforms
            built for research, strategies, education, and long-term investing.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {partners.map((partner) => (
            <div className="col-lg-4 col-md-6" key={partner.title}>
              <div className="products-universe-card">
                <img
                  src={partner.image}
                  alt={partner.title}
                  className="products-universe-logo"
                ></img>
                <h4>{partner.title}</h4>
                <p>{partner.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="signup">Sign up for free</button>
        </div>
      </div>
    </section>
  );
}

export default Universe;
