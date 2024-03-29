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
        <title>Treatment - RE DAY SPA - Rejuvenation in Tranquility</title>
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
        <section id='top' className='inner-hero' style={{ backgroundImage: 'url(https://res.cloudinary.com/dsq21hpwn/image/upload/v1672385242/Re%20Day%20Spa/inner-hero_fpwat5.jpg)' }}>
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
                    <div className='col-sm-12'>
                      <p className='treatment-heading mb24'>REWELLNESS MASSAGE</p>
                    </div>
                    <div className="col-sm-6 mb30 mt-0 text-center">
                      <p className="sm-heading">BALINESE MASSAGE</p>
                      <p>Our take on traditional Balinese techniques applies combination of acupressure, kneading and invigorating hand movements using our unique blended oil to stimulate blood circulation, increase flexibility and ultimately relax your entire body.</p>
                      <p className="font-bold green">
                        60 / 90 / 120 min
                        <br />
                        300 / 430 / 550 IDR</p>
                    </div>
                    <div className='col-sm-6 mb30 mt-0 text-center'>
                      <p className='sm-heading'>RĒ SIGNATURE MASSAGE</p>
                      <p>
                        Let us transport you to a blissful relaxation with our signature massage technique. Starting with warm aromatherapy oil of your choice, our therapists will expertly work out the magic touch. Afterward, {`we'll`} apply a warm towel compress to soothe and relax your body even further.
                      </p>
                      <p className='ft-12 lh-base'>
                        <strong>Massage oil options:</strong>
                        <br />
                        Energize / Detox / Wellbeing / Tranquility
                      </p>
                      <p className='font-bold green'>
                        60 / 90 / 120 min
                        <br />
                        350 / 490 / 640 IDR
                        </p>
                    </div>
                    <div className='col-sm-6 mb30 mt-0 text-center'>
                      <p className='sm-heading'>DEEP TISSUE RUBDOWN</p>
                      <p>
                        A massage session is designed to restore the deep muscle layers and connective tissue to release tension, reduce stress and re-align the body as a whole. Gentle stretching also be incorporated into the massage to help loosen tight muscles and improve flexibility.
                      </p>
                      <p className='font-bold green'>
                        60 / 90 / 120 min
                        <br />
                        330 / 470 / 600 IDR
                      </p>
                    </div>
                    <div className='col-sm-6 mb30 mt-0 text-center'>
                      <p className='sm-heading'>DRY MASSAGE</p>
                      <p>
                        Oil-free massage with finger pressure technique to massage the body at specific points to focus on the meridian lines or nerve flow from head to toe.
                      </p>
                      <p className='font-bold green'>
                        60 / 90 / 120 min
                        <br />
                        330 / 470 / 600 IDR
                      </p>
                    </div>
                    <div className='col-sm-6 mb30 mt-0 text-center'>
                      <p className='sm-heading'>PRENATAL MASSAGE</p>
                      <p>
                        Gentle, side-lying massage with aromatherapy technique for mom-to-be after their first trimester. Helps to reduce swelling, nausea, and muscle tension with a unique blend of pregnancy-safe aromatic massage oil.
                      </p>
                      <p className='font-bold green'>
                        60 / 90 min
                        <br />
                        330 / 470 IDR
                      </p>
                    </div>
                    <div className='col-sm-6 mb30 mt-0 text-center'>
                      <p className='sm-heading'>HOT STONE MASSAGE</p>
                      <p>
                        Warm volcanic stone from Mt. Batur in Kitamani, placed at body relaxation points. This accompanied by gentle to firm massage using the stones to reach deeper muscle layers. Experience relieve of stress, eases muscle tension and increase in blood circulation.
                      </p>
                      <p className='font-bold green'>
                        90 / 120 min
                        <br />
                        500 / 700 IDR
                      </p>
                    </div>
                    <div className='col-sm-6 mb30 mt-0 text-center'>
                      <p className='sm-heading'>FOUR HANDS MASSAGE</p>
                      <p>
                        A perfectly choreographed Balinese massage technique performed by two therapists at the same time, and in perfect harmony creating a unique and unforgettable massage therapy for you.
                      </p>
                      <p className='font-bold green'>
                        60 / 90 / 120 min
                        <br />
                        500 / 650 / 850 IDR
                      </p>
                    </div>
                    <div className='col-sm-6 mb30 mt-0 text-center'>
                      <p className='sm-heading'>ACHING FOOT RELAXER</p>
                      <p>
                        Our holistic foot massage is performed with firm stroke to help you release fatigue and combined with reflexology technique to helps with the circulation of blood and heal the corresponding certain area of the body.
                      </p>
                      <p className='font-bold green'>
                        30** / 60 / 90 min
                        <br />
                        135 / 230 / 300 IDR
                      </p>
                    </div>
                    <div className='col-sm-6 mb30 mt-0 text-center'>
                      <p className='sm-heading'>INTUITIVE HEAD PAMPER</p>
                      <p>
                        A calming yet energizing head massage focusing upon vital energy points. Helps to reduce tension and increase circulation. Great for headaches and hangover.
                      </p>
                      <p className='font-bold green'>
                        30** / 60 min
                        <br />
                        135 / 230 IDR
                      </p>
                    </div>
                    <div className='col-sm-6 mb30 mt-0 text-center'>
                      <p className='sm-heading'>HAND, NECK AND SHOULDER MASSAGE</p>
                      <p>
                        Alleviate stiffness from you neck & shoulder areas after long journey on a plane or maybe sitting to long while working on your laptop.
                      </p>
                      <p className='font-bold green'>
                        30** / 60 / 90 min
                        <br />
                        135 / 230 / 300 IDR
                      </p>
                    </div>
                    <div className='col-sm-12'>
                      <p className='italic small'>** 30 minutes treatments can only be taken with other treatments as an addition / cannot be taken alone</p>
                    </div>
                  </div>
                </div>
                <div className='treatment-item' data-aos='fade-up'>
                  <div className='row g-5'>

                    <div className='col-sm-6'>
                      <p className='treatment-heading mb24'>REPLENISH TREATMENT</p>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>HERITAGE HAIR CARE</p>
                        <p>
                          This famous traditional treatment includes hair shampooing, scalp massage with intensive hair treatment cream, and nourishing hair tonic. It also comes with a deeply relaxing hand, neck, and shoulder massage.
                        </p>
                        <p className='ft-12 lh-base'>
                          <strong>Cream options:</strong>
                          <br />
                          Dark Chocolate: deep moisturizing / dry hair
                          <br />
                          Strawberry Yogurt: shine boosting / dull hair
                          <br />
                          Mint Sorbet: itchy scalp / dandruff
                          <br />
                          Green Tea Butter: intensive repair / damaged hair
                          <br />
                          Vanilla Milk: nourishing / frizzy hair
                        </p>
                        <p className='font-bold green'>
                          60 min
                          <br />
                          350 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>Luxurious Keratin Mask</p>
                        <p>
                          {`You'll`} be pampered with this luxurious treatment. Start the treatment with hair wash, and then continues with a scalp massage while the ultra-rich keratin cream is applied to your hair. The Keratin Mask is infused with argan oil to increase hair softness and also reduce hair breakage and split ends. {`You'll`} also get hand, neck, and shoulder massage included in this treatment. Fabulous shinny and soft hair awaits.
                        </p>
                        <p className='font-bold green'>
                          90 min
                          <br />
                          500 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>INTENSELY NOURISHING HAIR</p>
                        <p>
                          Rich warm nourishing signature hair oil blend is massaged into the hair, conditioning the scalp and leaving your hair silky and shiny. The ingredients includes leaves extract called Mangkokan leaf and Waru leaf are Indonesian heritage recipe for healthy new hair and will strengthen hair roots.
                        </p>
                        <p className='font-bold green'>
                          60 min
                          <br />
                          350 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>BASIC HAIR WASH</p>
                        <p>
                          Shampoo + conditioner, include mini scalp massage and quick hair drying.
                        </p>
                        <p className='font-bold green'>
                          Short Hair 30 min / 200 IDR
                          <br />
                          Long Hair 45 min / 225 IDR
                        </p>
                      </div>
                    </div>

                    <div className='col-sm-6'>
                      <p className='treatment-heading mb24'>REJUVENATE FACIAL</p>
                      <div className='text-center mb30'>
                        <p>
                          All facial treatments include a relaxing scalp massage, and full facial massage to reduce muscle tension and firm facial contours.
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>RĒ SIGNATURE FACIAL</p>
                        <p className='font-bold green'>REHYDRATING</p>
                        <p>
                          Gentle deep cleansing and exfoliation help the skin to improve the absorption of a nourishing moisturizing mask. Focuses on replenishing dry skin by providing vital nutrients that will restore skin hydration so that skin becomes more supple and healthy.
                        </p>
                        <p className='font-bold green'>REBALANCING</p>
                        <p>
                          An intensive clarifying treatment specifically for oily/acne-prone skin. Incorporates steams, alongside facial massage and calming facial mask, this facial treatment aims to help repair the skin barrier to achieving balance and a clearer complexion.
                        </p>
                        <p className='font-bold green'>REGENERATING</p>
                        <p>
                          Intensive boost for dull/distressed skin, with a facial massage to help stimulate new collagen formation. This will help with skin regeneration, improve dark-spots/hyperpigmentation, and leaves the skin radiant and plump after treatment.
                        </p>
                        <p className='font-bold green'>
                          60 min
                          <br />
                          480 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>ANTI-AGING FACIAL</p>
                        <p>
                          A facial treatment that is devoted to dealing with mature skin with problem of wrinkles and facial elasticity. By using skincare products specificly rich in antioxidants and enriched by silk protein and gold extract. Also combined with a 3-in-1 advanced photofacial treatment device that can stimulate collagen formation for plumper and smoother skin, and accelerate skin healing.
                        </p>
                        <p className='font-bold green'>
                          60 min
                          <br />
                          550 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>SUN S.O.S FACIAL</p>
                        <p>
                          Give your sun-soaked face some extra TLC with a cooling mini-facial treatment. Aloe Vera - a cherished ingredient used for centuries will help to reduce redness, restore luminosity after {`it's`} been dehydrated and weather-worn, also relieve heat/stinging after being overexposed to UV rays.
                        </p>
                        <p className='font-bold green'>
                          30 min
                          <br />
                          350 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>BEAUTY FACE ACCUPRESSURE</p>
                        <p>
                          Activate your glow with accupressure! Addresses the face from within to create a glowing exterior. This includes helping to tone the facial muscles and stimulation circulation.
                        </p>
                        <p className='font-bold green'>
                          30 min
                          <br />
                          180 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>HUFF THE PUFF</p>
                        <p>
                          Goodbye Panda eyes! Have a blissfully firming and hydrating treatment to target the under-eye area and achieve brighten and well-rested eyes.
                        </p>
                        <p className='font-bold green'>
                          30 min
                          <br />
                          350 IDR
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
                <div className='treatment-item' data-aos='fade-up'>
                  <div className='row g-5'>
                    <div className='col-sm-6'>
                      <p className='treatment-heading mb24'>REVIVE BODY SCRUB</p>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>DETOXIFYING BODY EXFOLIATION</p>
                        <p>
                          Made from coffee beans grown at Kintamani, Bali, our coffee scrub is a great way to scrub away dead skin to reveal the new, healthy skin underneath. Also, this will reduce the visibility of cellulites and will leave you with smooth, glowing skin.
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>COCO CONTOURING SCRUB</p>
                        <p>
                          This exfoliating, contouring and nourishing body scrub will awaken your senses with its sweet vanilla and coconut aromas. Specifically formulated to leave your skin feeling hydrated, soft, and silky.
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>LULUR</p>
                        <p>
                          Inspired by ancient Indonesian royalty tradition. Made from a blend of finely ground Balinese native herbs and spices such as turmeric, sandalwood, and rice powder. Besides being useful for exfoliating, lulur is also good for evening out skin tone and contains high antioxidants. Enjoy its exotic aroma while having its benefits.
                        </p>
                        <p className='font-bold green'>
                          45 min
                          <br />
                          250 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>ALOE VERA BODY MASK</p>
                        <p>
                          {`it's`} no secret that aloe vera, the original natural sunburn soother, has a variety of skin-healthy benefits. Target whatever skin issue {`you've`} got (be it irritated, discolored, or sun-damaged skin) and gentle enough to prevent dryness.
                        </p>
                        <p className='font-bold green'>
                          15 min
                          <br />
                          180 IDR
                        </p>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <p className='treatment-heading mb24'>RESHINE AND BUFF</p>
                      <div className='text-center mb30'>
                        <p>
                          We use O.P.I, Essie, Orly, and China Glaze nail polishes.
                          <br />
                          For gel polishes we use CND Shellac, Gelish, and O.P.I.
                          <br />
                          Feel free to browse our extensive color collection in spa.
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>MANICURE</p>
                        <div className='mb30'>
                          <p className='font-bold green'>
                            Sport 45 min / 180 IDR
                          </p>
                          <p>
                            Hands scrub, nail trimming & shaping, cuticle work.
                          </p>
                        </div>
                        <div className='mb30'>
                          <p className='font-bold green'>
                            Basic 45 min / 200 IDR
                          </p>
                          <p>
                            Nail trimming & shaping, nail polish.
                          </p>
                        </div>
                        <div className='mb30'>
                          <p className='font-bold green'>
                            Complete 60 min / 230 IDR
                          </p>
                          <p>
                            Hands, scrub, nail trimming & shaping, cuticle work, nail polish.
                          </p>
                        </div>
                        <div className='mb30'>
                          <p className='font-bold green'>
                            Luxe 90 min / 330 IDR
                          </p>
                          <p>
                            Hands scrub, hands massage,, nail trimming & shaping, cuticle work, nail polish, lotion.
                          </p>
                        </div>
                        <div className='mb30'>
                          <p className='font-bold green'>
                            Gel / Shellac 90 min / 350 IDR
                          </p>
                          <p>
                            Hands scrub, nail trimming & shaping, cuticle work, gel/shellac polish.
                          </p>
                        </div>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>PEDICURE</p>
                        <div className='mb30'>
                          <p className='font-bold green'>
                            Sport 45 min / 200 IDR
                          </p>
                          <p>
                            Foot scrub, toenails trimming & shaping, cuticle work.
                          </p>
                        </div>
                        <div className='mb30'>
                          <p className='font-bold green'>
                            Basic 45 min / 230 IDR
                          </p>
                          <p>
                            Toenails trimming & shaping, nail polish.
                          </p>
                        </div>
                        <div className='mb30'>
                          <p className='font-bold green'>
                            Complete 60 min / 280 IDR
                          </p>
                          <p>
                            Foot scrub, toenails trimming & shaping, cuticle work, nail polish.
                          </p>
                        </div>
                        <div className='mb30'>
                          <p className='font-bold green'>
                            Luxe 90 min / 380 IDR
                          </p>
                          <p>
                            Feet scrub, feet massage, toenails trimming & shaping, cuticle work, nail polish, lotion.
                          </p>
                        </div>
                        <div className='mb30'>
                          <p className='font-bold green'>
                            Gel / Shellac 90 min / 350 IDR
                          </p>
                          <p>
                            Toenails trimming & shaping, cuticle work, feet scrub, gel/shellac polish.
                          </p>
                        </div>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>OTHER</p>
                        <div className='mb30'>
                          <p className='font-bold green'>
                            Nail Polish only (hands/feet)
                            <br />
                            30 min / 120 IDR
                            <br />
                            Gel Polish only (hands/feet)
                            <br />
                            30 min / 150 IDR
                            <br />
                            Gel Polish removal (hands/feet)
                            <br />
                            15 min / 60 IDR
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='treatment-item border-0' data-aos='fade-up'>
                  <div className='row g-5'>

                    <div className='col-sm-6'>
                      <p className='treatment-heading mb24'>REVITALIZE RITUAL</p>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>BODY REVIVE</p>
                        <p>
                          A staple ritual for spa-goers. A classic combination of full body massage and body scrub for a quick-fix; ease body soreness plus exfoliation for glowing skin.
                        </p>
                        <p className='ft-12 lh-base'>
                        <strong>Full body massage choice:</strong>
                        <br />
                        Balinese Massage (+IDR 30 for Deep / Dry / RĒ Signature massage)
                        <br />
                        <strong>Scrub choice:</strong>
                        <br />Lulur / Coffee / Coconut Vanilla
                        </p>
                        <p className='italic green mb-0'>Treatment Steps</p>
                        <p>
                          Refreshing foot bath + Full Body Massage of your choice + Body scrub of your choice + Shower + RĒ Signature body lotion
                        </p>
                        <p className='font-bold green'>
                          1 hr 45 min
                          <br />
                          500 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>SUN RELIEVER</p>
                        <p>
                          Out and about all day in the sun is not only physically exhausting for your body, but also for your skin. Come and get some after-sun/relaxation and take care of your body and let it heal to enjoy the rest of your stay in this sunshine island of Bali.
                        </p>
                        <p className='italic green mb-0'>Treatment Steps</p>
                        <p>
                          Refreshing Foot Bath + Balinese Massage + Aloe Body Mask + Sun S.O.S. Facial
                        </p>
                        <p className='font-bold green'>
                          1 hr 45 min
                          <br />
                          700 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <div className='sm-heading'>URBAN REWIND</div>
                        <p>
                          A contemporary spin on Balinese spa tradition combined with our signature beauty recipes results in the perfect rejuvenation to the body and soul. Bringing curative benefits of fresh, natural and quality ingredients, indulge mind and soul in a heartfelt Balinese spa experience.
                        </p>
                        <p className='italic green mb-0'>Treatment Steps</p>
                        <p>
                          Refreshing foot bath + RĒ Signature Massage + Body scrub of your choice + Shower + RĒ Signature body lotion + RĒ Signature mini facial
                        </p>
                        <p className='font-bold green'>
                          1 hr 45 min
                          <br />
                          800 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>THE ROYAL</p>
                        <p>
                          The ultimate care package to make you feel like royalty! Pamper yourself from head to toe and feel luxurious authentic Balinese Royal ritual yourself. Guaranteed you will leave refreshed and looking absolutely perfect.
                        </p>
                        <p className='italic green mb-0'>Treatment Steps</p>
                        <p>
                          Refreshing Foot Bath + Balinese Massage + Lulur + RĒ Signature Facial + Basic Manicure
                        </p>
                        <p className='font-bold green'>
                          3 hr 30 min
                          <br />
                          1000 IDR
                        </p>
                      </div>
                      <div className='text-center mb30'>
                        <p className='sm-heading'>TOTALY PAMPERED</p>
                        <p>
                          The favorite party-goers treatment. Cure your hangover and tiredness from last night with our unique spa ritual. This treatment will help with your pounding head and body soreness immediately.
                        </p>
                        <p className='italic green mb-0'>Treatment Steps</p>
                        <p>
                          Refreshing Foot Bath + Balinese Massage + Intuitive Head Pamper + Collagen Face Mask
                        </p>
                        <p className='font-bold green'>
                          90 min
                          <br />
                          650 IDR
                        </p>
                      </div>
                    </div>

                    <div className='col-sm-6'>
                      <p className='treatment-heading mb24'>KIDDIE</p>

                      <div className='text-center mb30'>
                        <p className='sm-heading'>KIDDIE MASSAGE</p>
                        <p className='font-bold green'>BODY MASSAGE</p>
                        <p>
                          Immune boosting massage for the little one. Relaxes and make them easier to sleep soundly at night.
                        </p>
                        <p className='font-bold green'>
                          60 / 90 min
                          <br />
                          250 / 360 IDR
                        </p>
                        <p className='font-bold green'>FOOT MASSAGE</p>
                        <p>
                          When they walk around all day after family fun activities and need some pampering too. You can have perfect bonding time together with this massage.
                        </p>
                        <p className='font-bold green'>
                          30 / 60 min
                          <br />
                          100 / 180 IDR
                        </p>
                      </div>

                      <div className='text-center mb30'>
                        <p className='sm-heading'>KIDDIE NAIL CARE</p>
                        <p className='font-bold green'>Mini Manicure 45 min / 135 IDR</p>
                        <p>
                          Nails trimming & nail polish
                        </p>
                        <p className='font-bold green'>Mini Pedicure 45 min / 180 IDR</p>
                        <p>
                          Toenails trimming & nail polis
                        </p>
                        <p className='font-bold green'>Mini Polish 15 min / 100 IDR</p>
                        <p className='font-bold green'>Mini Nail Art 10 min / 10 IDR
                        <br />
                        *price per finger
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
