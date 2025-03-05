"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PropertyProps {
  type: string;
  name: string;
  beds: number;
  baths: number;
  cars: number;
  imageUrl: string;
}

const PropertyCard = ({ type, name, beds, baths, cars, imageUrl }: PropertyProps) => {
  return (
    <motion.div
      className="rounded-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative h-48 md:h-64">
        <Image src={imageUrl || "/placeholder.svg"} alt={`${name} property`} fill className="object-cover" />
      </div>
      <div className="p-4">
        <p className="text-sm font-medium text-gray-700">{type}</p>
        <h3 className="text-2xl font-bold mb-3">{name}</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700">
            🛏 {beds} Beds
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700">
            🚿 {baths} Baths
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700">
            🚗 {cars} Car{cars > 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function PropertyListing() {
  const properties = [
    {
      type: "Row House",
      name: "Belden",
      beds: 2,
      baths: 2,
      cars: 1,
      imageUrl: "/images/property1.png",
    },
    {
      type: "Detached Home",
      name: "Talens",
      beds: 2,
      baths: 2,
      cars: 1,
      imageUrl: "/images/property2.png",
    },
    {
      type: "Two-Unit Property",
      name: "Whelton",
      beds: 4,
      baths: 4,
      cars: 2,
      imageUrl: "/images/property3.png",
    },
  ];

  return (
    <section className="box-wp mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Premier Properties
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </section>
  );
}
