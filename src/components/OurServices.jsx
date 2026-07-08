import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const OurServices = () => {
  const [services, setService] = useState([])
  const fetchdata = "/data/services.json"

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(fetchdata)

        if (!response.ok) {
          throw new Error("Network response was not ok")
        }

        const data = await response.json()
        setService(data)

      } catch (error) {
        console.error("Failed to fetch services:", error)
      }
    }

    fetchServices()
  }, [])

  return (
    <section className="py-12 px-4">
      
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-8">

          {services
            .filter((service) => service.isActive)
            .slice(0, 10)
            .map((service, idx) => (

              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                }}
                viewport={{ once: true }}
              >
                
                <Link to={`/our-services/${service.url}`}>

                  <div className="rounded-lg shadow-lg p-6 bg-white hover:bg-amber-600 hover:text-white hover:-translate-y-4 transition-all duration-300 transform hover:scale-105">
                    
                    <div className="text-4xl mb-4">
                      {service.icon}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl mb-4 h-64 overflow-hidden flex justify-center"
                    >
                      <img
                        loading="lazy"
                        className="w-full h-full object-contain"
                        src={service.CoverImage}
                        alt={service.title}
                      />
                    </motion.div>

                    <h3 className="text-normal font-semibold mb-2 line-clamp-1">
                      {service.title}
                    </h3>

                    <p className="text-sm line-clamp-2">
                      {service.shortdescription}
                    </p>

                  </div>

                </Link>

              </motion.div>
            ))}

        </div>

      </div>

    </section>
  )
}

export default OurServices