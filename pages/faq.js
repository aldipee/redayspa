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
                <Link href="/treatment-menu">
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
                <Link href="/faq">
                  <a className="item-nav-last">FAQ</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="row justify-content-center">
            <div className="col col-lg-8 px-4 px-lg-0">
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
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="bookingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBookingFour"
                        aria-expanded="false"
                        aria-controls="collapseBookingFour"
                      >
                        4. What is your cancellation policy?
                      </button>
                    </h2>
                    <div
                      id="collapseBookingFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="bookingFour"
                      data-bs-parent="#accordionBooking"
                    >
                      <div className="accordion-body">
                        <p>
                          <b>
                            <u>
                              All payments made are strictly non-refundable.
                            </u>
                          </b>{" "}
                          Please make sure you allocate/choose your time wisely
                          and fully committed before making an appointment with
                          us.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="bookingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBookingFive"
                        aria-expanded="false"
                        aria-controls="collapseBookingFive"
                      >
                        5. When do I need to arrive before my appointment?
                      </button>
                    </h2>
                    <div
                      id="collapseBookingFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="bookingFive"
                      data-bs-parent="#accordionBooking"
                    >
                      <div className="accordion-body">
                        <p>
                          You need to come at least 15 minutes before your
                          scheduled appointment. It is because you need to
                          fill-in a consultation form to better serve and
                          personalise your treatment. If you are late for your
                          appointment, you will only receive the remainder of
                          what is left of your service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="bookingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBookingSix"
                        aria-expanded="false"
                        aria-controls="collapseBookingSix"
                      >
                        6. What if I am coming late to my appointment?
                      </button>
                    </h2>
                    <div
                      id="collapseBookingSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="bookingSix"
                      data-bs-parent="#accordionBooking"
                    >
                      <div className="accordion-body">
                        <p>
                          Arriving late will mean that your treatment time is
                          shortened. Your treatment will end on time, so the
                          next guest will not be delayed. The full value of your
                          treatment will be charged. Please plan your travel
                          time wisely to get to our spa location.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="bookingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBookingSeven"
                        aria-expanded="false"
                        aria-controls="collapseBookingSeven"
                      >
                        7. Can I reschedule my appointment?
                      </button>
                    </h2>
                    <div
                      id="collapseBookingSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="bookingSeven"
                      data-bs-parent="#accordionBooking"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, you can reschedule your appointment. But you need
                          to notify us at least 3 hours prior to your treatment.
                          Reschedule is based on the time slot and therapist
                          availability. Rescheduling less than 3 hours notice is
                          not allowed.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="bookingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBookingEight"
                        aria-expanded="false"
                        aria-controls="collapseBookingEight"
                      >
                        8. Do you sell gift vouchers?
                      </button>
                    </h2>
                    <div
                      id="collapseBookingEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="bookingEight"
                      data-bs-parent="#accordionBooking"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, we do sell gift voucher. You can contact our
                          reservation team for more detail information
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="bookingNine">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBookingNine"
                        aria-expanded="false"
                        aria-controls="collapseBookingNine"
                      >
                        9. Does RE Day Spa have a Membership program?
                      </button>
                    </h2>
                    <div
                      id="collapseBookingNine"
                      className="accordion-collapse collapse"
                      aria-labelledby="bookingNine"
                      data-bs-parent="#accordionBooking"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, we do have a Membership Program for our loyal
                          customers. You can contact our reservation team for
                          more details on the Membership Program price list and
                          benefits.
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
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="etiquetteFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEtiquetteFour"
                        aria-expanded="false"
                        aria-controls="collapseEtiquetteFour"
                      >
                        4. Can I choose to have male or female therapist?
                      </button>
                    </h2>
                    <div
                      id="collapseEtiquetteFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="etiquetteFour"
                      data-bs-parent="#accordionEtiquette"
                    >
                      <div className="accordion-body">
                        <p>We only have female therapists at our spa.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="etiquetteFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEtiquetteFive"
                        aria-expanded="false"
                        aria-controls="collapseEtiquetteFive"
                      >
                        5. Do I have to completely undress? What should I wear
                        during a body massage?
                      </button>
                    </h2>
                    <div
                      id="collapseEtiquetteFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="etiquetteFive"
                      data-bs-parent="#accordionEtiquette"
                    >
                      <div className="accordion-body">
                        <p>
                          You may undress to your level of comfort. We do
                          provide single use/disposable panties for customers.
                          Your therapist will leave the room so you can undress
                          and lie on the massage bed, and you will be asked to
                          cover your body with sarong provided. The therapist
                          will only uncover the parts they are working on, so
                          you will have privacy.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="etiquetteSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEtiquetteSix"
                        aria-expanded="false"
                        aria-controls="collapseEtiquetteSix"
                      >
                        6. Should I shower after a massage?
                      </button>
                    </h2>
                    <div
                      id="collapseEtiquetteSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="etiquetteSix"
                      data-bs-parent="#accordionEtiquette"
                    >
                      <div className="accordion-body">
                        <p>
                          We recommend not to shower right after a massage
                          session. The water temperature can cause your muscles
                          to tense up, which counter the benefit of massage
                          itself. Heat from hot shower also can also increase
                          the risk of dehydration. And by taking a shower
                          immediately, you will wash off the massage oils that
                          are supposed to be very good for your skin and health.
                          We recommend you wait at least one hour to take a
                          shower after your massage session.
                          <br />
                          If you feel uncomfortable with the oil, instead of
                          showering, you can ask our therapist to wipe some of
                          the excess oil with damp cloth after your massage
                          session.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="etiquetteSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEtiquetteSeven"
                        aria-expanded="false"
                        aria-controls="collapseEtiquetteSeven"
                      >
                        7. Can I bring my kids to the spa?
                      </button>
                    </h2>
                    <div
                      id="collapseEtiquetteSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="etiquetteSeven"
                      data-bs-parent="#accordionEtiquette"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes! Having a fun spa day with kids can be a bonding
                          experience. We love to welcome you and your kids to
                          our spa. We offer spa treatments for kids to also
                          enjoy with their parents.
                          <br />
                          Kids from age 3+ can come and have treatments at our
                          spa and an adult must be present in the room whilst
                          the treatments are performed.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="etiquetteEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEtiquetteEight"
                        aria-expanded="false"
                        aria-controls="collapseEtiquetteEight"
                      >
                        8. Should I tip?
                      </button>
                    </h2>
                    <div
                      id="collapseEtiquetteEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="etiquetteEight"
                      data-bs-parent="#accordionEtiquette"
                    >
                      <div className="accordion-body">
                        <p>
                          In Bali, tipping your therapist is a nice gesture, but
                          you do not have to do it if you do not want to.
                          Tipping is optional, and you can adjust the amount
                          based on how happy you are with the treatment. It is
                          all up to you!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="etiquetteNine">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEtiquetteNine"
                        aria-expanded="false"
                        aria-controls="collapseEtiquetteNine"
                      >
                        9. Where can I store my belongings?
                      </button>
                    </h2>
                    <div
                      id="collapseEtiquetteNine"
                      className="accordion-collapse collapse"
                      aria-labelledby="etiquetteNine"
                      data-bs-parent="#accordionEtiquette"
                    >
                      <div className="accordion-body">
                        <p>
                          We have lockers to store customers’ belongings, each
                          locker has a key to lock the locker, and customers
                          will bring the key with them during the treatment.
                          However we recommend that you leave any valuable items
                          at home/accomodation, as we are not held responsible
                          for any loss incurred.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="etiquetteTen">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEtiquetteTen"
                        aria-expanded="false"
                        aria-controls="collapseEtiquetteTen"
                      >
                        10. Do you have parking space?
                      </button>
                    </h2>
                    <div
                      id="collapseEtiquetteTen"
                      className="accordion-collapse collapse"
                      aria-labelledby="etiquetteTen"
                      data-bs-parent="#accordionEtiquette"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, we do have parking space for car and motorbike.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <p className="text-center">
                <strong>
                  Have more questions? Don’t hesitate to message us
                </strong>
              </p>
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
                <Link href="/treatment-menu">
                  <a className="link-menu-mobile">TREATMENT</a>
                </Link>
              </li>
              <li onClick={() => setShowMobileMenu(false)}>
                <Link href="/#contact">
                  <a className="link-menu-mobile">CONTACT US</a>
                </Link>
              </li>
              <li>
                <Link href="faq">
                  <a className="link-menu-mobile-last">FAQ</a>
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
