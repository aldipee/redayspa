/* eslint-disable @next/next/no-sync-scripts */
import clsx from "clsx";
import { useState } from "react";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";
import Link from "next/link";
import StructuredData from "../components/StructuredData";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <SEOHead
        title="Treatment Menu - Re Massage Studio - Rejuvenation in Tranquility"
        description="Explore our comprehensive spa treatment menu featuring traditional Balinese massages, facials, body scrubs, and more. Book your rejuvenating experience at Re Massage Studio in Seminyak."
        keywords="spa treatments bali, massage menu, balinese massage, facial treatment, body scrub, spa packages, wellness treatments, massage seminyak, spa services bali"
        ogTitle="Spa Treatment Menu - Re Massage Studio Bali"
        ogDescription="Discover our range of authentic Balinese spa treatments. From traditional massages to luxurious facials and body scrubs, find your perfect wellness experience."
        ogImage="https://res.cloudinary.com/dsq21hpwn/image/upload/v1672385242/Re%20Day%20Spa/inner-hero_fpwat5.jpg"
        ogUrl="https://remassagestudio.com/treatment-menu"
        canonicalUrl="https://remassagestudio.com/treatment-menu"
      />
      <StructuredData type="LocalBusiness" />
      <body>
        <section
          id="top"
          className="inner-hero"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dsq21hpwn/image/upload/v1672385242/Re%20Day%20Spa/inner-hero_fpwat5.jpg)",
          }}
        >
          <div className="container">
            <div className="main-nav">
              <Link href="/#about">
                <a className="item-main-nav">ABOUT</a>
              </Link>

              <Link href="/treatment-menu">
                <a className="item-main-nav">TREATMENT</a>
              </Link>
              <Link href="/">
                <a className="main-nav__logo">
                  <img
                    src="https://res.cloudinary.com/dnnrll6sl/image/upload/v1704902543/logo-cream_o8xrc1.svg"
                    className="img-fluid logo"
                    alt="Re Massage Studio logo"
                  />
                </a>
              </Link>
              <Link href="/#contact">
                <a className="item-main-nav">CONTACT US</a>
              </Link>
              <Link href="/faq">
                <a className="item-nav-last">FAQ</a>
              </Link>
            </div>

            <div className="hero-desc">
              <div className="title-hero mb24">Treatment Menu</div>
            </div>
          </div>
        </section>

        <section className="treatment-menu">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <p className="sm-heading text-center">TREATMENT CATEGORY</p>
                <ul
                  className="nav nav-lg nav-icon-lg flex-nowrap overflow-auto"
                  id="pills-tab"
                >
                  <li className="nav-item">
                    <button
                      className="nav-link active"
                      id="pills-massage-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-massage"
                    >
                      <img src="img/massage.svg" />
                      <br />
                      MASSAGE
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      id="pills-hair-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-hair"
                    >
                      <img src="img/hair.svg" />
                      <br />
                      HAIR
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      id="pills-facial-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-facial"
                    >
                      <img src="img/facial.svg" />
                      <br />
                      FACIAL
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      id="pills-scrub-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-scrub"
                    >
                      <img src="img/scrub.svg" />
                      <br />
                      SCRUB &
                      <br />
                      WRAP
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      id="pills-hand-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-hand"
                    >
                      <img src="img/nail.svg" />
                      <br />
                      HAND &
                      <br />
                      FOOT
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      id="pills-ritual-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-ritual"
                    >
                      <img src="img/ritual.svg" />
                      <br />
                      RITUAL
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      id="pills-kiddie-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-kiddie"
                    >
                      <img src="img/kiddie.svg" />
                      <br />
                      KIDDIE
                    </button>
                  </li>
                </ul>

                <p className="dark-green mb-5 text-center nav-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#248072"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    ></path>
                  </svg>
                  <span className="mx-2 mx-md-4">
                    Swipe left and right to see all category
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#248072"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    ></path>
                  </svg>
                </p>
              </div>

              <div className="col-lg-12">
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-massage">
                    <div className="row">
                      <div className="col-sm-12">
                        <p className="treatment-heading mb24">
                          REWELLNESS MASSAGE
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">BALINESE MASSAGE</p>
                        <p>
                          Our take on traditional Balinese techniques applies
                          combination of acupressure, kneading and invigorating
                          hand movements using our unique blended oil to
                          stimulate blood circulation, increase flexibility and
                          ultimately relax your entire body.
                        </p>
                        <p className="font-medium green">
                          60 / 90 / 120 min
                          <br />
                          310 / 450 / 580 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">RĒ SIGNATURE MASSAGE</p>
                        <p>
                          Let us transport you to a blissful relaxation with our
                          signature massage technique. Starting with warm
                          massage oil of your choice, our therapists will
                          expertly work out the magic touch. Afterward,
                          {`we'll`}
                          apply a warm towel compress to soothe and relax your
                          body even further.
                        </p>
                        <p className="ft-12 lh-base">
                          <strong>Massage oil options:</strong>
                          <br />
                          Energize / Detox / Wellbeing / Tranquility
                        </p>
                        <p className="font-medium green">
                          60 / 90 / 120 min
                          <br />
                          360 / 520 / 680 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">DEEP TISSUE RUBDOWN</p>
                        <p>
                          A massage session is designed to restore the deep
                          muscle layers and connective tissue to release
                          tension, reduce stress and re-align the body as a
                          whole. Gentle stretching also be incorporated into the
                          massage to help loosen tight muscles and improve
                          flexibility.
                        </p>
                        <p className="font-medium green">
                          60 / 90 / 120 min
                          <br />
                          350 / 500 / 630 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">DRY MASSAGE</p>
                        <p>
                          Oil-free massage with finger pressure technique to
                          massage the body at specific points to focus on the
                          meridian lines or nerve flow from head to toe.
                        </p>
                        <p className="font-medium green">
                          60 / 90 min
                          <br />
                          350 / 500 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">PRENATAL MASSAGE</p>
                        <p>
                          Gentle, side-lying massage with massage technique that
                          is safe for mom-to-be after their first trimester.
                          Helps to reduce swelling, nausea, and muscle tension
                          with a unique blend of pregnancy-safe aromatic massage
                          oil.
                        </p>
                        <p className="font-medium green">
                          60 / 90 min
                          <br />
                          350 / 500 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">HOT STONE MASSAGE</p>
                        <p>
                          Warm volcanic stone from Mt. Batur in Kitamani, placed
                          at body relaxation points. This accompanied by gentle
                          to firm massage using the stones to reach deeper
                          muscle layers. Experience relieve of stress, eases
                          muscle tension and increase in blood circulation.
                        </p>
                        <p className="font-medium green">
                          90 / 120 min
                          <br />
                          550 / 700 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">FOUR HANDS MASSAGE</p>
                        <p>
                          A perfectly choreographed Balinese massage technique
                          performed by two therapists at the same time, and in
                          perfect harmony creating a unique and unforgettable
                          massage therapy for you.
                        </p>
                        <p className="font-medium green">
                          60 / 90 / 120 min
                          <br />
                          550 / 780 / 950 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">INTUITIVE HEAD PAMPER</p>
                        <p>
                          A calming yet energizing head massage focusing upon
                          vital energy points. Helps to reduce tension and
                          increase circulation. Great for headaches and
                          hangover.
                        </p>
                        <p className="font-medium green">
                          30** / 60 min
                          <br />
                          150 / 280 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">WARM FOOT REVIVAL</p>
                        <p>
                          A revitalizing combination of our signature foot
                          massage & soothing warm stones. Enhances circulation,
                          and relieves soreness. So good!
                        </p>
                        <p className="font-medium green">
                          60 / 90 min
                          <br />
                          310 / 450 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">ACHING FOOT RELAXER</p>
                        <p>
                          Our holistic foot massage is performed with firm
                          stroke to help you release fatigue and combined with
                          reflexology technique to helps with the circulation of
                          blood and heal the corresponding certain area of the
                          body.
                        </p>
                        <p className="font-medium green">
                          30** / 60 / 90 min
                          <br />
                          150 / 280 / 400 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">
                          HAND, NECK AND SHOULDER MASSAGE
                        </p>
                        <p>
                          Alleviate stiffness from you neck & shoulder areas
                          after long journey on a plane or maybe sitting to long
                          while working on your laptop.
                        </p>
                        <p className="font-medium green">
                          30** / 60 / 90 min
                          <br />
                          150 / 280 / 400 IDR
                        </p>
                      </div>
                      <div className="col-sm-12 small italic text-center">
                        <p className="mb-0">
                          ** 30 minutes treatments can only be taken with other
                          treatments as an addition / cannot be taken alone
                        </p>
                        <p className="green mb-0">
                          All prices are in thousands of Rupiah and are
                          inclusive of 15% Government Tax
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="pills-hair">
                    <div className="row">
                      <div className="col-sm-12">
                        <p className="treatment-heading mb24">
                          REPLENISH TREATMENT
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">SCALP PURITY RITUAL</p>
                        <p>
                          Treat your scalp and hair to the ultimate refresh with
                          the perfect mix of cooling and warming sensations. A
                          purifying scrub cleanses away buildup, followed by a
                          cooling hair mask wrapped in a warm towel. While it
                          works its magic, enjoy a soothing hand, neck, and
                          shoulder massage with warm stones. Finish with a rinse
                          and quick-dry, leaving you refreshed and rejuvenated!
                        </p>
                        <p className="font-medium green">
                          90 min
                          <br />
                          650 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">HERITAGE HAIR CARE</p>
                        <p>
                          This famous traditional treatment includes hair
                          shampooing, scalp massage with intensive hair
                          treatment cream, and nourishing hair tonic. It also
                          comes with a deeply relaxing hand, neck, and shoulder
                          massage.
                        </p>
                        <p className="ft-12 lh-base">
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
                        <p className="font-medium green">
                          60 min
                          <br />
                          450 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">Luxurious Keratin Mask</p>
                        <p>
                          {`You'll`} be pampered with this luxurious treatment.
                          Start the treatment with hair wash, and then continues
                          with a scalp massage while the ultra-rich keratin
                          cream is applied to your hair. The Keratin Mask is
                          infused with argan oil to increase hair softness and
                          also reduce hair breakage and split ends. {`You'll`}{" "}
                          also get hand, neck, and shoulder massage included in
                          this treatment. Fabulous shinny and soft hair awaits.
                        </p>
                        <p className="font-medium green">
                          60 min
                          <br />
                          450 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">INTENSELY NOURISHING HAIR</p>
                        <p>
                          Rich warm nourishing signature hair oil blend is
                          massaged into the hair, conditioning the scalp and
                          leaving your hair silky and shiny. The ingredients
                          includes leaves extract called Mangkokan leaf and Waru
                          leaf are Indonesian heritage recipe for healthy new
                          hair and will strengthen hair roots.
                        </p>
                        <p className="font-medium green">
                          60 min
                          <br />
                          450 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">BASIC HAIR WASH</p>
                        <p>
                          Shampoo + conditioner, include mini scalp massage and
                          quick hair drying.
                        </p>
                        <p className="font-medium green">
                          Short Hair 30 min / 220 IDR
                          <br />
                          Long Hair 45 min / 250 IDR
                        </p>
                      </div>
                      <div className="col-sm-12 small italic text-center">
                        <p className="green mb-0">
                          All prices are in thousands of Rupiah and are
                          inclusive of 15% Government Tax
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="pills-facial">
                    <div className="row">
                      <div className="col-sm-12">
                        <p className="treatment-heading mb24">
                          REJUVENATE FACIAL
                        </p>
                      </div>
                      <div className="col-md-8 mb30 mt-0 mx-auto text-center">
                        <p>
                          All facial treatments include a relaxing scalp
                          massage, and full facial massage to reduce muscle
                          tension and firm facial contours.
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">RĒ SIGNATURE FACIAL</p>
                        <p className="font-medium green">REHYDRATING</p>
                        <p>
                          Gentle deep cleansing and exfoliation help the skin to
                          improve the absorption of a nourishing moisturizing
                          mask. Focuses on replenishing dry skin by providing
                          vital nutrients that will restore skin hydration so
                          that skin becomes more supple and healthy.
                        </p>
                        <p className="font-medium green">REBALANCING</p>
                        <p>
                          An intensive clarifying treatment specifically for
                          oily/acne-prone skin. Incorporates steams, alongside
                          facial massage and calming facial mask, this facial
                          treatment aims to help repair the skin barrier to
                          achieving balance and a clearer complexion.
                        </p>
                        <p className="font-medium green">REGENERATING</p>
                        <p>
                          Intensive boost for dull/distressed skin, with a
                          facial massage to help stimulate new collagen
                          formation. This will help with skin regeneration,
                          improve dark-spots/hyperpigmentation, and leaves the
                          skin radiant and plump after treatment.
                        </p>
                        <p className="font-medium green">
                          60 min
                          <br />
                          500 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">ANTI-AGING FACIAL</p>
                        <p>
                          A facial treatment that is devoted to dealing with
                          mature skin with problem of wrinkles and facial
                          elasticity. By using skincare products specificly rich
                          in antioxidants and enriched by silk protein and gold
                          extract. Also combined with a 3-in-1 advanced
                          photofacial treatment device that can stimulate
                          collagen formation for plumper and smoother skin, and
                          accelerate skin healing.
                        </p>
                        <p className="font-medium green">
                          60 min
                          <br />
                          600 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">SUN S.O.S FACIAL</p>
                        <p>
                          Give your sun-soaked face some extra TLC with a
                          cooling mini-facial treatment. Aloe Vera - a cherished
                          ingredient used for centuries will help to reduce
                          redness, restore luminosity after {`it's`} been
                          dehydrated and weather-worn, also relieve
                          heat/stinging after being overexposed to UV rays.
                        </p>
                        <p className="font-medium green">
                          30 min
                          <br />
                          380 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">BEAUTY FACE ACCUPRESSURE</p>
                        <p>
                          Activate your glow with accupressure! Addresses the
                          face from within to create a glowing exterior. This
                          includes helping to tone the facial muscles and
                          stimulation circulation.
                        </p>
                        <p className="font-medium green">
                          30 min
                          <br />
                          200 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">HUFF THE PUFF</p>
                        <p>
                          Goodbye Panda eyes! Have a blissfully firming and
                          hydrating treatment to target the under-eye area and
                          achieve brighten and well-rested eyes.
                        </p>
                        <p className="font-medium green">
                          30 min
                          <br />
                          360 IDR
                        </p>
                      </div>
                      <div className="col-sm-12 small italic text-center">
                        <p className="green mb-0">
                          All prices are in thousands of Rupiah and are
                          inclusive of 15% Government Tax
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="pills-scrub">
                    <div className="row">
                      <div className="col-sm-12">
                        <p className="treatment-heading mb24">
                          REVIVE BODY SCRUB & WRAP
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">BALI COFFEE BODY SCRUB</p>
                        <p>
                          Made from coffee beans grown at Kintamani, Bali, our
                          coffee scrub is a great way to scrub away dead skin to
                          reveal the new, healthy skin underneath. Also, this
                          will reduce the visibility of cellulites and will
                          leave you with smooth, glowing skin.
                        </p>
                        <p className="font-medium green">
                          45 min**
                          <br />
                          300 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">ALOE VERA BODY MASK</p>
                        <p>
                          {`it's`} no secret that aloe vera, the original
                          natural sunburn soother, has a variety of skin-healthy
                          benefits. Target whatever skin issue {`you've`} got
                          (be it irritated, discolored, or sun-damaged skin) and
                          gentle enough to prevent dryness.
                        </p>
                        <p className="font-medium green">
                          15 min
                          <br />
                          200 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">LULUR</p>
                        <p>
                          Inspired by ancient Indonesian royalty tradition. Made
                          from a blend of finely ground Balinese native herbs
                          and spices such as turmeric, sandalwood, and rice
                          powder. Besides being useful for exfoliating, lulur is
                          also good for evening out skin tone and contains high
                          antioxidants. Enjoy its exotic aroma while having its
                          benefits.
                        </p>
                        <p className="font-medium green">
                          45 min**
                          <br />
                          300 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">PURE MILK BODY MASK</p>
                        <p>
                          Nourish your skin! Made from real milk powder, rich in
                          antioxidants. Enhances elasticity, boosts suppleness,
                          and helps combat back acne for smoother, healthier
                          skin.
                        </p>
                        <p className="font-medium green">
                          30 min
                          <br />
                          250 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">COCO & VANILLA BODY SCRUB</p>
                        <p>
                          This exfoliating, contouring and nourishing body scrub
                          will awaken your senses with its sweet vanilla and
                          coconut aromas. Specifically formulated to leave your
                          skin feeling hydrated, soft, and silky.
                        </p>
                        <p className="font-medium green">
                          45 min**
                          <br />
                          300 IDR
                        </p>
                      </div>
                      <div className="col-sm-12 small italic text-center">
                        <p className="mb-0">
                          ** Include shower time & body lotion application
                        </p>
                        <p className="green mb-0">
                          All prices are in thousands of Rupiah and are
                          inclusive of 15% Government Tax
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="pills-hand">
                    <div className="row">
                      <div className="col-sm-12">
                        <p className="treatment-heading mb24">
                          RESHINE AND BUFF
                        </p>
                      </div>
                      <div className="col-md-8 mb30 mt-0 mx-auto text-center">
                        <p>
                          Your hands and feet are the hardest working parts of
                          your body, and they deserve more than just a basic
                          manicure or pedicure. Here at Re Massage Studio, we
                          offer hands and feet care treatments that focus on the
                          health and well-being of these often neglected areas
                          that go beyond mere aesthetics.
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">HAND CARE</p>
                        <div className="mb30">
                          <p>
                            Indulge in our hand treatment that goes beyond
                            skin-deep to give your hands luxurious care and
                            revitalization. Your hands deserve a touch of bliss
                            and a {`"handful"`} of rejuvenation.
                          </p>
                          <p className="italic green mb-0">Treatment Steps</p>
                          <p>
                            Nail care (trimming, basic shaping, and cuticle
                            care) + Hand massage + Hand exfoliation + Milk hand
                            soak + Moisturizer
                          </p>
                          <p className="font-medium green">60 min / 350 IDR</p>
                        </div>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">FOOT CARE</p>
                        <div className="mb30">
                          <p>
                            Step into a world of bliss and give your feet a
                            treat with our feet treatment experience. Designed
                            to revitalize and restore tired feet, our
                            specialized care will leave you feeling
                            {`"toe"-tally`} pampered and take the day!
                          </p>
                          <p className="italic green mb-0">Treatment Steps</p>
                          <p>
                            Nail care (trimming, basic shaping, and cuticle
                            care) + Callus Removal + Feet massage + Feet
                            exfoliation + Milk foot soak + Moisturizer
                          </p>
                          <p className="font-medium green">75 min / 400 IDR</p>
                        </div>
                      </div>

                      <div className="col-sm-12 mt-0 text-center">
                        <p className="sm-heading">QUICK FIX</p>
                      </div>

                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="font-bold green">
                          Sport Manicure / Pedicure
                        </p>
                        <p>Nail trimming, basic shaping, cuticle care</p>
                        <p className="font-medium green">45 min / 250 IDR</p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="font-bold green">
                          Express Manicure / Pedicure
                        </p>
                        <p>Nail trimming, basic shaping, regular polish</p>
                        <p className="font-medium green">45 min / 250 IDR</p>
                      </div>

                      <div className="col-sm-12 mb30 mt-0 text-center">
                        <p className="border-top pt-4 sm-heading">
                          ADDITIONAL SERVICE
                        </p>
                        <div className="mb30">
                          <p className="font-medium green">
                            Regular Nail Polish
                            <br />
                            30 min / 120 IDR
                            <br />
                            Gel Nail Polish
                            <br />
                            30 min / 180 IDR
                            <br />
                            Gel Nail removal (hands/feet)
                            <br />
                            30 min / 100 IDR
                            <br />
                            Callus Removal
                            <br />
                            15 min / 180 IDR
                            <br />
                            Feet Scrub
                            <br />
                            15 min / 150 IDR
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-12 small italic text-center">
                        <p className="mb-0">
                          All additional service {`can't`} be taken
                          individually, it must be taken either with hands or
                          feet care
                        </p>
                        <p className="green mb-0">
                          All prices are in thousands of Rupiah and are
                          inclusive of 15% Government Tax
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="pills-ritual">
                    <div className="row">
                      <div className="col-sm-12">
                        <p className="treatment-heading mb24">
                          REVITALIZE RITUAL
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">BODY REVIVE</p>
                        <p>
                          A staple ritual for pampering day. A classic
                          combination of full body massage and body scrub for a
                          quick fix; ease body soreness plus exfoliation for
                          glowing skin.
                        </p>
                        <p className="ft-12 lh-base">
                          <strong>Full body massage choice:</strong>
                          <br />
                          Balinese Massage (+IDR 50 for Deep / Dry / RĒ
                          Signature massage)
                          <br />
                          Upgrade to 90m Balinese Massage +IDR 120
                          <br />
                          <strong>Scrub choice:</strong>
                          <br />
                          Lulur / Coffee / Coconut Vanilla
                        </p>
                        <p className="italic green mb-0">Treatment Steps</p>
                        <p>
                          Refreshing foot bath + Full Body Massage of your
                          choice + Body scrub of your choice + Shower + RĒ
                          Signature body lotion
                        </p>
                        <p className="font-medium green">
                          1 hr 45 min
                          <br />
                          600 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">SUN RELIEVER</p>
                        <p>
                          Out and about all day in the sun is not only
                          physically exhausting for your body, but also for your
                          skin. Come and get some after-sun/relaxation and take
                          care of your body and let it heal to enjoy the rest of
                          your stay in this sunshine island of Bali.
                        </p>
                        <p className="italic green mb-0">Treatment Steps</p>
                        <p>
                          Refreshing Foot Bath + Balinese Massage + Aloe Body
                          Mask + Sun S.O.S. Facial
                        </p>
                        <p className="font-medium green">
                          1 hr 45 min
                          <br />
                          800 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <div className="sm-heading">URBAN REWIND</div>
                        <p>
                          A contemporary spin on Balinese body care tradition
                          combined with our signature beauty recipes results in
                          the perfect rejuvenation of the body and soul.
                          Bringing curative benefits of fresh, natural, and
                          quality ingredients, indulge mind and soul in a
                          heartfelt Balinese treatment experience.
                        </p>
                        <p className="italic green mb-0">Treatment Steps</p>
                        <p>
                          Refreshing foot bath + RĒ Signature Massage + Body
                          scrub of your choice + Shower + RĒ Signature body
                          lotion + RĒ Signature mini facial
                        </p>
                        <p className="font-medium green">
                          2 hr 15 min
                          <br />
                          900 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">BODY NOURISH</p>
                        <p>
                          Indulge in the ultimate self-care experience with this
                          package. Crafted to melt away tension and promote deep
                          relaxation. Exfoliates your skin, leaving it smooth
                          and radiant. Finish with skin nourishment for
                          hydration, restoring balance and vitality.
                        </p>
                        <p className="italic green mb-0">Treatment Steps</p>
                        <p>
                          Refreshing Foot Bath + 60min Balinese Massage + Body
                          Scrub of your choice + Pure Milk Body Mask + Shower +
                          RĒ Signature body lotion
                        </p>
                        <p className="ft-12 lh-base">
                          Upgrade to 90m Balinese Massage +IDR 120
                        </p>
                        <p className="font-medium green">
                          120 min
                          <br />
                          700 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">THE ROYAL</p>
                        <p>
                          The ultimate care package to make you feel like
                          royalty! Pamper yourself from head to toe and feel
                          luxurious authentic Balinese Royal ritual yourself.
                          Guaranteed you will leave refreshed and looking
                          absolutely perfect.
                        </p>
                        <p className="italic green mb-0">Treatment Steps</p>
                        <p>
                          Refreshing Foot Bath + Balinese Massage + Lulur + RĒ
                          Signature Facial + Express Manicure / Pedicure
                        </p>
                        <p className="font-medium green">
                          3 hr 30 min
                          <br />
                          1200 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">TOTALLY PAMPERED</p>
                        <p>
                          The favorite party-goers treatment. Cure your hangover
                          and tiredness from last night with our treatment spa
                          ritual. This treatment will help with your pounding
                          head and body soreness immediately.
                        </p>
                        <p className="italic green mb-0">Treatment Steps</p>
                        <p>
                          Refreshing Foot Bath + Balinese Massage + Intuitive
                          Head Pamper + Collagen Face Mask
                        </p>
                        <p className="font-medium green">
                          90 min
                          <br />
                          700 IDR
                        </p>
                      </div>
                      <div className="col-sm-12 small italic text-center">
                        <p className="green mb-0">
                          All prices are in thousands of Rupiah and are
                          inclusive of 15% Government Tax
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="pills-kiddie">
                    <div className="row">
                      <div className="col-sm-12">
                        <p className="treatment-heading mb24">KIDDIE</p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">KIDDIE MASSAGE</p>
                        <p className="font-bold green">BODY MASSAGE</p>
                        <p>
                          Immune boosting massage for the little one. Relaxes
                          and make them easier to sleep soundly at night.
                        </p>
                        <p className="font-medium green">
                          60 / 90 min
                          <br />
                          290 / 400 IDR
                        </p>
                        <p className="font-bold green">FOOT MASSAGE</p>
                        <p>
                          When they walk around all day after family fun
                          activities and need some pampering too. You can have
                          perfect bonding time together with this massage.
                        </p>
                        <p className="font-medium green">
                          30** / 60 min
                          <br />
                          150 / 250 IDR
                        </p>
                      </div>
                      <div className="col-sm-6 mb30 mt-0 text-center">
                        <p className="sm-heading">KIDDIE NAIL CARE</p>
                        <p className="font-bold green">
                          Mini Manicure{" "}
                          <span className="font-medium">45 min / 200 IDR</span>
                        </p>
                        <p>Nails trimming & nail polish</p>
                        <p className="font-bold green">
                          Mini Pedicure{" "}
                          <span className="font-medium">45 min / 200 IDR</span>
                        </p>
                        <p>Toenails trimming & nail polish</p>
                        <p className="font-bold green">
                          Mini Polish{" "}
                          <span className="font-medium">30 min / 120 IDR</span>
                        </p>
                        <p className="font-bold green">
                          Mini Trimming{" "}
                          <span className="font-medium">15 min / 100 IDR</span>
                        </p>
                      </div>
                      <div className="col-sm-12 small italic text-center">
                        <p className="mb-0">
                          These treatments are valid for kids age 2 - 10 years
                          old and height under 150cm (4.9 Ft)
                        </p>
                        <p className="mb-10">
                          ** 30 minutes treatments can only be taken with other
                          treatments as an addition / cannot be taken alone
                        </p>
                        <p className="green mb-0">
                          All prices are in thousands of Rupiah and are
                          inclusive of 15% Government Tax
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container" data-aos="fade-up">
            <div className="inner-ts">
              <div className="sm-heading">BOOK A PAMPERING TIME</div>
              <p className="mb50">
                <a
                  href="tel:+6282266698020"
                  className="link-telephone"
                  target="_blank"
                  rel="noreferrer"
                >
                  Call
                </a>{" "}
                or{" "}
                <a
                  href="https://wa.me/6282266698020?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20spa%20treatment%20you%20offer."
                  target="_blank"
                  className="link-telephone"
                  rel="noreferrer"
                >
                  WhatsApp us on +62 822 6669 8020
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
            </div>
          </div>
        </section>

        <Footer />

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
                <img
                  src="https://res.cloudinary.com/dnnrll6sl/image/upload/v1704902543/logo-cream_o8xrc1.svg"
                  className="logo-menu"
                />
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
              <a href="tel:+6282266698020" className="link-footer">
                +62 822 6669 8020
              </a>
              <a href="mailto:care@remassagestudio.com" className="link-footer">
                CARE@REMASSAGESTUDIO.COM
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
                  href="https://www.instagram.com/remassagestudio/"
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
