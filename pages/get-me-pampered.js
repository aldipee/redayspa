/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>
          {" "}
          GET ME PAMPERED - RE DAY SPA - Rejuvenation in Tranquility
        </title>
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
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="inner-wrapper-link mb60">
                <p className="mb30">
                  <Link href="/">
                    <a className="w-100">
                      <img
                        src="https://res.cloudinary.com/dnnrll6sl/image/upload/v1704902543/logo-green_rfi8ls.svg"
                        className="img-fluid"
                        alt="re day spa logo"
                      />
                    </a>
                  </Link>
                </p>
                <p className="mb30">
                  <a
                    href="https://www.instagram.com/remassagestudio/"
                    target="_blank"
                    className="link-telephone"
                    rel="noreferrer"
                  >
                    @REMASSAGESTUDIO
                  </a>
                </p>
                {/*
                <div className="mb30 p-3 ft-12 italic text-justify bg-main text-white">
                  <p>
                    We carry out the <strong>High Season Policy</strong> for bookings in all treatments
                  </p>
                  <p>
                    Please contact us for available time and pay down payment to ensure you get the time and space.
                  </p>
                  <p>
                    We do this to ensure guests who are committed to taking their time to relax really get what they want.
                  </p>
                  <p>
                    We hope you understand and respect the time of everyone involved. 🙏
                  </p>
                </div>
                */}
                <a
                  href="https://widget.zenwel.com/234592772/re-day-spa?lang=en"
                  className="btn btn-bordered"
                >
                  BOOK ONLINE
                </a>
                <a
                  href="https://wa.me/6281237375791?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20spa%20treatment%20you%20offer."
                  className="btn btn-bordered"
                >
                  REACH OUR WHATSAPP
                </a>
                <Link href="treatment-menu">
                  <a className="btn btn-bordered">SEE ALL TREATMENTS</a>
                </Link>

                {/*
                <Link href="home-treatment">
                  <a className="btn btn-bordered">SEE HOME TREATMENT MENU</a>
                </Link>
                
                <Link href="cleanlines-guidelines">
                  <a className="btn btn-bordered">SEE CLEANLINES GUIDELINES</a>
                </Link>
                */}

                <a
                  href="https://www.google.com/maps/place/Re+Day+Spa/@-8.676539,115.155384,15z/data=!4m2!3m1!1s0x0:0x51dfa61729bee047?sa=X&ved=2ahUKEwiInvnnl9zqAhUv6nMBHSxnBWMQ_BIwDHoECBgQCA"
                  className="btn btn-bordered"
                  target="_blank"
                  rel="noreferrer"
                >
                  SEE OUR LOCATION
                </a>

                <p className="ft-12 mb-0">👇 Please read before you book 👇</p>

                <Link href="faq">
                  <a className="btn btn-bordered">FAQ</a>
                </Link>
              </div>
            </div>
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
