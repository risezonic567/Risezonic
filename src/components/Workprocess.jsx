import React from "react";
import { motion } from "framer-motion";

import Workprocess1 from "../assets/images/Home/workplan.jpg";
import Workprocess2 from "../assets/images/Home/Workprocess2.jpg";
import Workprocess3 from "../assets/images/Home/Workprocess3.jpg";

export default function Workprocess() {
  return (
    <div>
      <div className="block text-center justify-center pt-10 relative container mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading"
        >
          Work Process
        </motion.h2>

        <span className="text-amber-600 text-3xl md:text-4xl font-semibold absolute top-12 left-0 right-0 bottom-0 inset-0">
          ______________
        </span>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-xl pt-6 text-gray-600 font-body pb-8 max-w-6xl text-center mx-auto leading-relaxed"
        >
          To achieve our results, we are creative, plan well and make teamwork
          run smoothly. The main purpose of our strategy is to support your
          business’s growth by finding out what you require and creating
          solutions that help.
        </motion.p>

        {/* SECTION 1 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:justify-between justify-center bg-gray-200 overflow-hidden rounded-xl shadow-lg"
        >

          <div className="w-full flex justify-center text-center bg-gray-200 pt-6 sm:pt-0">
            <article className="w-full">

              <section className="bg-white min-h-[25rem] md:h-[35rem] flex justify-center text-center items-center p-4">
                
                <div className="relative p-4">

                  <h2 className="text-3xl md:text-4xl font-heading text-primary">
                    Plan & Create
                  </h2>

                  <span className="text-amber-600 text-3xl md:text-4xl font-semibold absolute top-4 left-0 right-0 bottom-0 inset-0">
                    ______________
                  </span>

                  <p className="pt-8 text-sm md:text-base leading-relaxed">
                    By using the skills of a top social media marketing agency
                    and expert website designers, Risezonic helps brands become
                    strong digital presences. Grow and improve your business
                    with carefully made digital tools.
                  </p>

                </div>

              </section>

            </article>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-gray-300 overflow-hidden"
          >
            <img
              loading="lazy"
              className="object-cover bg-center h-[300px] sm:h-full w-full"
              src="https://raw.githubusercontent.com/Ashish-Kaintura/risezonic2025-/main/src/assets/images/Home/workprocess1.jpg"
              alt="Plan & Create"
            />
          </motion.div>

        </motion.div>

        {/* SECTION 2 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:justify-between justify-center bg-gray-200 overflow-hidden rounded-xl shadow-lg mt-10"
        >

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-gray-300 overflow-hidden order-2 sm:order-1"
          >
            <img
              loading="lazy"
              className="object-cover bg-center h-[300px] sm:h-full w-full"
              src="https://raw.githubusercontent.com/Ashish-Kaintura/risezonic2025-/main/src/assets/images/Home/workprocess2.jpg"
              alt="Plan & Create"
            />
          </motion.div>

          <div className="w-full flex justify-center text-center bg-gray-200 order-1 sm:order-2">
            <article className="w-full">

              <section className="bg-white min-h-[25rem] md:h-[35rem] flex justify-center text-center items-center p-4">
                
                <div className="relative p-4">

                  <h2 className="text-3xl md:text-4xl font-heading text-primary">
                    Development & Testing
                  </h2>

                  <span className="text-amber-600 text-3xl md:text-4xl font-semibold absolute top-4 left-0 right-0 bottom-0 inset-0">
                    ______________
                  </span>

                  <p className="pt-8 text-sm md:text-base leading-relaxed">
                    Risezonic makes certain that no mistakes are made by
                    performing detailed develop & testing in all our website
                    design and development work. Provides the best website
                    design services, we supply platforms that work quickly, are
                    safe and perform well on everything from websites to apps.
                  </p>

                </div>

              </section>

            </article>
          </div>

        </motion.div>

        {/* SECTION 3 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:justify-between justify-center bg-gray-200 overflow-hidden rounded-xl shadow-lg mt-10"
        >

          <div className="w-full flex justify-center text-center bg-gray-200 pt-6 sm:pt-0">
            <article className="w-full">

              <section className="bg-white min-h-[25rem] md:h-[35rem] flex justify-center text-center items-center p-4">
                
                <div className="relative p-4">

                  <h2 className="text-3xl md:text-4xl font-heading text-primary">
                    Make Live
                  </h2>

                  <span className="text-amber-600 text-3xl md:text-4xl font-semibold absolute top-4 left-0 right-0 bottom-0 inset-0">
                    ______________
                  </span>

                  <p className="pt-8 text-sm md:text-base leading-relaxed">
                    Once the project has been perfected, we finalize your
                    project for launch. We've gone through a great process and
                    the last stage is a delivered and deployed project. The
                    project is now completely launched, so you can access your
                    website or app just like anyone else can. Then we can
                    provide support and monitoring so your project runs at its
                    best. You can run your business and we'll handle the tedious
                    technical issues.
                  </p>

                </div>

              </section>

            </article>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-gray-300 overflow-hidden"
          >
            <img
              loading="lazy"
              className="object-cover bg-center h-[300px] sm:h-full w-full"
              src="https://raw.githubusercontent.com/Ashish-Kaintura/risezonic2025-/main/src/assets/images/Home/workprocess3.jpg"
              alt="Plan & Create"
            />
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}