import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
export default function PackageCard({ item }) {
  return (
   <div className="bg-white rounded-3xl shadow-xl p-6">

      <h2 className="text-3xl font-bold text-center">
        {item.title}
      </h2>

      <h3 className="text-5xl font-bold text-yellow-600 text-center mt-5">
        {item.price}
      </h3>

      <p className="text-gray-500 text-center mt-3">
        {item.subtitle}
      </p>

      <div className="mt-8 space-y-4">

        {item.features.map((feature, index) => (

          <div
            key={index}
            className="flex gap-3 items-start"
          >

            <Check className="text-green-600 mt-1" size={18} />

            <p>{feature}</p>

          </div>

        ))}

      </div>

      <Link to="https://wa.me/+91 97111 10975" className=" bg-yellow-600 text-white px-4 py-3 rounded-2xl mt-14 inline-block hover:bg-yellow-700 transition-all duration-300">
        Get Started
      </Link>

    </div>
  );
}