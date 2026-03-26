import React from "react";

const options = [
  {
    image: "media/signupassets/stocks-acop.svg",
    title: "Stocks",
    text: "Invest in shares listed on NSE and BSE with a clean, fast trading experience.",
  },
  {
    image: "media/signupassets/mf-acop.svg",
    title: "Mutual funds",
    text: "Buy direct mutual funds online with zero commissions and long-term simplicity.",
  },
  {
    image: "media/signupassets/ipo-acop.svg",
    title: "IPOs",
    text: "Apply to upcoming IPOs seamlessly and track allotment updates in one place.",
  },
  {
    image: "media/signupassets/fo-acop.svg",
    title: "F&O",
    text: "Trade futures and options with flat pricing and powerful order types.",
  },
];

function Investment() {
  return (
    <section className="signup-block signup-investment">
      <div className="container">
        <div className="signup-section-head text-center">
          <h3>Investment options with Zerodha demat account</h3>
          <p>
            Build your portfolio across equity, mutual funds, derivatives, and
            public issues from a single account.
          </p>
        </div>
        <div className="row g-4">
          {options.map((item) => (
            <div className="col-lg-3 col-md-6" key={item.title}>
              <div className="signup-option-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="signup-option-image"
                ></img>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Investment;
