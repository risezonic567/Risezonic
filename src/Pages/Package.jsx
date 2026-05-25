import React, { useEffect } from 'react'
import NavForOther from "../components/NavForOther";
import Navbar2 from '../components/Navbar2';
import { packages } from '../data/packages'
import PackageCard from "../components/PackageCard";

export default function Package() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div>

      <div className="flex md:hidden">
        <NavForOther />
      </div>

      <Navbar2 />

      {/* HERO SECTION */}

      <section className="relative h-[70vh]">

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt=""
          className="h-full w-full object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-5">

          <h1 className="text-5xl md:text-7xl font-bold">
             Pricing Plans
          </h1>

          <p className="mt-5 text-lg max-w-2xl">
            Powerful SEO solutions designed to grow your business online
          </p>

          <a
            href="https://wa.me/919711110975"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 transition-all duration-300 px-8 py-4 rounded-2xl mt-10 text-lg font-semibold"
          >
            Chat on WhatsApp
          </a>

        </div>

      </section>

      {/* PACKAGE SECTION */}

      <section className="max-w-7xl mx-auto px-5 py-20">

        {/* TOP HEADING */}

        <div className="text-center mb-16">

          <p className="text-red-600 font-semibold text-lg">
            Custom  Plans Available
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Packages Tailored To Your Business Needs
          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto mt-5 text-lg">
            Need something different?
            We can customize  packages specifically
            according to your business goals and requirements.
          </p>

        </div>

        {/* PACKAGE CARDS */}

        <div className="grid md:grid-cols-3 gap-10">

          {packages.map((item) => (
            <PackageCard key={item.id} item={item} />
          ))}

        </div>

      </section>

    </div>
  )
}