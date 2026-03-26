import React from "react";
function Hero() {
  return (
    <>
      <div className="d-flex justify-content-center mb-5">
        <img src="media/assets/landing (1).svg" className="w-50 mt-5 mb-5" />
      </div>
      <div className="text-center d-flex flex-column align-items-center mt-5">
        <h2>
          Invest in Everything
        </h2>
        <p className="m-3 fs-3">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="signup m-5">Sign up for free</button>
      </div>
    </>
  );
}

export default Hero;
