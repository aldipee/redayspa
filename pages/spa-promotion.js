/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <title> In Spa Promotion - RE DAY SPA - Rejuvenation in Tranquility</title>
        <meta name='description' content='' />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='author' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />

        <meta property='og:title' content='' />
        <meta property='og:type' content='' />
        <meta property='og:url' content='' />
        <meta property='og:image' content='' />
        <meta property='og:description' content='' />
        <meta property='og:site_name' content='' />

        <link rel='icon' type='image/png' href='favicon.png' />
        <link rel='apple-touch-icon' href='icon.png' />

        <link rel='stylesheet' href='css/bootstrap.min.css' />
        <link rel='stylesheet' href='css/normalize.css' />
        <link rel='stylesheet' href='css/swiper.min.css' />
        <link rel='stylesheet' href='css/aos.css' />
        <link rel='stylesheet' href='css/main.css' />
      </Head>

      <body>
        <section id='top' className='inner-hero' style={{ backgroundImage: 'url(img/inner-hero.jpg)' }}>
          <div className='container'>
            <div className='main-nav'>
              <div className='left-side'>
                <Link href='/'>
                  <a className='item-main-nav'>HOME</a>
                </Link>
                <Link href='/#about'>
                  <a className='item-main-nav'>ABOUT</a>
                </Link>
                <Link href='/#treatment'>
                  <a className='item-main-nav'>TREATMENT</a>
                </Link>
              </div>
              <div className='center-side'>
                <Link href='/'>
                  <a>
                    <img src='img/logo.png' className='img-fluid logo' alt='Logo' />
                  </a>
                </Link>
              </div>
              <div className='right-side'>
                <Link href='/#contact'>
                  <a className='item-main-nav'>CONTACT US</a>
                </Link>
                <Link href='/cleanlines-guidelines'>
                  <a className='item-nav-last'>CLEANLINESS GUIDELINES</a>
                </Link>
              </div>
            </div>
            <div className='hero-desc'>
              <div className='title-hero mb24'>In-Spa Promotion</div>
            </div>
          </div>
        </section>

        <section className='about-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 offset-lg-2'>
                <div className='treatment-item' data-aos='fade-up'>
                  <div className='box-promo mb50'>
                    <div className='ttl-promo mb24'>PACKAGE PROMO</div>
                    <p className='font-bold dark-green'>CHOOSE ANY BODY MASSAGE YOU LIKE & YOU CAN ADD SCRUB FOR:</p>
                    <div className='row justify-content-center'>
                      <div className='col-6 col-sm-3'>
                        <p className='font-bold green mb5'>60 min</p>
                        <div className='discount'>
                          360K <span>480K</span>
                        </div>
                        <p className='ft-14 green'>
                          Deep Tissue
                          <br />+ 15K
                        </p>
                      </div>
                      <div className='col-6 col-sm-3'>
                        <p className='font-bold green mb5'>90 min</p>
                        <div className='discount'>
                          450K <span>540K</span>
                        </div>
                        <p className='ft-14 green'>
                          Deep Tissue
                          <br />+ 15K
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='text-center mb50'>
                    <a href='tel:+6281237375791' className='btn btn-dark mb50'>
                      CALL TO BOOK SPOT
                    </a>
                    <div className='sm-heading mb50'>OR</div>
                    <a
                      href='https://wa.me/6281237375791?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20in-spa%20promotion%20you%20have%20right%20now'
                      target='_blank'
                      className='btn btn-dark'
                      rel='noreferrer'
                    >
                      FEEL FREE TO WHATSAPP US
                    </a>
                  </div>
                </div>

                <div className='treatment-item' data-aos='fade-up'>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div className='treatment-heading mb24'>BODY MASSAGE</div>
                      <div className='text-center mb50'>
                        <div className='sm-heading'>BALINESE MASSAGE</div>
                        <p className='green italic'>Crowd Favourite</p>
                        <p>
                          Our take on traditional Balinese techniques applies combination of acupressure, kneading and
                          invigorating hand movements using our unique blended oil to stimulate blood circulation,
                          increase flexibility and ultimately relax your entire body.
                        </p>
                        <div className='row justify-content-center'>
                          <div className='col-6 col-sm-3'>
                            <p className='font-bold green mb5'>60 min</p>
                            <div className='discount'>
                              240K <span>280K</span>
                            </div>
                          </div>
                          <div className='col-6 col-sm-3'>
                            <p className='font-bold green mb5'>90 min</p>
                            <div className='discount'>
                              340K <span>400K</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='text-center mb50'>
                        <div className='sm-heading'>AROMATHERAPY MASSAGE</div>
                        <p className='italic green'>Pick your own aromatherapy oil</p>
                        <p>
                          Relax and heal with our beautiful blend of Wellbeing oil. Allow the fragrance to induce calm
                          and to help your body surrender to an invigorating combination of Balinese, Reiki and
                          Aromatherapy techniques.
                        </p>
                        <div className='row justify-content-center'>
                          <div className='col-6 col-sm-3'>
                            <p className='font-bold green mb5'>60 min</p>
                            <div className='discount'>
                              240K <span>280K</span>
                            </div>
                          </div>
                          <div className='col-6 col-sm-3'>
                            <p className='font-bold green mb5'>90 min</p>
                            <div className='discount'>
                              340K <span>400K</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='text-center mb50'>
                        <div className='sm-heading'>DEEP TISSUE RUBDOWN</div>
                        <p className='italic green'>Firmer Choice</p>
                        <p>
                          Deep and relaxing massage therapy that focuses on realigning deeper layers of muscles and
                          connective tissue. With the uplifting effects of the fresh and potent Clove and Ginger infused
                          blended oil, the result is an overall grounding effect on the body and mind.
                        </p>
                        <div className='row justify-content-center'>
                          <div className='col-6 col-sm-3'>
                            <p className='font-bold green mb5'>60 min</p>
                            <div className='discount'>
                              255K <span>300K</span>
                            </div>
                          </div>
                          <div className='col-6 col-sm-3'>
                            <p className='font-bold green mb5'>90 min</p>
                            <div className='discount'>
                              365K <span>430K</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='text-center mb50'>
                        <div className='sm-heading'>ADD ON SCRUB</div>
                        <p className='italic green'>Lulur / Coconut / Coffee</p>
                        <p>Applicable to add on with any of the massages</p>
                        <p className='font-bold green'>200 IDR</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='treatment-item border-0' data-aos='fade-up'>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div className='treatment-heading mb24'>FOOT MASSAGE</div>
                      <div className='text-center mb50'>
                        <div className='sm-heading'>ACHING FOOT RELAXER</div>
                        <p className='green italic'>Rub away the soreness</p>
                        <p>
                          Our holistic foot massage is performed with firm stroke to help you release fatigue and leave
                          leg muscles feel lighten. Complemented with a warm towel to cocoon your feet, set free of the
                          aching.
                        </p>
                        <div className='row justify-content-center'>
                          <div className='col-6 col-sm-3'>
                            <p className='font-bold green mb5'>60 min</p>
                            <div className='discount'>
                              170K <span>200K</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='text-center mb15'>
                        <div className='sm-heading'>FOOT REFLEXOLOGY</div>
                        <p className='green italic'>Focus on acupressure point of your sole</p>
                        <p>
                          A combination of thumb-and-finger technique delivers an invigorating and relaxing massage. A
                          warm towel to cocoon your feet, leaves you feeling totally relaxed and restores your body’s
                          natural state of equilibrium.
                        </p>
                        <div className='row justify-content-center'>
                          <div className='col-6 col-sm-3'>
                            <p className='font-bold green mb5'>60 min</p>
                            <div className='discount'>
                              170K <span>200K</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='footer'>
          <div className='container'>
            <p>RE DAY SPA, JL. PETITENGET 88D, BALI, 80361, INDONESIA</p>
            <p className='mb30'>
              {' '}
              <a href='tel:+6281248788391' className='link-footer'>
                +62812 3737 5791
              </a>
              <a href='mailto:care@redayaspabali.com' className='link-footer'>
                CARE@REDAYSPABALI.COM
              </a>
            </p>
            <ul className='social'>
              <li>
                <a
                  href='https://www.facebook.com/pages/Re-Day-Spa/821996157852429'
                  target='_blank'
                  className='social-link'
                  rel='noreferrer'
                >
                  <img src='img/ico-facebook.svg' className='img-fluid' />
                </a>
              </li>
              <li>
                <a href='https://twitter.com/ReDaySpa' className='social-link' target='_blank' rel='noreferrer'>
                  <img src='img/ico-twitter.svg' className='img-fluid' />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/redayspa/' className='social-link' target='_blank' rel='noreferrer'>
                  <img src='img/ico-instagram.svg' className='img-fluid' />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div className='button-toggle'>
          <button className='btn btn-toggle'>
            <img src='img/toggle.svg' className='img-fluid' />
          </button>
        </div>

        <div className='mobile-menu'>
          <div className='mm-header'>
            <Link href='/'>
              <a>
                <img src='img/logo.png' className='logo-menu' />
              </a>
            </Link>
            <div className='btn-close-menu'>
              <button className='btn btn-for-close'>
                <img src='img/close.svg' className='img-fluid' />
              </button>
            </div>
          </div>
          <div className='mm-content'>
            <ul className='list-menu-mobile'>
              <li>
                <Link href='/'>
                  <a className='link-menu-mobile'>HOME</a>
                </Link>
              </li>
              <li>
                <Link href='/#about'>
                  <a className='link-menu-mobile'>ABOUT</a>
                </Link>
              </li>
              <li>
                <Link href='/#treatment'>
                  <a className='link-menu-mobile'>TREATMENT</a>
                </Link>
              </li>
              <li>
                <Link href='/#contact'>
                  <a className='link-menu-mobile'>CONTACT US</a>
                </Link>
              </li>
              <li>
                <Link href='/cleanliness-guidelines'>
                  <a className='link-menu-mobile-last'>CLEANLINESS GUIDELINES</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='mm-footer'>
            <p className='mb30'>
              {' '}
              <a href='tel:+6281248788391' className='link-footer'>
                +62812 3737 5791
              </a>
              <a href='mailto:care@redayaspabali.com' className='link-footer'>
                CARE@REDAYSPABALI.COM
              </a>
            </p>
            <ul className='social'>
              <li>
                <a
                  href='https://www.facebook.com/pages/Re-Day-Spa/821996157852429'
                  target='_blank'
                  className='social-link'
                  rel='noreferrer'
                >
                  <img src='img/ico-facebook.svg' className='img-fluid' />
                </a>
              </li>
              <li>
                <a href='https://twitter.com/ReDaySpa' className='social-link' target='_blank' rel='noreferrer'>
                  <img src='img/ico-twitter.svg' className='img-fluid' />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/redayspa/' className='social-link' target='_blank' rel='noreferrer'>
                  <img src='img/ico-instagram.svg' className='img-fluid' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <script src='js/vendor/jquery-3.5.1.min.js'></script>
        <script src='js/vendor/bootstrap.bundle.min.js'></script>
        <script src='js/vendor/modernizr-3.11.2.min.js'></script>
        <script src='js/vendor/aos.js'></script>
        <script src='js/vendor/swiper.min.js'></script>
        <script src='js/plugins.js'></script>
        <script src='js/main.js'></script>
      </body>
    </>
  );
}
