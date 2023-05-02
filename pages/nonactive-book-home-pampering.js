/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title> Book a Home Pampering - RE DAY SPA - Rejuvenation in Tranquility</title>
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
                <a href="index.html" className="item-main-nav">
                  HOME
                </a>
                <a href="index.html#about" className="item-main-nav">
                  ABOUT
                </a>
                <a href="index.html#treatment" className="item-main-nav">
                  TREATMENT
                </a>
              </div>
              <div className="center-side">
                <a href="index.html">
                  <img src="img/logo.png" className="img-fluid logo" />
                </a>
              </div>
              <div className="right-side">
                <a href="index.html#contact" className="item-main-nav">
                  CONTACT US
                </a>
                <a href="cleanlines-guidelines.html" className="item-nav-last">
                  CLEANLINESS GUIDELINES
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container"></div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="ttl-treatment text-center mb50">Book a Home Pampering</div>
              <form>
                <div className="name-detail">
                  <div className="mb-0 big">Your Details</div>
                  <div className="nd-desc ft-14 grey">Please fill all the detail about you and your nest</div>
                </div>
                <div className="form-group">
                  <label className="label-form">Name *</label>
                  <div className="row">
                    <div className="col-sm-6">
                      <input type="text" className="form-control" />
                      <small>First Name</small>
                    </div>
                    <div className="col-sm-6">
                      <input type="text" className="form-control" />
                      <small>Last Name</small>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-form">Email *</label>
                  <input type="email" className="form-control" placeholder="Your email address" />
                </div>
                <div className="form-group">
                  <label className="label-form">Phone Number (WhatsApp) *</label>
                  <input type="tel" className="form-control" placeholder="Your subject" />
                </div>
                <div className="form-group">
                  <label className="label-form">Home Address *</label>
                  <textarea className="form-control" rows="5" placeholder="Type your address here.."></textarea>
                </div>
                <div className="name-detail">
                  <div className="mb-0 big">Home Pampering Details</div>
                  <div className="nd-desc ft-14 grey">Pick the time, date, and pampering your would like to get</div>
                </div>
                <div className="big">Time and Date</div>
                <div className="ft-14 grey mb10">
                  10am - 6pm
                  <br />
                  Booking promo 10am for 10% off
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="10 August, 10am" />
                </div>
                <div className="form-group">
                  <label className="label-form">Treatment *</label>
                  <div className="ft-14 grey mb10">
                    Promotional discount and other promo will be given by our receptionist once the booking are made
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="treatment-name" id="treatment1" />
                    <label className="form-check-label" htmlFor="treatment1">
                      Re Signature Massage - 120min - 480k
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="treatment-name" id="treatment2" />
                    <label className="form-check-label" htmlFor="treatment2">
                      Re Signature Scrub Massage - 90min - 400k
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="treatment-name" id="treatment3" />
                    <label className="form-check-label" htmlFor="treatment3">
                      Re Signature Scrub Massage - 120min - 500k
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="treatment-name" id="treatment4" />
                    <label className="form-check-label" htmlFor="treatment4">
                      Balinese Signature Massage - 90min - 380k
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="treatment-name" id="treatment5" />
                    <label className="form-check-label" htmlFor="treatment5">
                      Balinese Signature Massage - 120min - 450k
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="treatment-name" id="treatment6" />
                    <label className="form-check-label" htmlFor="treatment6">
                      Deep Tissue Rubdown - 90min - 380k
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="treatment-name" id="treatment7" />
                    <label className="form-check-label" htmlFor="treatment7">
                      Deep Tissue Rubdown - 120min - 450k
                    </label>
                  </div>
                </div>
                <div className="name-detail">
                  <div className="mb-0 big">We would like to understand your need better</div>
                  <div className="nd-desc ft-14 grey">
                    Below form is crucial information for us to reach your need the best we could
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-form">Medical Information *</label>
                  <div className="ft-14 grey mb10">
                    Please let us know if you have any health condition that may affect your treatment, including any
                    listed below
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="check1" />
                    <label className="form-check-label" htmlFor="check1">
                      Recent Surgery
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="check2" />
                    <label className="form-check-label" htmlFor="check2">
                      Recent Injury/Accident, Cancer
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="check3" />
                    <label className="form-check-label" htmlFor="check3">
                      Heart conditions
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="check4" />
                    <label className="form-check-label" htmlFor="check4">
                      Asthma
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="check5" />
                    <label className="form-check-label" htmlFor="check5">
                      Muscular pain
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="check6" />
                    <label className="form-check-label" htmlFor="check6">
                      Joint problems
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="check7" />
                    <label className="form-check-label" htmlFor="check7">
                      High/Low blood pressure
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="check8" />
                    <label className="form-check-label" htmlFor="check8">
                      Currently Pregnant
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="check9" />
                    <label className="form-check-label" htmlFor="check9">
                      Allergy
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="check10" />
                    <label className="form-check-label" htmlFor="check10">
                      Other ( Please let us know below )
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="check11" />
                    <label className="form-check-label" htmlFor="check11">
                      NONE OF THE ABOVE
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="other" />
                </div>
                <label className="label-form">COVID-19 Health Declaration *</label>
                <div className="ft-14 grey mb24">
                  Health and safety of our client and therapist are on top of our mind. Please reserve your pampering
                  treatment only if your have not experienced a fever / cough / runny nose / sore throat / shortness of
                  breath
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="check12" />
                    <label className="form-check-label" htmlFor="check12">
                      With this I agree for the last 14 day that, Im in healthy condition, never travel overseas s and
                      not in contact with anyone suspected COVID-19
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <input type="submit" className="btn btn-green" value="SUBMIT" />
                </div>
              </form>
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
          <button className="btn btn-toggle">
            <img src="img/toggle.svg" className="img-fluid" />
          </button>
        </div>

        <div className="mobile-menu">
          <div className="mm-header">
            <a href="index.html">
              <img src="img/logo.png" className="logo-menu" />
            </a>
            <div className="btn-close-menu">
              <button className="btn btn-for-close">
                <img src="img/close.svg" className="img-fluid" />
              </button>
            </div>
          </div>
          <div className="mm-content">
            <ul className="list-menu-mobile">
              <li>
                <a href="index.html" className="link-menu-mobile">
                  HOME
                </a>
              </li>
              <li>
                <a href="index.html#about" className="link-menu-mobile">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="index.html#treatment" className="link-menu-mobile">
                  TREATMENT
                </a>
              </li>
              <li>
                <a href="index.html#contact" className="link-menu-mobile">
                  CONTACT US
                </a>
              </li>
              <li>
                <a href="cleanlines-guidelines.html" className="link-menu-mobile-last">
                  CLEANLINESS GUIDELINES
                </a>
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
