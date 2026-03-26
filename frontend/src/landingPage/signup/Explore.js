import React from "react";

const accountTypes = [
  {
    image: "media/signupassets/acop-individual.svg",
    title: "Individual account",
    text: "For resident individuals starting their investing journey.",
  },
  {
    image: "media/signupassets/acop-minor.svg",
    title: "Minor account",
    text: "Start early and invest for a child with guardian oversight.",
  },
  {
    image: "media/signupassets/acop-nri.svg",
    title: "NRI account",
    text: "Designed for NRIs looking to access Indian markets compliantly.",
  },
  {
    image: "media/signupassets/acop-huf.svg",
    title: "HUF account",
    text: "Manage family investments under a Hindu Undivided Family setup.",
  },
  {
    image: "media/signupassets/acop-corporate.svg",
    title: "Corporate account",
    text: "For companies, partnerships, LLPs, and institutions.",
  },
];

function Explore() {
  return (
    <section className="signup-block signup-explore">
      <div className="container">
        <div className="signup-section-head text-center">
          <h3>Explore account types</h3>
          <p>
            Pick the account type that matches how you want to invest and we
            will take you to the right onboarding flow.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {accountTypes.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.title}>
              <div className="signup-account-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="signup-account-image"
                ></img>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <a href="#" className="signup-card-link">
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Explore;
