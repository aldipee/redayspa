/* eslint-disable @next/next/no-sync-scripts */
import { Formik, ErrorMessage } from "formik";
import { useState, useRef } from "react";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";
import Script from "next/script";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const formikRef = useRef(null);

  const contactUsSchema = Yup.object().shape({
    customer_firstName: Yup.string().required("Firstname is required!"),
    customer_lastName: Yup.string().required("Lastname is required!"),
    customer_message: Yup.string().required("Message is required!"),
    customer_email: Yup.string()
      .email("Invalid email")
      .required("Email is required!"),
    customer_subject: Yup.string().required("Subject is required!"),
  });

  const handleSubmitContactUs = async (data) => {
    try {
      console.log(data, "templateParams");
      const response = await emailjs.send(
        "service_4ruek8a",
        "template_geb5qtm",
        data,
        "user_jqilAXqo3WGAJA44b2E2h"
      );
      if (response.status === 200) {
        setShowContact(false);
        formikRef.current?.resetForm();
        alert("Message sent successfully");
      }
      console.log(response, "response");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>RE DAY SPA - Rejuvenation in Tranquility</title>
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
        <header className="nav-fix">
          <div className="container">
            <ul className="top-nav">
              {/*
              <li>
                <a href="#top" className="item-main-nav">
                  HOME
                </a>
              </li>
              */}
              <li>
                <a href="#about" className="item-main-nav">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#treatment" className="item-main-nav">
                  TREATMENT
                </a>
              </li>
              <li className="logo-placement">
                <a>
                  <img src="img/logo-white.png" className="img-fluid logo" />
                </a>
              </li>
              <li>
                <a href="#contact" className="item-main-nav">
                  CONTACT US
                </a>
              </li>
              <li>
                <Link href="/faq">
                  <a className="item-nav-last">FAQ</a>
                </Link>
              </li>
            </ul>
          </div>
        </header>

        <section
          id="top"
          className="main-hero"
          data-aos="fade-up"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dsq21hpwn/image/upload/v1672385242/Re%20Day%20Spa/main-hero_isqxgz.jpg)",
          }}
        >
          <div className="container">
            <div className="main-nav">
              <div className="left-side">
                {/*
                <a href="#top" className="item-main-nav">
                  HOME
                </a>
                */}
                <a href="#about" className="item-main-nav">
                  ABOUT
                </a>
                <a href="#treatment" className="item-main-nav">
                  TREATMENT
                </a>
              </div>
              <div className="center-side">
                <Link href="/">
                  <a>
                    <img src="img/logo.png" className="img-fluid logo" />
                  </a>
                </Link>
              </div>
              <div className="right-side">
                <a href="#contact" className="item-main-nav">
                  CONTACT US
                </a>
                <Link href="/faq">
                  <a className="item-nav-last">FAQ</a>
                </Link>
              </div>
            </div>

            <div className="hero-desc">
              <div className="title-hero mb24">Rejuvenation in Tranquility</div>
              <div className="re-desc mb24">
                LOCALLY SOURCED - CRAFTED FOR YOU
              </div>
              {/*
              <p className="mb24">
                We are bringing total relaxation experience of spa at comfort of
                your home, when you want it.
              </p>
              
              <Link href="home-treatment">
                <a className="btn btn-white mx-2">SEE HOME TREATMENT</a>
              </Link>
              */}
              <Link href="treatment-menu">
                <a className="btn btn-white mx-2">SEE TREATMENT MENU</a>
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="about-section" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-8 col-sm-8 col-md-8">
                <div className="about-title mb30">
                  Located in Seminyak, Re Day Spa is established to nurture
                  comfort in the middle of our hectic lives.
                </div>
                <p>
                  Re Day Spa has been serving both quality interpretations of
                  traditional balinese treatments and proven contemporary
                  rejuvenation. We invite you to leave the busy streets, shops
                  and bars behind you for a moment to feel the peaceful and
                  tranquil ambience of our spa that will help you to relax,
                  unwind and enjoy.{" "}
                </p>
                <p>
                  At Re Day Spa, the focus are to deliver genuine and friendly
                  treatments that are personally crafted for each individual
                  needs through holistic approach. Our utmost goal is to
                  accommodate you in a comfortable atmosphere and bring you to
                  the ultimate state of rejuvenation and relaxation.
                </p>
                <p>
                  We look forward to welcoming you at Re Day Spa and helping you
                  to feel refreshed and to experience genuine Balinese
                  hospitality.{" "}
                </p>
              </div>
              <div className="col-xl-2 col-sm-4 col-md-3">
                <div className="mb50">
                  <div className="sm-heading">PHONE</div>
                  <a
                    href="tel:+6281237375791"
                    target="_blank"
                    className="link-telephone"
                    rel="noreferrer"
                  >
                    {" "}
                    +62 812 3737 5791
                  </a>
                </div>
                <div className="mb50">
                  <div className="sm-heading">LOCATION</div>
                  <p>Jalan Petitenget 88D at Seminyak Kuta, Bali</p>
                </div>
                <div className="mb10">
                  <div className="sm-heading">HOURS</div>
                  <p>
                    <strong>10am - 10pm</strong>
                  </p>
                  {/*
                  <p>
                    Home Pampering
                    <br />
                    <strong>Last booking 7pm</strong>
                  </p>
                  */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="main-slider"
          className="swiper-container"
          data-aos="fade-up"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="slider-item"
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/dsq21hpwn/image/upload/v1672385242/Re%20Day%20Spa/slider-3_w0ybke.jpg)",
                }}
              >
                <div className="inner-slider-item">
                  <div className="ttl-journey">Journey</div>
                  <p>
                    The spa journey has been specifically designed with you in
                    mind and in order to provide you with the best spa
                    experience, we strongly recommend you to book your spa
                    treatment in advance. We also suggest that you arrive at
                    least 15 minutes before the start of your treatment to have
                    your spa experience as carefree as possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slider-item">
                <div className="inner-slider-item">
                  <p>
                    The therapist will take you to the treatment room and that
                    is the time for you to step into cocoon of well-being and
                    experience the world of Balinese charm. Most treatments will
                    start with a lime and Himalayan salt refreshing foot ritual
                    and end with a complimentary hot ginger tea.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slider-item">
                <div className="inner-slider-item">
                  <p>
                    A complementary drink and a scented cold towel will welcome
                    you upon your arrival. Re Day Spa ensure the quality for
                    each individual with a consultation prior to your treatment
                    that will help us to craft the treatment to your needs and
                    guide you towards the luxury experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </section>

        <section id="treatment" className="treatment-section">
          <div className="container" data-aos="fade-up">
            <div className="inner-ts">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="sm-heading">LET US INDULGE YOU</div>
                  <p className="mb50">
                    For every service is crafted to your needs.
                  </p>
                  <div className="ttl-treatment mb30">TREATMENT</div>
                  <p className="mb30">
                    At Re Day Spa, we offer you range of indulging treatments
                    from head to toe, starting with manicure and pedicure,
                    solacing facial for specific type of skin as well as
                    traditional and various signature Aromatherapy massages
                    based on your necessity.
                  </p>
                  <Link href="treatment-menu">
                    <a className="btn btn-dark mb50">SEE TREATMENT MENU</a>
                  </Link>
                  {/*
                  <div className="row mb40">
                    <div className="col-sm-6">
                      <Link href="home-treatment">
                        <a className="btn btn-dark">View home pampering menu</a>
                      </Link>
                    </div>
                    <div className="col-sm-6">
                      <Link href="treatment-menu">
                        <a className="btn btn-dark">View in-spa TREATMENT</a>
                      </Link>
                    </div>
                  </div>
                  */}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4">
                  <img
                    src="https://res.cloudinary.com/dsq21hpwn/image/upload/v1672385242/Re%20Day%20Spa/treatment-1_bucbix.jpg"
                    className="img-fluid mb30"
                  />
                </div>
                <div className="col-sm-4">
                  <img
                    src="https://res.cloudinary.com/dsq21hpwn/image/upload/v1672385242/Re%20Day%20Spa/treatment-2_m7lzkg.jpg"
                    className="img-fluid mb30"
                  />
                </div>
                <div className="col-sm-4">
                  <img
                    src="https://res.cloudinary.com/dsq21hpwn/image/upload/v1672385243/Re%20Day%20Spa/treatment-3_ukbxp0.jpg"
                    className="img-fluid mb30"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <p className="mb30">
                    Wide variety of individually crafted treatments are inspired
                    by local ingredients and based on authentic, age-old
                    Balinese traditions. For all treatments we use high quality
                    spa products that are composed of natural ingredients and
                    produced in Bali to ensure freshness, purity and efficacy.
                    The product compositions have been carefully selected to
                    suit the different treatment purposes and for their beauty
                    benefits and effectiveness.
                  </p>
                  <p>
                    Our therapists have undergone intensive and advanced
                    training to ensure a high quality standard of treatment
                    experience. They are here to make you feel comfortable and
                    to provide you with a tranquil tailored spa experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container" data-aos="fade-up">
            <div className="inner-ts">
              <div className="sm-heading">BOOK A PAMPERING TIME</div>
              <p className="mb50">
                <a
                  href="tel:+6281237375791"
                  className="link-telephone"
                  target="_blank"
                  rel="noreferrer"
                >
                  Call
                </a>{" "}
                or{" "}
                <a
                  href="https://wa.me/6281237375791?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20spa%20treatment%20you%20offer."
                  target="_blank"
                  className="link-telephone"
                  rel="noreferrer"
                >
                  WhatsApp us on +62 812 3737 5791
                </a>{" "}
                or book online by filling the form.
              </p>

              {/* BOOKING ONLINE BUTTON */}

              <div>
                <a
                  href="https://widget.zenwel.com/234592772/re-day-spa?lang=en&lid=2879"
                  className="btn btn-green mb40"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Online
                </a>
              </div>

              {/*
              <div className="ttl-contact mb30">CONTACT US</div>
              <button
                className="btn btn-green open-form mb40"
                type="button"
                onClick={() => {
                  setShowContact(!showContact);
                }}
              >
                Open Form
              </button>
              */}

              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.158782991845!2d115.15319791478414!3d-8.676445993765888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247132e6a30f7%3A0x51dfa61729bee047!2sRe%20Day%20Spa!5e0!3m2!1sen!2sid!4v1637738875940!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
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
                <a href="#top" className="link-menu-mobile">
                  HOME
                </a>
              </li>
              <li onClick={() => setShowMobileMenu(false)}>
                <a href="#about" className="link-menu-mobile">
                  ABOUT
                </a>
              </li>
              <li onClick={() => setShowMobileMenu(false)}>
                <a href="#treatment" className="link-menu-mobile">
                  TREATMENT
                </a>
              </li>
              <li onClick={() => setShowMobileMenu(false)}>
                <a href="#contact" className="link-menu-mobile">
                  CONTACT US
                </a>
              </li>
              <li>
                <Link href="/faq">
                  <a className="link-menu-mobile-last">FAQ</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <a
              href="https://widget.zenwel.com/234592772/re-day-spa?lang=en&lid=2879"
              className="btn btn-darkgreen"
              target="_blank"
              rel="noreferrer"
            >
              Book Online
            </a>
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

        {/*
        <div className={clsx("overlay", showContact && "overlayshow")}></div>
        <div className={clsx("popup-wrapper", showContact && "showing")}>
          <div className="popup-card">
            <div className="d-flex align-items-center justify-content-between mb30">
              <div className="header-popup">Contact Us</div>
              <button
                className="btn btn-close"
                onClick={() => {
                  setShowContact(!showContact);
                }}
              ></button>
            </div>
            <Formik
              innerRef={formikRef}
              onSubmit={handleSubmitContactUs}
              validationSchema={contactUsSchema}
              initialValues={{
                customer_firstName: "",
                customer_lastName: "",
                customer_message: "",
                customer_email: "",
                customer_subject: "",
              }}
            >
              {({ values, handleChange, handleSubmit, isValid }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="label-form">Name *</label>
                    <span className="ft-sm mb15">Hi! What is your name?</span>
                    <div className="row">
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          name="customer_firstName"
                          value={values.customer_firstName}
                          onChange={handleChange}
                        />
                        <small>First Name</small>
                        <ErrorMessage
                          name="customer_firstName"
                          render={(errorMessage) => <p className="text-error">{errorMessage}</p>}
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          name="customer_lastName"
                          value={values.customer_lastName}
                          onChange={handleChange}
                        />
                        <small>Last Name</small>
                        <ErrorMessage
                          name="customer_lastName"
                          render={(errorMessage) => <p className="text-error">{errorMessage}</p>}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label-form">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email address"
                      name="customer_email"
                      value={values.customer_email}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="customer_email"
                      render={(errorMessage) => <p className="text-error">{errorMessage}</p>}
                    />
                  </div>
                  <div className="form-group">
                    <label className="label-form">Subject *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your subject"
                      name="customer_subject"
                      value={values.customer_subject}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="customer_message"
                      render={(errorMessage) => <p className="text-error">{errorMessage}</p>}
                    />
                  </div>
                  <div className="form-group">
                    <label className="label-form">Message *</label>
                    <textarea
                      className="form-control"
                      rows="6"
                      name="customer_message"
                      value={values.customer_message}
                      onChange={handleChange}
                      placeholder="How can we help? Please leave a time and date for reserved?"
                    ></textarea>
                    <ErrorMessage
                      name="customer_message"
                      render={(errorMessage) => <p className="text-error">{errorMessage}</p>}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    {loading ? (
                      "Submitting..."
                    ) : (
                      <input type="submit" className="btn btn-green" value="SUBMIT" disabled={!isValid} />
                    )}
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        */}

        <div className="container">
          {/** <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-R4VTT4WEGS"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-R4VTT4WEGS');
            `}
          </Script>
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
