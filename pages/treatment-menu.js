/* eslint-disable @next/next/no-sync-scripts */
import clsx from 'clsx';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <title> Home Treatment - RE DAY SPA - Rejuvenation in Tranquility</title>
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
                    <img src='img/logo.png' className='img-fluid logo' />
                  </a>
                </Link>
              </div>
              <div className='right-side'>
                <Link href='/#contact'>
                  <a className='item-main-nav'>CONTACT US</a>
                </Link>
                <Link href='cleanlines-guidelines'>
                  <a className='item-nav-last'>CLEANLINESS GUIDELINES</a>
                </Link>
              </div>
            </div>

            <div className='hero-desc'>
              <div className='title-hero mb24'>Treatment Menu</div>
            </div>
          </div>
        </section>

        <section className='about-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='treatment-item' data-aos='fade-up'>
                  <div className='row g-5'>
                    <div className='col-sm-6'>
                      <div className='treatment-heading mb24'>REWELLNESS MASSAGE</div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>BALINESE MASSAGE</div>
                        <p>
                          Our take on traditional Balinese techniques applies combination of acupressure, kneading and
                          invigorating hand movements using our unique blended oil to stimulate blood circulation,
                          increase flexibility and ultimately relax your entire body.
                        </p>
                        <p className='font-bold green'>
                          60 / 90 / 120 min
                          <br />
                          280 / 400 / 500 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>AROMASENSE MASSAGE</div>
                        <p>
                          Relax and heal with our beautiful blend of aromatherapy oil with 100% natural essential oils.
                          Choose one of our four blends to induce calm and help your body surrender to an invigorating
                          combination of Balinese, Reiki, and Aromatherapy techniques.
                        </p>
                        <p className='italic green'>
                          Essential oil options:
                        </p>
                        <p>Energize / Detox / Wellbeing / Tranquility</p>
                        {/* <p className='italic green'>Wellbeing & Balance</p>
                        <p>
                          Relax and heal with our beautiful blend of Wellbeing oil. Allow the fragrance to induce calm
                          and to help your body surrender to an invigorating combination of Balinese, Reiki and
                          Aromatherapy techniques.
                        </p> 
                      </div>
                      <div className='text-center mb30'>
                        <p className='italic green'>Energize & Reboot</p>
                        <p>
                          Experience our signature massage and allow yourself to slip into oblivion while your stress
                          melts under a warm coat of Vetiver infused blended oil. A full body massage, employing
                          aromatherapy technique, is a truly tranquil experience for those who need a break from their
                          busy life, or a long day of travelling.
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='italic green'>Detoxify & Recharge</p>
                        <p>
                          Using our unique blend of Detoxifying oil, this therapeutic experience, in the form of an
                          Aromatherapy massage, applies pressure point massage techniques to relax and to revitalize
                          your body.
                        </p> */}
                        <p className='font-bold green'>
                          60 / 90 / 120 min
                          <br />
                          280 / 400 / 500 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>DEEP TISSUE RUBDOWN</div>
                        <p>
                        Deep and relaxing massage therapy that focuses on realigning deeper layers of muscles and connective tissue to relieve tension, reduce stress and re-align the body as a whole. 
                        </p>
                        <p className='font-bold green'>
                          60 / 90 / 120 min
                          <br />
                          300 / 430 / 540 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>DRY MASSAGE</div>
                        <p>
                          Oil-free massage with finger pressure technique to massage the body at specific points to focus on the meridian lines or nerve flow from head to toe.
                        </p>
                        <p className='font-bold green'>
                          60 / 90 / 120 min
                          <br />
                          300 / 430 / 540 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>HOT STONE MASSAGE</div>
                        <p>
                          Placing hot stone at body relaxation points with full body massage to reach deeper muscle
                          layers. Experience relieve of stress, eases muscle tension and increase in blood circulation.
                        </p>
                        <p className='font-bold green'>
                          90 / 120 min
                          <br />
                          450 / 650 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>FOUR HANDS MASSAGE</div>
                        <p>
                        A perfectly choreographed Balinese massage technique performed by two therapists at the same time, and in perfect harmony creating a unique and unforgettable massage therapy for you.
                        </p>
                        <p className='font-bold green'>
                          60 / 90 min
                          <br />
                          470 / 600 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>PRENATAL MASSAGE</div>
                        <p>
                          Gentle, side-lying massage with aromatherapy technique for mom-to-be after their first trimester. Helps to reduce swelling, nausea, and muscle tension with a unique blend of pregnancy-safe aromatic massage oil.
                        </p>
                        <p className='font-bold green'>
                          60 / 90 min
                          <br />
                          300 / 430 IDR
                        </p>
                      </div>
                    </div>

                    <div className='col-sm-6'>
                      <div className='treatment-heading mb24'>REVITALIZE RITUAL</div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>THE BALI SPLENDOR</div>
                        <p>
                          Experience the authentic Balinese beauty regime in our spa. Enjoy an invigorating Balinese massage continues with our traditional Lulur blend to eliminate the dead skin cells and leave your skin feeling soft and radiant.
                        </p>
                        <p className='italic green'>Treatment Steps</p>
                        <p>
                          Refreshing Foot Bath + Balinese Massage + Lulur + Shower & Body Lotion
                        </p>
                        <p className='font-bold green'>
                          1 hr 45 min
                          <br />
                          430 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>TRANQUIL HAVEN</div>
                        <p>
                          Our signature Detox massage oil blend, combined with our signature massage technique will stimulate the release and elimination of toxins from your body. Topped-off with our Coffee Scrub to resurface your skin, you will feel refreshed, revived, and toned as your journey is concluded.
                        </p>
                        <p className='italic green'>Treatment Steps</p>
                        <p>
                          Refreshing Foot Bath + Aromasense Massage + Coffee Scrub + Shower & Body Lotion
                        </p>
                        <p className='font-bold green'>
                          1 hr 45 min
                          <br />
                          430 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>THE BODY LUSTER</div>
                        <p>
                          The perfect package to bring back your skin luster, great for dry-flaky skin. Start the treatment with energizing Aromasense massage and then slush out the dull skin with our Coconut & Vanilla Scrub. Say hello to supple radiant skin afterward.
                        </p>
                        <p className='italic green'>Treatment Steps</p>
                        <p>
                          Refreshing Foot Bath + Aromasense Massage + Coconut & Vanilla Scrub + Shower & Body Lotion
                        </p>
                        <p className='font-bold green'>
                          1 hr 45 min
                          <br />
                          430 IDR
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='treatment-item' data-aos='fade-up'>
                  <div className='row g-5'>
                    <div className='col-sm-6'>
                      <div className='treatment-heading mb24'>REJUVENATE FACIAL</div>
                      <div className='text-center mb30'>
                        <p className='mb30'>
                          All facial treatments include a relaxing scalp massage and full facial massage to stimulate blood circulation, firm facial contour, and address each individual facial concern.
                        </p>
                        <div className='sm-heading'>REHYDRATING FACIAL</div>
                        <p>
                          Gentle deep cleansing and exfoliation help the skin to improve the absorption of a nourishing moisturizing mask. Focuses on replenishing dry skin by providing vital nutrients that will restore skin hydration so that skin becomes more supple and healthy.
                        </p>
                        <p className='font-bold green'>
                          60 min
                          <br />
                          425 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>REBALANCING FACIAL</div>
                        <p>
                          An intensive clarifying treatment specifically for oily/acne-prone skin. Incorporates steams, alongside facial massage and calming facial mask, this facial treatment aims to help repair the skin barrier to achieve balance and a clearer complexion.
                        </p>
                        <p className='font-bold green'>
                          60 min
                          <br />
                          425 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>REGENERATING FACIAL</div>
                        <p>
                          Intensive boost for dull/distressed skin, with a facial massage to help stimulate new collagen formation. This will help with skin regeneration, improve dark-spots/hyperpigmentation, and leaves the skin radiant and plump after treatment.
                        </p>
                        <p className='font-bold green'>
                          60 min
                          <br />
                          450 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>TOTAL HOLISTIC FACIAL</div>
                        <p>
                          A soothing aromatherapy back massage using essential oil, is followed by a Rējuvenate Facial
                          tailored to your specific needs. While you are being indulged with Cell Activator Mask, a
                          deeply relaxing hand massage is performed so you are left calm and comfortable.
                        </p>
                        <p className='font-bold green'>
                          90 min
                          <br />
                          500 IDR
                        </p>
                      </div>
                    </div>

                    <div className='col-sm-6'>
                      <div className='treatment-heading mb24'>REPLENISH TREATMENT</div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>HUFF THE PUFF</div>
                        <p>
                          A blissful firming and hydrating treatment using specific products rich in Bio-Aloe Vera
                          Extract and Collagen, which help to reduce the appearance of dark circles and fine lines
                          around the eye area.
                        </p>
                        <p className='font-bold green'>
                          30 min
                          <br />
                          300 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>HERITAGE HAIR CARE</div>
                        <p>
                          A famous Indonesian creambath for hair, includes hair wash, and relaxing scalp massage with intensive hair treatment cream from Makarizo. Finished with another round of hair wash and conditioner, plus hair tonic to strengthen hair and healthy scalp.
                        </p>
                        <p className='italic green'>
                          Cream options:
                        </p>
                        <p>
                          Dark Chocolate: deep moisturizing/dry hair
                          <br />
                          Strawberry Yogurt: shine boosting/dull hair
                          <br />
                          Mint Sorbet: itchy scalp/dandruff
                          <br />
                          Green Tea Butter: intensive repair/damaged hair
                          <br />
                          Vanilla Milk: nourishing/frizzy hair
                        </p>
                        <p className='font-bold green'>
                          60 min
                          <br />
                          300 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>INTENSELY NOURISHING HAIR WITH HOT OIL</div>
                        <p>
                          Rich warm olive oil infused with fresh pandanus leaves, is massaged into the hair, releasing
                          tension, conditioning the scalp, and leaving hair shiny and nourished. It also comes with a
                          deeply relaxing hand, neck and shoulder massage.
                        </p>
                        <p className='font-bold green'>
                          60 min
                          <br />
                          300 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>INTUITIVE HEAD PAMPER</div>
                        <p>
                          A calming yet energizing intuitive head massage focusing upon vital energy points. Warm
                          infused olive oil with fresh pandanus leaves will help to reduce tensions and increase
                          circulation to leave you with a profound sense of wellbeing.
                        </p>
                        <p className='font-bold green'>
                          30 min
                          <br />
                          120 IDR
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='treatment-item' data-aos='fade-up'>
                  <div className='row g-5'>
                    <div className='col-sm-6'>
                      <div className='treatment-heading mb24'>RESHINE AND BUFF</div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>MINICURE OPI</div>
                        <p>
                          Mini caring to transform your hand and nails. No cuticle work, no exfoliation. Includes: file,
                          buff, massage and polish.
                        </p>
                        <p className='font-bold green'>
                          45 min
                          <br />
                          180 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>RESHINE MANICURE OPI</div>
                        <p>
                          Rēshine spa manicure, to feel relaxed, nourished, thoroughly pampered and revitalized.
                          Includes: nails trimmed to perfection, massage, exfoliation and polish.
                        </p>
                        <p className='font-bold green'>
                          60 min
                          <br />
                          200 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>PEDICURE OPI</div>
                        <p>
                          Mini caring to transform your feet and toenails. No cuticle work, no exfoliation. Includes:
                          Cut and shape, buff, massage and polish
                        </p>
                        <p className='font-bold green'>
                          45 min
                          <br />
                          200 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>RESHINE PEDICURE OPI</div>
                        <p>
                          Rēshine spa pedicure, relax, nourish, and leave your foot thoroughly pampered and revitalized.
                          Includes: nails trimmed to perfection, massage, exfoliation and polish.
                        </p>
                        <p className='font-bold green'>
                          1 hr 15 min
                          <br />
                          225 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>RESPORT MANICURE / PEDICURE OPI</div>
                        <p>
                          Perfect for the active man or woman who wants absolutely professional, but short, neat and
                          sweet nails. Includes: nail trimmed to perfection, massage and exfoliation, without polish!
                        </p>
                        <p className='font-bold green'>
                          45 min
                          <br />
                          160 IDR / 180 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>SHELLAC MANICURE</div>
                        <p className='font-bold green'>
                          1 hr 30 min
                          <br />
                          300 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>SHELLAC PEDICURE</div>
                        <p className='font-bold green'>
                          1 hr 30 min
                          <br />
                          300 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>SHELLAC REMOVER</div>
                        <p className='font-bold green'>
                          15 min
                          <br />
                          60 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>RESHINE POLISH (ONLY)</div>
                        <p className='font-bold green'>
                          30 min
                          <br />
                          120 IDR
                        </p>
                      </div>
                    </div>

                    <div className='col-sm-6'>
                      <div className='treatment-heading mb24'>HASTY REMEDY</div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>MINI FACIAL</div>
                        <p>
                          A mini facial that uses an exfoliating cleanser to clean off any residual makeup, oil and
                          dirt. A nourishing moisturizing mask made of Bio-Aloe Vera Extract, Collagen, Protein and Pro
                          Vitamin B5 is then applied and leaves the skin smooth, soft, supple and nourished.
                        </p>
                        <p className='font-bold green'>
                          30 min
                          <br />
                          300 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>HUFF THE PUFF</div>
                        <p>
                          A blissful firming and hydrating treatment using specific products rich in Bio-Aloe Vera
                          Extract and Collagen, which help to reduce the appearance of dark circles and fine lines
                          around the eye area.
                        </p>
                        <p className='font-bold green'>
                          30 min
                          <br />
                          300 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>INTUITIVE HEAD PAMPER</div>
                        <p>
                          A calming yet energizing intuitive head massage focusing upon vital energy points. Warm
                          infused olive oil with fresh pandanus leaves will help to reduce tensions and increase
                          circulation to leave you with a profound sense of wellbeing.
                        </p>
                        <p className='font-bold green'>
                          20 min
                          <br />
                          120 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>HAIR WASH AND DRY</div>
                        <p className='font-bold green'>
                          30 min
                          <br />
                          from 175 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>HAND, NECK AND SHOULDER MASSAGE</div>
                        <p className='font-bold green'>
                          30 min
                          <br />
                          120 IDR
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='treatment-item border-0' data-aos='fade-up'>
                  <div className='row g-5'>
                    <div className='col-sm-6'>
                      <div className='treatment-heading mb24'>REVIVE BODY SCRUB</div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>DETOXIFYING BODY EXFOLIATION</div>
                        <p>
                          Our coffee scrub is a strong detoxifying mixture that scrubs away dead skin to reveal the new,
                          healthy skin underneath. Exfoliating with coffee scrub improves circulation with a temporary
                          cellulite reduction, leaving you with smooth, glowing skin.
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>COCO CONTOURING SCRUB</div>
                        <p>
                          This exfoliating, contouring and nourishing body scrub will awaken your senses with its sweet
                          vanilla and coconut aromas. It was specifically formulated to leave your skin feeling
                          hydrated, soft and silky, and if used regularly, this scrub will help to alleviate dry, rough
                          skin and impart a luxurious silky texture and vibrant glow.
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>LULUR</div>
                        <p>
                          Inspired by a most luxurious Indonesian ritual called Lulur, this body scrub contains the most
                          effective traditional ingredients. Made from a blend of finely ground Balinese native herbs
                          and spices such as turmeric, sandalwood and rice powder, this scrub gently exfoliates the skin
                          and removes dead skin cells to soften the skin and give it a radiant glow. It also contains
                          powerful antioxidants that protect your skin from free radicals to keep it healthy and looking
                          youthful.
                        </p>
                        <p className='font-bold green'>
                          45 min
                          <br />
                          200 IDR
                        </p>
                      </div>
                    </div>

                    <div className='col-sm-6'>
                      <div className='treatment-heading mb24'>REFRESHING STEPS</div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>ACHING FOOT RELAXER</div>
                        <p>
                          Our holistic foot massage is performed with firm stroke to help you release fatigue and leave
                          leg muscles feel lighten.
                        </p>
                        <p className='font-bold green'>
                          60 min
                          <br />
                          200 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>FOOT REFLEXOLOGY</div>
                        <p>
                          A combination of thumb-and-finger technique delivers an invigorating and relaxing massage.
                          Leaves you feeling totally relaxed and restores your body’s natural state of equilibrium.
                        </p>
                        <p className='font-bold green'>
                          60 min
                          <br />
                          200 IDR
                        </p>
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
              <a href='tel:+6281237375791' className='link-footer'>
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
          <button className='btn btn-toggle' onClick={() => setShowMobileMenu(true)}>
            <img src='img/toggle.svg' className='img-fluid' />
          </button>
        </div>

        <div className={clsx('mobile-menu', showMobileMenu && 'show')}>
          <div className='mm-header'>
            <Link href='/'>
              <a>
                <img src='img/logo.png' className='logo-menu' />
              </a>
            </Link>

            <div className='btn-close-menu'>
              <button className='btn btn-for-close' onClick={() => setShowMobileMenu(false)}>
                <img src='img/close.svg' className='img-fluid' />
              </button>
            </div>
          </div>
          <div className='mm-content'>
            <ul className='list-menu-mobile'>
              <li onClick={() => setShowMobileMenu(false)}>
                <Link href='/'>
                  <a className='link-menu-mobile'>HOME</a>
                </Link>
              </li>
              <li onClick={() => setShowMobileMenu(false)}>
                <Link href='/#about'>
                  <a className='link-menu-mobile'>ABOUT</a>
                </Link>
              </li>
              <li onClick={() => setShowMobileMenu(false)}>
                <Link href='/#treatment'>
                  <a className='link-menu-mobile'>TREATMENT</a>
                </Link>
              </li>
              <li onClick={() => setShowMobileMenu(false)}>
                <Link href='/#contact'>
                  <a className='link-menu-mobile'>CONTACT US</a>
                </Link>
              </li>
              <li>
                <Link href='cleanlines-guidelines'>
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
