/* eslint-disable @next/next/no-sync-scripts */
import Link from "next/link";
import SEOHead from "../components/SEOHead";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Get Me Pampered - Re Day Spa Bali | Luxury Spa Treatments in Seminyak"
        description="Experience ultimate relaxation at Re Day Spa Bali. Book your luxury spa treatments in Seminyak. Professional Balinese massage, facials, and body treatments for complete rejuvenation."
        keywords="spa bali, massage seminyak, balinese massage, spa treatment bali, re day spa, luxury spa bali, spa seminyak, massage treatment bali"
        author="Re Day Spa"
        ogTitle="Get Me Pampered - Re Day Spa Bali | Luxury Spa Treatments in Seminyak"
        ogType="website"
        ogUrl="https://remassagestudio.com/get-me-pampered"
        ogImage="https://res.cloudinary.com/dnnrll6sl/image/upload/v1703994196/main-hero_quxs5t.jpg"
        ogDescription="Experience ultimate relaxation at Re Day Spa Bali. Book your luxury spa treatments in Seminyak. Professional Balinese massage, facials, and body treatments for complete rejuvenation."
        ogSiteName="Re Day Spa"
        canonicalUrl="https://remassagestudio.com/get-me-pampered"
      />

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
                <a
                  href="https://widget.zenwel.com/234592772/re-day-spa?lang=en"
                  className="btn btn-bordered"
                >
                  BOOK ONLINE
                </a>
                <a
                  href="https://wa.me/6282266698020?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20spa%20treatment%20you%20offer."
                  className="btn btn-bordered"
                >
                  REACH OUR WHATSAPP
                </a>
                <Link href="treatment-menu">
                  <a className="btn btn-bordered">SEE ALL TREATMENTS</a>
                </Link>
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
