import React, { useEffect } from "react";
import NavForOther from "../components/NavForOther";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FQA";
import Aboutusimg from "../../src/assets/images/Aboutus/Aboutus.webp";
import whatwedo from "../assets/images/Aboutus/AboutUsWhatwedo.png";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Globe,
  TrendingUp,
} from "lucide-react";



export default function About() {
 
  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <div className="application">
          <title>
            About Risezonic | Trusted Digital Marketing services Company in Delhi.
          </title>
          <meta
            name="description"
            content="Learn more about Risezonic—Delhi’s leading digital marketing services company. how we help businesses thrive online."
          />
          <meta name="keywords" content="home, risezonic, tech, services" />
          <meta
            property="og:title"
            content=" About Risezonic | Trusted Digital Marketing services Company in
              Delhi."
          />
          <meta
            property="og:description"
            content="Discover our latest offerings at Risezonic."
          />
          <link rel="canonical" href="https://www.risezonic.com/about-us" />
      </div> */}
      <Helmet>
        <title> About Risezonic | Trusted Digital Marketing services Company in Delhi.</title>
        <meta
          name="description"
          content="Learn more about Risezonic—Delhi’s leading digital marketing services company. how we help businesses thrive online."
        />
        <meta name="keywords" content="home, risezonic, tech, services" />
        <meta
          property="og:title"
          content="About Risezonic | Trusted Digital Marketing services Company in Delhi."
        />
        <meta
          property="og:description"
          content="Learn more about Risezonic—Delhi’s leading digital marketing services company. how we help businesses thrive online."
         />
        <link rel="canonical" href="https://www.risezonic.com/about-us" />

        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Risezonic",
          "image": "https://www.risezonic.com/assets/risezonic%20logo%20(1)-DIYazAgE.png",
          "@id": "https://www.risezonic.com",
          "url": "https://www.risezonic.com/about-us",
          "telephone": "8178857250",
          "address": {
            "@type": "PostalAddress",
          "streetAddress": "RZ11/D, Upper Ground Floor Opposite Palam Metro Station Gate No 3, Palam Dwarka Road",
          "addressLocality": "Delhi",
          "postalCode": "110045",
          "addressCountry": "IN"
  },
          "geo": {
            "@type": "GeoCoordinates",
          "latitude": 28.584759,
          "longitude": 77.079077
  },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
  },
          "sameAs": [
          "https://www.facebook.com/risezonicofficial/",
          "https://x.com/risezonicLLP",
          "https://www.instagram.com/risezonicofficial/",
          "https://www.youtube.com/@risezonic",
          "https://www.linkedin.com/company/risezonic/",
          "https://in.pinterest.com/risezonicLLP/"
          ] 
}`}
        </script>


      </Helmet>

      <NavForOther />
<div className="block justify-center overflow-hidden">


      <section className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col lg:flex-row justify-center items-center gap-14 mt-10 md:mt-24 min-h-screen">


          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full"
          >
            <article>

              <section className="flex justify-center text-start items-center p-2 md:p-6">

                <div className="relative">

                  <motion.h1
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary leading-tight"
                  >
                    <span className="text-black md:text-8xl">
                      ABOUT
                    </span>{" "}
                    Us.
                  </motion.h1>

                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="block text-amber-600 text-2xl md:text-4xl font-semibold"
                  >
                    _____________________
                  </motion.span>

                  <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="md:pt-8 pt-6 font-body text-sm italic font-semibold leading-relaxed text-gray-700 select-none"
                  >
                    At Risezonic, we believe in refreshing the idea of growth
                    in the digital age. Risezonic was established with the aim
                    of giving brands clarity, creativity and confidence which
                    has made its name strong and linked it to success and
                    honesty.
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="md:pt-8 pt-4 font-body text-sm md:text-base leading-relaxed text-gray-600 select-none"
                  >
                   Risezonic is a results-driven digital marketing and web development agency dedicated to helping businesses to establish a strong online presence and achieve sustainable growth.

Our mission is simple: Deliver innovative digital solutions that help our clients attract more customers, increase revenue, and stay ahead of the competition.

We combine creativity, technology, and data-driven strategies to create marketing campaigns that generate measurable results.

                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="md:pt-8 pt-4 font-body text-sm md:text-base leading-relaxed text-gray-600 select-none"
                  >
                    Our agency is based on the belief that having an online
                    presence is important, but being remembered is even more
                    so. Because we are eager to evolve and spot innovative
                    opportunities, we succeed in linking ideas with results.
                    Our team members all feel a strong passion: to achieve
                    something remarkable and steer brands into success.
                    Essentially, we stand for not just a business, but also a
                    way of thinking, a collective group and a helper of
                    progress.
                  </motion.p>

                </div>

              </section>

            </article>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="w-full overflow-hidden rounded-3xl"
          >
            <img
              loading="lazy"
              className="bg-contain bg-center h-full w-full object-cover rounded-3xl transition duration-700 hover:scale-105"
              src="https://raw.githubusercontent.com/Ashish-Kaintura/risezonic2025-/main/src/assets/images/Aboutus/Aboutus.webp"
              alt="Plan & Create"
            />
          </motion.div>

        </div>

      </section>


      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-20">

        <div className="flex flex-col lg:flex-row justify-center items-center gap-14">


          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="w-full hidden lg:flex overflow-hidden rounded-3xl"
          >
            <img
              loading="lazy"
              className="bg-contain bg-center h-full w-full object-cover rounded-3xl transition duration-700 hover:scale-105"
              src="https://raw.githubusercontent.com/Ashish-Kaintura/risezonic2025-/main/src/assets/images/Aboutus/AboutUsWhatwedo.png"
              alt="Plan & Create"
            />
          </motion.div>


          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full"
          >
            <article>

              <section className="flex justify-center text-start items-center p-2 md:p-6">

                <div className="relative">

                  <motion.h2
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary leading-tight"
                  >
                    <span className="text-black md:text-8xl">
                      What
                    </span>{" "}
                    We Do
                  </motion.h2>

                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="block text-amber-600 text-2xl md:text-4xl font-semibold"
                  >
                    _____________________
                  </motion.span>

                  <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="md:pt-8 pt-6 font-body text-sm italic font-semibold leading-relaxed text-gray-700 select-none"
                  >
                    We create winning digital solutions using our strategy,
                    creative thinking and precise methods. Because we are a
                    forward-thinking digital marketing agency, our job is to
                    strengthen businesses’ presence online and achieve
                    successful measurable results.
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="md:pt-8 pt-4 font-body text-sm md:text-base leading-relaxed text-gray-600 select-none "
                  >
                    Everything we do in brand positioning, performance
                    marketing, SEO, content creation and data-driven campaigns
                    is focused on what your business aims to achieve. We are
                    not limited to marketing, as we also connect with users,
                    engage them and turn them into customers.
                  </motion.p>

                </div>

              </section>

            </article>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full flex lg:hidden overflow-hidden rounded-3xl"
          >
            <img
              loading="lazy"
              className="bg-contain bg-center h-full w-full object-cover rounded-3xl"
              src="https://raw.githubusercontent.com/Ashish-Kaintura/risezonic2025-/main/src/assets/images/Aboutus/AboutUsWhatwedo.png"
              alt="Plan & Create"
            />
          </motion.div>

        </div>

      </section>


      <article className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <div className="flex justify-between justify-center">

            <div>

              <div className="relative text-center">

                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl font-heading text-primary leading-tight"
                >
                  <span className="text-black md:text-5xl">
                    Driven by Purpose,
                  </span>{" "}
                  Defined by Values
                </motion.h2>

                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="block text-amber-600 text-2xl md:text-4xl font-semibold"
                >
                  _____________________
                </motion.span>

                <motion.h3
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="md:pt-8 pt-6 font-body text-sm italic font-semibold leading-relaxed text-gray-700 select-none"
                >
                 As a team, we rely on our strong principles of integrity, creativity and planning. What we believe drives our actions, reaching from how we relate to clients to how we run every campaign. We think that growth should fit your brand’s future objectives.
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="md:pt-8 pt-4 font-body text-sm md:text-base leading-relaxed text-gray-600 select-none"
                >
                 together creative thinking and numbers, we make solutions that can be measured for success. Every team is based on trust, openness and working together towards the best results. When you choose us, you get the support of a team that believes in your achievements.
                </motion.p>

              </div>

            </div>

          </div>

        </motion.section>

      </article>


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Testimonial />
      </motion.div>


      <motion.article
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <section>

          <div className="flex justify-center py-14 px-4 bg-secondary text-white font-heading sm:text-5xl text-3xl text-center overflow-hidden relative">

            <motion.div
              animate={{
                x: ["0%", "10%", "0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="absolute inset-0 opacity-10"
            />

            <h2 className="relative z-10 leading-tight">
              Fueling Digital Growth with Creativity and Precision
            </h2>

          </div>

        </section>

      </motion.article>


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <FAQ />
      </motion.div>

    </div>

 
    </>
  );
}
