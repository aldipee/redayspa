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
                <div className="sm-heading">ITS ALL START WITH HONESTY…</div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Do we need to book in advance?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        To ensure you receive all the spa treatments you want,
                        not only is advance booking suggested, it is highly
                        recommended. Customers may book up to one month in
                        advance of their arrival. You can book via our web app,
                        or you can contact our reservation team via WhatsApp at
                        this number:{" "}
                        <a href="tel:+6281248788391" className="link-telephone">
                          +62812 3737 5791
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
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Accordion Item #2
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">adasdq</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Accordion Item #3
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">adasdq</div>
                    </div>
                  </div>
                </div>
                <p>Actions require before entering our premise:</p>
                <ul>
                  <li>
                    Upon arrival, please throughly wash your hands. We will also
                    be taking temperatures.
                  </li>
                  <li> Re staff and clients will be required to wear masks.</li>
                  <li>
                    Please reschedule if you or anyone have been in contact with
                    is sick.
                  </li>
                </ul>
              </div>
              <div className="treatment-item border-0" data-aos="fade-up">
                <div className="about-title mb24">Our staffs</div>
                <p>
                  We ensure all of our staffs are healthy before arriving at the
                  premise. We monitor their body temperature and assess symptoms
                  prior entering our office location before they visit our spa
                  location. With such measure we create extra layer of
                  protection to all staffs and Res client.
                </p>
                <p>
                  Our staff keep a spare clean uniform at work, so they can
                  change during their shift if they feel it is required. We
                  provide clean attire from head to toe only to be wear in the
                  premise to minimise the chance of contamination{" "}
                </p>

                <div className="about-title mb24">Area Maintenance</div>
                <p>
                  <strong>General Area</strong>
                </p>
                <ul>
                  <li>
                    All door handles and doors must be sanitized on a regular
                    basis.
                  </li>
                  <li>Remove all testers from Spa boutique</li>
                  <li>
                    Hands should be sanitized before coming into contact with
                    guests/staffs
                  </li>
                </ul>
                <p>
                  <strong>Locker</strong>
                </p>
                <ul>
                  <li>
                    Lockers are assigned to each guest in consideration of
                    social distancing guidelines.
                  </li>
                  <li>
                    All lockers are pre-locked to avoid guests from changing
                    assigned lockers or from touching contents inside lockers.
                  </li>
                  <li>
                    Lockers are sanitized after each use by the attendants.
                  </li>
                </ul>
                <p>
                  <strong>Treatment Area</strong>
                </p>
                <ul>
                  <li>
                    Our staffs must wear a mask during a treatment the guest
                    must be advised during the consultation.
                  </li>
                  <li>
                    In between each service to allow for treatment room cleaning
                    and sanitation. We always wipe down counters, bottles,
                    cabbies, jewellery box, head rests and treatment tables.
                  </li>
                  <li>
                    Remove from treatment rooms: bed skirts, duvets, pillows,
                    runners, table warmers and mattress pads. All linen in the
                    treatment bed must be used and washed after each guest.
                  </li>
                  <li>
                    Providers must spray and sanitize all skincare bottles and
                    products used after each treatment.
                  </li>
                </ul>
                <p>
                  <strong>Tools and Supplies</strong>
                </p>
                <ul>
                  <li>
                    Everything that can be touch will be clean throughly with
                    disinfectant and clean cloth frequently.
                  </li>
                  <li>
                    All inventory deliveries will not be opened immediately
                    after receiving, and items are immediately wiped down.
                  </li>
                  <li>
                    We working closely with our local suppliers to ensure
                    highest quality ingredients, process, package and delivered
                    in cleanest manner.
                  </li>
                </ul>
                <p>
                  If you have any inquiry regarding how we handling COVID-19 in
                  our premises, you are welcome to contact us through email{" "}
                  <a
                    href="mailto:care@redayspabali.com"
                    className="link-telephone"
                  >
                    care@redayspabali.com
                  </a>
                  .
                </p>
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
