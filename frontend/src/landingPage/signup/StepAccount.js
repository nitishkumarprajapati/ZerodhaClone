import React from "react";

const steps = [
  {
    number: "01",
    title: "Enter the requested details",
    text: "Keep your PAN, Aadhaar, bank details, and basic personal information ready.",
  },
  {
    number: "02",
    title: "Complete e-sign and verification",
    text: "Verify your mobile number and complete the online e-sign flow in a few minutes.",
  },
  {
    number: "03",
    title: "Start investing",
    text: "Once your application is verified, you can access Kite, Coin, and the Zerodha ecosystem.",
  },
];

const benefits = [
  "Paperless online account opening",
  "₹0 account opening for individual accounts",
  "Fast access to stocks, mutual funds, IPOs, and F&O",
];

function StepAccount() {
  return (
    <section className="signup-block signup-steps">
      <div className="container">
        <div className="row align-items-center signup-steps-row">
          <div className="col-lg-6">
            <div className="signup-section-head">
              <h3>Open your account in a few simple steps</h3>
              <p>
                The process is fully online and built to get you started with
                minimal paperwork.
              </p>
            </div>
            <div className="signup-steps-list">
              {steps.map((step) => (
                <div className="signup-step-item" key={step.number}>
                  <div className="signup-step-number">{step.number}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="signup-steps-visual">
              <img
                src="media/signupassets/steps-acop.svg"
                alt="Account opening steps"
                className="img-fluid signup-steps-image"
              ></img>
              <div className="signup-benefits">
                <img
                  src="media/signupassets/acop-benefits.svg"
                  alt="Benefits"
                  className="signup-benefits-image"
                ></img>
                <div>
                  <h4>Why this flow works well</h4>
                  {benefits.map((benefit) => (
                    <p key={benefit}>{benefit}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepAccount;
