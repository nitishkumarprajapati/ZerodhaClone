import React from "react";

const faqs = [
  {
    question: "What documents are needed to open a Zerodha account?",
    answer:
      "PAN, Aadhaar, bank proof, income proof for derivatives, and your signature are the most common requirements.",
  },
  {
    question: "How long does online account opening usually take?",
    answer:
      "If your details are ready and verification is completed smoothly, the online flow usually finishes quickly.",
  },
  {
    question: "Can I open an account without Aadhaar linked to my mobile number?",
    answer:
      "For the standard online flow, Aadhaar linked to your mobile number is generally required for OTP-based verification.",
  },
  {
    question: "Is there any charge for opening an individual account?",
    answer:
      "The individual account opening flow is usually free, while brokerage applies later depending on the product you trade.",
  },
];

function FAQ() {
  return (
    <section className="signup-block signup-faq">
      <div className="container">
        <div className="signup-section-head text-center">
          <h3>FAQs</h3>
          <p>Common questions people usually have before starting the process.</p>
        </div>
        <div className="signup-faq-list">
          {faqs.map((item) => (
            <div className="signup-faq-item" key={item.question}>
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
