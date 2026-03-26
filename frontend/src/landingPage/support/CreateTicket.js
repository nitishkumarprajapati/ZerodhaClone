import React from "react";

const ticketGroups = [
  {
    icon: "fa-circle-user",
    title: "Account opening",
    text: "Status check, document upload issues, and onboarding help.",
  },
  {
    icon: "fa-user-gear",
    title: "Your Zerodha account",
    text: "Profile changes, account modifications, and segment activation.",
  },
  {
    icon: "fa-chart-line",
    title: "Trading and markets",
    text: "Orders, holdings, positions, margins, and product questions.",
  },
  {
    icon: "fa-wallet",
    title: "Funds",
    text: "Adding money, withdrawals, statements, and payment issues.",
  },
  {
    icon: "fa-file-invoice-dollar",
    title: "Charges and reports",
    text: "Brokerage, taxes, contract notes, and P&L related support.",
  },
  {
    icon: "fa-shield-halved",
    title: "Security and access",
    text: "Login issues, account safety, and suspicious activity support.",
  },
];

function CreateTicket() {
  return (
    <section className="support-categories">
      <div className="container">
        <div className="support-section-head text-center">
          <h2>Browse by category</h2>
          <p>
            Create a ticket faster by going to the category closest to your
            issue.
          </p>
        </div>
        <div className="row g-4">
          {ticketGroups.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.title}>
              <div className="support-category-card">
                <div className="support-category-icon">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#" className="support-card-link">
                  Create ticket <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;
