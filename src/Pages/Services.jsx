import React, { useEffect, useState } from "react";
import NavForOther from "../components/NavForOther";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // ✅ Use correct path for public folder JSON
    // Place your `services.json` inside `public/data/services.json`
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch services:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>affordable digital marketing services | Risezonic.</title>
        <meta
          name="description"
          content="Affordable digital marketing services for small businesses. Risezonic delivers result-driven SEO, PPC, SMM, and web strategies to grow your online presence."
        />
        <meta name="keywords" content=" digital marketing services " />
        <meta
          property="og:title"
          content="affordable digital marketing services | Risezonic."
        />
        <meta
          property="og:description"
          content="Affordable digital marketing services for small businesses. Risezonic delivers result-driven SEO, PPC, SMM, and web strategies to grow your online presence."
        />
        <link
          rel="canonical"
          href="https://www.risezonic.com/our-services"
        />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Risezonic",
          "image": "https://www.risezonic.com/assets/risezonic%20logo%20(1)-DIYazAgE.png",
          "@id": "https://www.risezonic.com",
          "url": "https://www.risezonic.com/our-services",
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

    <section
  className="relative bg-center bg-cover bg-fixed py-20 overflow-hidden"
  style={{
    backgroundImage: "url('/assets/services/counter-bg.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/20 blur-3xl rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4">
    
    <div className="flex justify-center mb-16 pt-10">
      <div className="bg-white/10 backdrop-blur-lg border  border-white/20 px-8 py-6 rounded-2xl text-center shadow-2xl">
        <h1 className="font-heading sm:text-5xl text-3xl text-white leading-tight">
          Top Digital Marketing Services
        </h1>

        <p className="text-white/80 font-body pt-4 max-w-2xl mx-auto">
          Grow your business with result-driven marketing strategies,
          SEO, social media campaigns, paid ads, and branding solutions.
        </p>
      </div>
    </div>

    {loading ? (
      <div className="max-w-7xl flex justify-center items-center py-20">
        <Loader />
      </div>
    ) : (
      <div className="grid lg:grid-cols-2 gap-8">
        {services
          .filter((service) => service.isActive)
          .map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/95 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://i.postimg.cc/G2nbVSbQ/Banner-1-green.jpg')",
                }}
              ></div>

              <div className="relative z-10">
                
                <span className="text-6xl font-bold text-primary/10 group-hover:text-white/20 absolute top-0 right-4">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="text-3xl font-heading text-primary group-hover:text-black transition duration-300">
                  {service.title}
                </h2>

                <div className="w-20 h-1 bg-secondary rounded-full mt-4 mb-6 group-hover:bg-primary"></div>

                <p className="font-body text-gray-700 leading-7 line-clamp-4 group-hover:text-black transition duration-300">
                  {service.shortdescription}
                </p>

                <Link
                  to={`/our-services/${encodeURIComponent(service.url)}`}
                  className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full mt-8 font-medium hover:bg-primary transition duration-300"
                >
                  Read More
                  <span className="group-hover:translate-x-1 transition duration-300">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
      </div>
    )}
  </div>
</section>
    </>
  );
}
