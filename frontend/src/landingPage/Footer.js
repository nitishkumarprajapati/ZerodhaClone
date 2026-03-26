import React from "react";

function Footer() {
  return (
    <footer className="footer-section mt-5">
      <div className="container">
        <div className="row footer-top">
          <div className="col-lg-3 col-md-6 footer-brand">
            <img
              src="media/assets/logo.svg"
              alt="Zerodha"
              className="footer-logo"
            ></img>
            <p className="footer-copy">
              &copy; 2010 - 2026, Zerodha Broking Ltd.
              <br></br>
              All rights reserved.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-social">
              <a href="#" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#" aria-label="Telegram">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
            <div className="footer-badges">
              <img
                src="media/assets/google-play-badge-light.svg"
                alt="Get it on Google Play"
                className="footer-badge"
              ></img>
              <img
                src="media/assets/appstore-badge-light.svg"
                alt="Download on the App Store"
                className="footer-badge"
              ></img>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-column">
            <h5>Account</h5>
            <a href="#">Open demat account</a>
            <a href="#">Minor demat account</a>
            <a href="#">NRI demat account</a>
            <a href="#">Commodity</a>
            <a href="#">Funds transfer</a>
            <a href="#">MTF</a>
          </div>

          <div className="col-lg-2 col-md-6 footer-column">
            <h5>Support</h5>
            <a href="#">Contact us</a>
            <a href="#">Support portal</a>
            <a href="#">How to file a complaint?</a>
            <a href="#">Status of your complaints</a>
            <a href="#">Bulletin</a>
            <a href="#">Circular</a>
          </div>

          <div className="col-lg-2 col-md-6 footer-column">
            <h5>Company</h5>
            <a href="#">About</a>
            <a href="#">Philosophy</a>
            <a href="#">Press & media</a>
            <a href="#">Careers</a>
            <a href="#">Zerodha Cares</a>
            <a href="#">Zerodha.tech</a>
          </div>

          <div className="col-lg-3 col-md-6 footer-column">
            <h5>Quick links</h5>
            <a href="#">Upcoming IPOs</a>
            <a href="#">Brokerage charges</a>
            <a href="#">Market holidays</a>
            <a href="#">Economic calendar</a>
            <a href="#">Calculators</a>
            <a href="#">Markets</a>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX and MSEI. SEBI
            Registration no.: INZ000031633. CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. Registered Address: #153/154, 4th
            Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
            Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            Investments in securities market are subject to market risks. Read
            all the related documents carefully before investing. Prevent
            unauthorised transactions in your account by updating your mobile
            numbers and email IDs with your stock broker.
          </p>
          <p>
            As a business we do not give stock tips, and we have not authorized
            anyone to trade on behalf of others. If you find anyone claiming to
            be part of Zerodha and offering such services, please report it.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
