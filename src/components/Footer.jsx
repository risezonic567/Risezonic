import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
  FaArrowRight,
} from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b1220] text-gray-300 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-white mb-5">
              Risezonic
            </h2>

            <p className="text-gray-300 leading-7 text-sm">
              We help businesses grow digitally with innovative web
              development, branding, SEO, and digital marketing
              solutions that deliver real results.
            </p>

            <div className="flex gap-4 mt-6">
              
              {[
                {
                  icon: <FaFacebookF />,
                  link: "https://www.facebook.com/risezonicofficial",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/risezonicofficial/",
                },
                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/company/risezonic",
                },
                {
                  icon: <FaYoutube />,
                  link: "https://www.youtube.com/@risezonic",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h2>

            <ul className="space-y-4 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Services", path: "/our-services" },
                { name: "Blogs", path: "/blogs" },
                { name: "Packages", path: "/package" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Term & Condition", path: "/term-condition" }
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className="group flex items-center gap-2 hover:text-white transition-all duration-300"
                  >
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition duration-300" />
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-6">
              Certificates
            </h2>

            <div className="grid grid-cols-2 gap-4">
              
              {[
                "https://raw.githubusercontent.com/Ashish-Kaintura/risezonic2025-/main/src/images/certificates/google%20certificate1.webp",
                "https://raw.githubusercontent.com/Ashish-Kaintura/risezonic2025-/main/src/images/certificates/miiscertificate.webp",
                "https://raw.githubusercontent.com/Ashish-Kaintura/risezonic2025-/main/src/images/certificates/iso9001.webp",
              ].map((img, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 hover:scale-105 transition duration-300"
                >
                  <img
                    loading="lazy"
                    src={img}
                    alt="certificate"
                    className="w-full h-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-6">
              Contact Us
            </h2>

            <div className="space-y-5 text-sm leading-7">
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition duration-300">
                <h3 className="text-white font-semibold mb-2">
                  Delhi Office
                </h3>

                <p className="text-gray-300">
                  RZ11/D, Upper Ground Floor Opp. Palam Metro
                  Station Gate No 3, Palam Dwarka Road, Delhi,
                  110045
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition duration-300">
                <h3 className="text-white font-semibold mb-2">
                  Gurugram Office
                </h3>

                <p className="text-gray-300">
                  07th Floor, Gate No 3 & 4, Ambience Island,
                  DLF Phase 3, NH-8, Gurugram, Haryana 122002
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          
          <p>
            © {new Date().getFullYear()} Risezonic. All rights reserved.
          </p>

          <div className="flex gap-5">
            
            <Link
              to="https://twitter.com/risezonicLLP"
              target="_blank"
              className="text-white transition"
            >
              Twitter
            </Link>

            <Link
              to="https://ai.risezonic.com/"
              target="_blank"
              className="text-white transition"
            >
              AI Risezonic
            </Link>

            <Link
              to="/privacy-policy"
              className="text-white transition"
            >
              Privacy Policy
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;