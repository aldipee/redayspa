import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <p>Re Massage Studio, JL. PETITENGET 88D, BALI, 80361, INDONESIA</p>
        <p className="mb30">
          {" "}
          <a href="tel:+6282266698020" className="link-footer">
            +62 822 6669 8020
          </a>
          <a href="mailto:care@remassagestudio.com" className="link-footer">
            CARE@REMASSAGESTUDIO.COM
          </a>
        </p>
        <ul className="social">
          <li>
            <a
              href="https://www.facebook.com/pages/Re-Day-Spa/821996157852429"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <img src="img/ico-facebook.svg" className="img-fluid" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ReDaySpa"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src="img/ico-twitter.svg" className="img-fluid" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/remassagestudio/"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src="img/ico-instagram.svg" className="img-fluid" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
