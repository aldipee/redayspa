/* eslint-disable @next/next/no-sync-scripts */
import clsx from "clsx";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>FAQ - RE DAY SPA - Rejuvenation in Tranquility</title>
        <meta name="description" content="" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />

        <meta property="og:title" content="" />
        <meta property="og:type" content="" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="" />

        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="apple-touch-icon" href="icon.png" />

        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/swiper.min.css" />
        <link rel="stylesheet" href="css/aos.css" />
        <link rel="stylesheet" href="css/main.css" />
      </Head>

      <body>
        <section className="header-inner">
          <div className="container">
            <div className="main-nav">
              <div className="left-side">
                <Link href="/">
                  <a className="item-main-nav">HOME</a>
                </Link>
                <Link href="/#about">
                  <a className="item-main-nav">ABOUT</a>
                </Link>
                <Link href="/#treatment">
                  <a className="item-main-nav">TREATMENT</a>
                </Link>
              </div>
              <div className="center-side">
                <Link href="/">
                  <a>
                    <img
                      src="img/logo.png"
                      className="img-fluid logo"
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="right-side">
                <Link href="/#contact">
                  <a className="item-main-nav">CONTACT US</a>
                </Link>
                <Link href="/cleanlines-guidelines">
                  <a className="item-nav-last">CLEANLINESS GUIDELINES</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="treatment-item" data-aos="fade-up">
                <div className="ttl-treatment text-center mb50">
                  Frequently Asked Questions
                </div>
                <p className="sm-heading">Booking & Cancellation</p>
                <div className="accordion" id="accordionBooking">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="bookingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBookingOne"
                        aria-expanded="true"
                        aria-controls="collapseBookingOne"
                      >
                        1. Do we need to book in advance?
                      </button>
                    </h2>
                    <div
                      id="collapseBookingOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="bookingOne"
                      data-bs-parent="#accordionBooking"
                    >
                      <div className="accordion-body">
                        <p>
                          To ensure you receive all the spa treatments you want,
                          not only is advance booking suggested, it is highly
                          recommended. Customers may book up to one month in
                          advance of their arrival.
                          <br />
                          You can book via our web app, or you can contact our
                          reservation team via WhatsApp at this number:{" "}
                          <a
                            href="tel:+6281248788391"
                            className="link-telephone"
                          >
                            +62 812 3737 5791
                          </a>
                          . Other alternative for booking is via email:{" "}
                          <a
                            href="mailto:care@redayspabali.com"
                            className="link-telephone"
                          >
                            care@redayspabali.com
                          </a>{" "}
                          or simply send us DM on Instagram{" "}
                          <a
                            href="https://www.instagram.com/redayspa/"
                            className="link-telephone"
                          >
                            @redayspabali
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="bookingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBookingTwo"
                        aria-expanded="false"
                        aria-controls="collapseBookingTwo"
                      >
                        2. What type of payments do you accept? And it is safe
                        to pay online?
                      </button>
                    </h2>
                    <div
                      id="collapseBookingTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="bookingTwo"
                      data-bs-parent="#accordionBooking"
                    >
                      <div className="accordion-body">
                        <p>
                          We accept all major credit card and cash. We also
                          accept local Indonesian bank debit cards and bank
                          transfer.
                          <br /> We do not hold or share you credit card
                          information. All online payment are made through a
                          trustworthy booking system and payment gateway
                          provider
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="bookingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBookingThree"
                        aria-expanded="false"
                        aria-controls="collapseBookingThree"
                      >
                        3. Why should I pay Deposit Payment?
                      </button>
                    </h2>
                    <div
                      id="collapseBookingThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="bookingThree"
                      data-bs-parent="#accordionBooking"
                    >
                      <div className="accordion-body">
                        <p>
                          Deposit payment is needed to secure your booking.This
                          way we can confidently allocate the necessary
                          resources and staff members to our committed
                          customers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="treatment-item border-0" data-aos="fade-up">
                <p className="sm-heading">Spa Etiquette & Info</p>
                <div className="accordion" id="accordionEtiquette">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="etiquetteOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEtiquetteOne"
                        aria-expanded="true"
                        aria-controls="collapseEtiquetteOne"
                      >
                        1. Do you offer spa treatment for men?
                      </button>
                    </h2>
                    <div
                      id="collapseEtiquetteOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="etiquetteOne"
                      data-bs-parent="#accordionEtiquette"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, men also can come and have treatment at our spa.
                          We pride ourselves on offering a wide range of
                          professional treatments for both men and women. Our
                          dedicated team of trained therapists is committed to
                          providing a relaxing and therapeutic professional spa
                          experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="etiquetteTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEtiquetteTwo"
                        aria-expanded="false"
                        aria-controls="collapseEtiquetteTwo"
                      >
                        2. I am pregnant. Can I come to RE Day Spa?
                      </button>
                    </h2>
                    <div
                      id="collapseEtiquetteTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="etiquetteTwo"
                      data-bs-parent="#accordionEtiquette"
                    >
                      <div className="accordion-body">
                        <p>
                          You certainly can. We do offer treatments for
                          expecting moms after their first trimester to enjoy a
                          much needed pampering session. We use pregnancy safe
                          products to ensure you can enjoy your treatments while
                          having its benefits. We do not recommend any type of
                          massage treatments using deep pressure, heat and foot
                          massage at any time during pregnancy. Please consult
                          with your physician for the best advice on which
                          treatments are safe for your individual condition
                          before making an appointment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="etiquetteThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEtiquetteThree"
                        aria-expanded="false"
                        aria-controls="collapseEtiquetteThree"
                      >
                        3. Do you have a private treatment room or gender
                        segregated room?
                      </button>
                    </h2>
                    <div
                      id="collapseEtiquetteThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="etiquetteThree"
                      data-bs-parent="#accordionEtiquette"
                    >
                      <div className="accordion-body">
                        <p>
                          We understand and respect the privacy concerns of all
                          our customers, including those with specific cultural
                          or religious preference. We strive to create a
                          comfortable and inclusive environment for everyone to
                          enjoy their spa experience.
                          <br />
                          While we currently only have one VIP room with two
                          beds, and the rest of the massage beds upstair are
                          separated by thick curtains that provide a high level
                          of privacy. When curtains are drawn, they effectively
                          shield the massage area from view, preventing anyone
                          from peeking inside.
                          <br />
                          If you have any specific concerns or requests
                          regarding privacy, please feel free to communicate
                          them to our staff when making your appointment. We’ll
                          do our best to accommodate your needs and provide an
                          experience that aligns with your preferences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer">
          <div className="container">
            <p>RE DAY SPA, JL. PETITENGET 88D, BALI, 80361, INDONESIA</p>
            <p className="mb30">
              {" "}
              <a href="tel:+6281248788391" className="link-footer">
                +62812 3737 5791
              </a>
              <a href="mailto:care@redayaspabali.com" className="link-footer">
                CARE@REDAYSPABALI.COM
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
                  href="https://www.instagram.com/redayspa/"
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

        <div className="button-toggle">
          <button
            className="btn btn-toggle"
            onClick={() => setShowMobileMenu(true)}
          >
            <img src="img/toggle.svg" className="img-fluid" />
          </button>
        </div>

        <div className={clsx("mobile-menu", showMobileMenu && "show")}>
          <div className="mm-header">
            <Link href="/">
              <a>
                <img src="img/logo.png" className="logo-menu" />
              </a>
            </Link>
            <div className="btn-close-menu">
              <button
                className="btn btn-for-close"
                onClick={() => setShowMobileMenu(false)}
              >
                <img src="img/close.svg" className="img-fluid" />
              </button>
            </div>
          </div>
          <div className="mm-content">
            <ul className="list-menu-mobile">
              <li onClick={() => setShowMobileMenu(false)}>
                <Link href="/">
                  <a className="link-menu-mobile">HOME</a>
                </Link>
              </li>
              <li onClick={() => setShowMobileMenu(false)}>
                <Link href="/#about">
                  <a className="link-menu-mobile">ABOUT</a>
                </Link>
              </li>
              <li onClick={() => setShowMobileMenu(false)}>
                <Link href="/#treatment">
                  <a className="link-menu-mobile">TREATMENT</a>
                </Link>
              </li>
              <li onClick={() => setShowMobileMenu(false)}>
                <Link href="/#contact">
                  <a className="link-menu-mobile">CONTACT US</a>
                </Link>
              </li>
              <li>
                <Link href="cleanlines-guidelines">
                  <a className="link-menu-mobile-last">
                    CLEANLINESS GUIDELINES
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mm-footer">
            <p className="mb30">
              {" "}
              <a href="tel:+6281237375791" className="link-footer">
                +62812 3737 5791
              </a>
              <a href="mailto:care@redayaspabali.com" className="link-footer">
                CARE@REDAYSPABALI.COM
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
                  href="https://www.instagram.com/redayspa/"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="img/ico-instagram.svg" className="img-fluid" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <script src="js/vendor/jquery-3.5.1.min.js"></script>
        <script src="js/vendor/bootstrap.bundle.min.js"></script>
        <script src="js/vendor/modernizr-3.11.2.min.js"></script>
        <script src="js/vendor/aos.js"></script>
        <script src="js/vendor/swiper.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
      </body>
    </>
  );
}
