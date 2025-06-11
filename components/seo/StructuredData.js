import React from "react";
import Head from "next/head";

export default function StructuredData({ type }) {
  const getStructuredData = () => {
    switch (type) {
      case "LocalBusiness":
        return {
          "@context": "https://schema.org",
          "@type": "SPA",
          name: "Re Massage Studio",
          description:
            "Authentic Balinese spa treatments in Seminyak, Bali. Traditional and contemporary wellness treatments for ultimate relaxation and rejuvenation.",
          url: "https://remassagestudio.com",
          telephone: "+62-822-6669-8020",
          email: "care@remassagestudio.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jalan Petitenget 88D",
            addressLocality: "Seminyak",
            addressRegion: "Bali",
            addressCountry: "Indonesia",
            postalCode: "80361",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "-8.676446",
            longitude: "115.153198",
          },
          openingHours: "Mo-Su 10:00-22:00",
          priceRange: "$$",
          image: [
            "https://res.cloudinary.com/dnnrll6sl/image/upload/v1703994196/main-hero_quxs5t.jpg",
            "https://res.cloudinary.com/dsq21hpwn/image/upload/v1672385242/Re%20Day%20Spa/treatment-1_bucbix.jpg",
          ],
          sameAs: [
            "https://www.facebook.com/pages/Re-Day-Spa/821996157852429",
            "https://twitter.com/ReDaySpa",
            "https://www.instagram.com/remassagestudio/",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Spa Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Balinese Massage",
                  description:
                    "Traditional Balinese massage with acupressure and kneading techniques",
                  category: "Massage",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "60 minutes",
                    price: "310000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "90 minutes",
                    price: "450000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "120 minutes",
                    price: "580000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "RĒ Signature Massage",
                  description:
                    "Our signature massage combining traditional and modern techniques",
                  category: "Massage",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "60 minutes",
                    price: "360000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "90 minutes",
                    price: "520000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "120 minutes",
                    price: "680000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Deep Tissue Rubdown",
                  description:
                    "Intensive deep tissue massage for muscle tension relief",
                  category: "Massage",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "60 minutes",
                    price: "350000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "90 minutes",
                    price: "500000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "120 minutes",
                    price: "630000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Prenatal Massage",
                  description:
                    "Safe and relaxing massage for expecting mothers",
                  category: "Massage",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "60 minutes",
                    price: "350000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "90 minutes",
                    price: "500000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Hot Stone Massage",
                  description:
                    "Therapeutic massage using heated volcanic stones",
                  category: "Massage",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "90 minutes",
                    price: "550000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "120 minutes",
                    price: "700000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Four Hands Massage",
                  description:
                    "Synchronized massage performed by two therapists",
                  category: "Massage",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "60 minutes",
                    price: "550000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "90 minutes",
                    price: "780000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "120 minutes",
                    price: "950000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Aching Foot Relaxer",
                  description:
                    "Specialized foot massage for tired and aching feet",
                  category: "Massage",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "30 minutes",
                    price: "150000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "60 minutes",
                    price: "280000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "90 minutes",
                    price: "400000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Hand, Neck and Shoulder Massage",
                  description: "Targeted massage for upper body tension relief",
                  category: "Massage",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "30 minutes",
                    price: "150000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "60 minutes",
                    price: "280000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "90 minutes",
                    price: "400000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Scalp Purity Ritual",
                  description:
                    "Deep cleansing scalp treatment for healthy hair",
                  category: "Hair Care",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "90 minutes",
                    price: "650000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Heritage Hair Care",
                  description: "Traditional Balinese hair care treatment",
                  category: "Hair Care",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "60 minutes",
                    price: "450000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Luxurious Keratin Mask",
                  description: "Intensive keratin treatment for damaged hair",
                  category: "Hair Care",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "60 minutes",
                    price: "450000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Intensely Nourishing Hair",
                  description:
                    "Deep nourishing treatment for dry and damaged hair",
                  category: "Hair Care",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "60 minutes",
                    price: "450000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "RĒ Signature Facial",
                  description:
                    "Our signature facial treatment for all skin types",
                  category: "Facial",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "60 minutes",
                    price: "500000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Sun S.O.S Facial",
                  description:
                    "Intensive facial treatment for sun-damaged skin",
                  category: "Facial",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "30 minutes",
                    price: "380000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Bali Coffee Body Scrub",
                  description:
                    "Exfoliating body scrub with authentic Balinese coffee",
                  category: "Body Scrub",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "45 minutes",
                    price: "300000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Aloe Vera Body Mask",
                  description:
                    "Soothing and hydrating aloe vera body treatment",
                  category: "Body Scrub",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "15 minutes",
                    price: "200000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Coco & Vanilla Body Scrub",
                  description: "Luxurious coconut and vanilla body exfoliation",
                  category: "Body Scrub",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "45 minutes",
                    price: "300000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Hand Care",
                  description: "Professional hand treatment and care",
                  category: "Hand & Foot Care",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "60 minutes",
                    price: "350000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Foot Care",
                  description: "Professional foot treatment and care",
                  category: "Hand & Foot Care",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "75 minutes",
                    price: "400000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Sport Manicure / Pedicure",
                  description: "Complete manicure/pedicure service",
                  category: "Hand & Foot Care",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "45 minutes",
                    price: "250000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Express Manicure / Pedicure",
                  description: "Quick manicure/pedicure service",
                  category: "Hand & Foot Care",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "45 minutes",
                    price: "250000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Body Revive",
                  description: "Revitalizing full body ritual treatment",
                  category: "Ritual",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "1 hr 45 min",
                    price: "600000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Sun Reliever",
                  description: "Soothing treatment for sun-exposed skin",
                  category: "Ritual",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "1 hr 45 min",
                    price: "800000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Urban Rewind",
                  description: "Stress-relief ritual for urban lifestyle",
                  category: "Ritual",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "2 hr 15 min",
                    price: "900000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Body Nourish",
                  description: "Intensive body nourishing ritual",
                  category: "Ritual",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "120 min",
                    price: "700000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "The Royal",
                  description: "Ultimate luxury spa experience",
                  category: "Ritual",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "3 hr 30 min",
                    price: "1200000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Totally Pampered",
                  description: "Complete pampering experience",
                  category: "Ritual",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "90 min",
                    price: "700000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Kiddie Body Massage",
                  description: "Gentle massage for children",
                  category: "Kiddie",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "60 minutes",
                    price: "290000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "90 minutes",
                    price: "400000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Kiddie Foot Massage",
                  description: "Relaxing foot massage for children",
                  category: "Kiddie",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "30 minutes",
                    price: "150000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    name: "60 minutes",
                    price: "250000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Kiddie Mini Manicure",
                  description: "Fun and safe manicure for children",
                  category: "Kiddie",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "45 minutes",
                    price: "200000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Kiddie Mini Pedicure",
                  description: "Fun and safe pedicure for children",
                  category: "Kiddie",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "45 minutes",
                    price: "200000",
                    priceCurrency: "IDR",
                  },
                ],
              },
            ],
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "150",
          },
        };

      case "FAQPage":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do we need to book in advance?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "To ensure you receive all the spa treatments you want, advance booking is highly recommended. Customers may book up to one month in advance of their arrival.",
              },
            },
            {
              "@type": "Question",
              name: "What type of payments do you accept? And it is safe to pay online?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We accept all major credit card and cash. We also accept local Indonesian bank debit cards and bank transfer. We do not hold or share you credit card information. All online payment are made through a trustworthy booking system and payment gateway provider.",
              },
            },
            {
              "@type": "Question",
              name: "Why should I pay Deposit Payment?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Deposit payment is needed to secure your booking. This way we can confidently allocate the necessary resources and staff members to our committed customers.",
              },
            },
            {
              "@type": "Question",
              name: "What is your cancellation policy?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "All payments made are strictly non-refundable. Please make sure you allocate/choose your time wisely and fully committed before making an appointment with us.",
              },
            },
            {
              "@type": "Question",
              name: "When do I need to arrive before my appointment?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You need to come at least 15 minutes before your scheduled appointment. It is because you need to fill-in a consultation form to better serve and personalise your treatment. If you are late for your appointment, you will only receive the remainder of what is left of your service.",
              },
            },
            {
              "@type": "Question",
              name: "What if I am coming late to my appointment?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Arriving late will mean that your treatment time is shortened. Your treatment will end on time, so the next guest will not be delayed. The full value of your treatment will be charged. Please plan your travel time wisely to get to our spa location.",
              },
            },
            {
              "@type": "Question",
              name: "Can I reschedule my appointment?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, you can reschedule your appointment. But you need to notify us at least 3 hours prior to your treatment. Reschedule is based on the time slot and therapist availability. Rescheduling less than 3 hours notice is not allowed. Additionally, please be aware that rescheduling is allowed within a maximum period of 7 days after the payment or deposit was made. Any rescheduling requests made beyond this timeframe may not be accommodated.",
              },
            },
            {
              "@type": "Question",
              name: "Do you sell gift vouchers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we do sell gift voucher. You can contact our reservation team for more detail information.",
              },
            },
            {
              "@type": "Question",
              name: "Does Re Massage Studio have a Membership program?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we do have a Membership Program for our loyal customers. You can contact our reservation team for more details on the Membership Program price list and benefits.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer spa treatment for men?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, men also can come and have treatment at our spa. We pride ourselves on offering a wide range of professional treatments for both men and women. Our dedicated team of trained therapists is committed to providing a relaxing and therapeutic professional spa experience.",
              },
            },
            {
              "@type": "Question",
              name: "I am pregnant. Can I come to Re Massage Studio?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You certainly can. We do offer treatments for expecting moms after their first trimester to enjoy a much needed pampering session. We use pregnancy safe products to ensure you can enjoy your treatments while having its benefits. We do not recommend any type of massage treatments using deep pressure, heat and foot massage at any time during pregnancy. Please consult with your physician for the best advice on which treatments are safe for your individual condition before making an appointment.",
              },
            },
            {
              "@type": "Question",
              name: "What if I had a certain medical condition? Can I still come and have treatments?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Upon arriving you are required to fill in our consultation. You MUST disclose all of your medical conditions in the form eq. injury, recent surgery, specific illness, chemotherapy, pregnancy, allergies, etc. Certain medical conditions can be affected by the spa experiences - particularly those involving extremes of temperature - may preclude you from having some of the treatments available, or may require us to adjust the treatment to accommodate any conditions. We use many essential oils within our treatments and spa experiences, please discuss any allergies you have with our staff prior to your treatment/spa entry. All bookings made are subject to change, based on the information given on the Consultation Form being assessed prior to your appointment. We reserve the right to refuse treatments if we feel it is not in the best interest of the customer.",
              },
            },
            {
              "@type": "Question",
              name: "Do you have a private treatment room or gender segregated room?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We understand and respect the privacy concerns of all our customers, including those with specific cultural or religious preference. We strive to create a comfortable and inclusive environment for everyone to enjoy their spa experience. While we currently only have one VIP room with two beds, and the rest of the massage beds upstair are separated by thick curtains that provide a high level of privacy. When curtains are drawn, they effectively shield the massage area from view, preventing anyone from peeking inside.",
              },
            },
            {
              "@type": "Question",
              name: "Can I choose to have male or female therapist?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We only have female therapists at our spa.",
              },
            },
            {
              "@type": "Question",
              name: "Do I have to completely undress? What should I wear during a body massage?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You may undress to your level of comfort. We do provide single use/disposable panties for customers. Your therapist will leave the room so you can undress and lie on the massage bed, and you will be asked to cover your body with sarong provided. The therapist will only uncover the parts they are working on, so you will have privacy.",
              },
            },
            {
              "@type": "Question",
              name: "Should I shower after a massage?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We recommend not to shower right after a massage session. The water temperature can cause your muscles to tense up, which counter the benefit of massage itself. Heat from hot shower also can also increase the risk of dehydration. And by taking a shower immediately, you will wash off the massage oils that are supposed to be very good for your skin and health. We recommend you wait at least one hour to take a shower after your massage session. If you feel uncomfortable with the oil, instead of showering, you can ask our therapist to wipe some of the excess oil with damp cloth after your massage session.",
              },
            },
            {
              "@type": "Question",
              name: "Can I bring my kids to the spa?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! Having a fun spa day with kids can be a bonding experience. We love to welcome you and your kids to our spa. We offer spa treatments for kids to also enjoy with their parents. Kids from age 3+ can come and have treatments at our spa and an adult must be present in the room whilst the treatments are performed.",
              },
            },
            {
              "@type": "Question",
              name: "Should I tip?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "In Bali, tipping your therapist is a nice gesture, but you do not have to do it if you do not want to. Tipping is optional, and you can adjust the amount based on how happy you are with the treatment. It is all up to you!",
              },
            },
            {
              "@type": "Question",
              name: "Where can I store my belongings?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We have lockers to store customers' belongings, each locker has a key to lock the locker, and customers will bring the key with them during the treatment. However we recommend that you leave any valuable items at home/accomodation, as we are not held responsible for any loss incurred.",
              },
            },
            {
              "@type": "Question",
              name: "Do you have parking space?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we do have parking space for car and motorbike.",
              },
            },
          ],
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
