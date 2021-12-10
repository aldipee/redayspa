/* eslint-disable @next/next/no-sync-scripts */
import { useState } from "react";
import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title> Home Treatment - RE DAY SPA - Rejuvenation in Tranquility</title>
        <meta name="description" content="" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

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
                    <img src="img/logo.png" className="img-fluid logo" alt="Logo" />
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

        <section className="about-section" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
                <div className="text-center">
                  <div className="ttl-treatment mb24">Home Pampering</div>
                  <div className="sm-heading mb24">BRING HOME THE SPA</div>
                  <p>We are bringing total relaxation experience of spa at comfort of your home, when you want it.</p>
                  <p>With mindful pampering treatments cater to your individual needs.</p>
                  <p className="mb30">Feel contented, energised, and glowing with help from our talented therapist</p>
                  <a
                    href="https://wa.me/6281237375791?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20home%20spa%20treatment%20you%20offer."
                    className="btn btn-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    BOOK A TIME
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="inner-section" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <img src="img/treatment-4.jpg" className="img-fluid mb30" />
              </div>
              <div className="col-sm-4">
                <img src="img/treatment-5.jpg" className="img-fluid mb30" />
              </div>
              <div className="col-sm-4">
                <img src="img/treatment-6.jpg" className="img-fluid mb30" />
              </div>
            </div>
          </div>
        </section>

        <section className="treatment-list">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h2 className="mb40" data-aos="fade-up">
                  FULL BODY MESSAGE{" "}
                </h2>
                <div className="treatment-item" data-aos="fade-up">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="sm-heading">AROMASENSE MASSAGE</div>
                    </div>
                    <div className="col-sm-6">
                      <p>Smell the aromatherapy oil, your body knows best.</p>
                      <p>
                        Let your senses pick the right blended infused oil. Feel grounded by nurturing your natural
                        state with a combination of Balinese, Reiki, and Aromatherapy techniques
                      </p>
                      <p className="font-bold green">
                        90mins - 400k
                        <br />
                        120mins - 480K
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="treatment-item" data-aos="fade-up">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="sm-heading">RE SIGNATURE SCRUB MASSAGE</div>
                    </div>
                    <div className="col-sm-6">
                      <p>
                        Your moment of pampering to rejuvenate the entire body with Re signature massage followed with
                        body scrub of your body needs
                      </p>
                      <p>
                        Each unique blended oil and scrub has its benefits, your body knows best and our talented
                        therapist would cater to your need
                      </p>
                      <p className="font-bold green">
                        90mins - 400k
                        <br />
                        120mins - 500k
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="treatment-item" data-aos="fade-up">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="sm-heading">BALINESE MASSAGE</div>
                    </div>
                    <div className="col-sm-6">
                      <p>
                        Our take on traditional Balinese techniques applies combination of acupressure, kneading and
                        invigorating hand movements using our unique blended oil to stimulate blood circulation,
                        increase flexibility and ultimately relax your entire body.
                      </p>
                      <p className="font-bold green">
                        90mins - 400K
                        <br />
                        120mins - 480k
                      </p>
                    </div>
                  </div>
                </div>
                <div className="treatment-item" data-aos="fade-up">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="sm-heading">DEEP TISSUE RUBDOWN</div>
                    </div>
                    <div className="col-sm-6">
                      <p>
                        Deep and relaxing massage therapy that focuses on realigning deeper layers of muscles and
                        connective tissue.
                      </p>
                      <p>
                        With the uplifting effects of the fresh and potent Clove and Ginger infused blended oil, the
                        result is an overall grounding effect on the body and mind
                      </p>
                      <p className="font-bold green">
                        90mins - 430K
                        <br />
                        120mins - 520k
                      </p>
                    </div>
                  </div>
                </div>
                <div className="treatment-item" data-aos="fade-up">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="sm-heading">ADDITIONAL BODY SCRUB</div>
                    </div>
                    <div className="col-sm-6">
                      <p>You can choose our selection of scrubs: coconut vanila / coffee / lulur.</p>

                      <p className="font-bold green">30mins - 150K</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h2 className="mb40" data-aos="fade-up">
                  OTHER TREATMENT
                </h2>
                <div className="treatment-item" data-aos="fade-up">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="sm-heading">HAND & FOOT MASSAGE</div>
                    </div>
                    <div className="col-sm-6">
                      <p>Hand, sholder, nec massage and foot relaxing massage.</p>

                      <p className="font-bold green">90mins - 300k</p>
                    </div>
                  </div>
                </div>
                <div className="treatment-item" data-aos="fade-up">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="sm-heading">HEAD TO TOE MASSAGE</div>
                    </div>
                    <div className="col-sm-6">
                      <p>Head massage, neck & shoulder, hand, and foot massage. Not include body massage.</p>
                      <p className="font-bold green">120mins - 400k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <a
                href="https://wa.me/6281237375791?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20home%20spa%20treatment%20you%20offer."
                className="btn btn-green"
                target="_blank"
                rel="noreferrer"
              >
                BOOK MY NEXT PAMERING TIME
              </a>
            </div>
          </div>
        </section>

        <section className="footer">
          <div className="container">
            <p>RE DAY SPA, JL. PETITENGET 88D, BALI, 80361, INDONESIA</p>
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
                <a href="https://twitter.com/ReDaySpa" className="social-link" target="_blank" rel="noreferrer">
                  <img src="img/ico-twitter.svg" className="img-fluid" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/redayspa/" className="social-link" target="_blank" rel="noreferrer">
                  <img src="img/ico-instagram.svg" className="img-fluid" />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div className="button-toggle">
          <button className="btn btn-toggle" onClick={() => setShowMobileMenu(true)}>
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
              <button className="btn btn-for-close" onClick={() => setShowMobileMenu(false)}>
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
              <li onClick={() => setShowMobileMenu(false)}>
                <Link href="cleanlines-guidelines">
                  <a className="link-menu-mobile-last">CLEANLINESS GUIDELINES</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mm-footer">
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
                <a href="https://twitter.com/ReDaySpa" className="social-link" target="_blank" rel="noreferrer">
                  <img src="img/ico-twitter.svg" className="img-fluid" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/redayspa/" className="social-link" target="_blank" rel="noreferrer">
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
