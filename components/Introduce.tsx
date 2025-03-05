"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <section className="flex-1 bg-white">
      <div className="box-wp mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="h2-introduce">Welcome to TripC</h2>
            <h1 className="leading-tight h1-introduce">
              Trải nghiệm Du lịch Tốt Nhất
            </h1>
            <p className="text-gray-600 max-w-md">
              Embark on the journey of finding your dream design with us. We specialize in helping you uncover the
              perfect design that meets your needs and exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700">Schedule free consultation</Button>
              <Button variant="outline" className="group">
                More about us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 rounded-full opacity-20 blur-3xl">
            <Image
                src="/images/bg-introduce.png"
                alt="People collaborating on design"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-tl-[40%] rounded-tr-[40%] rounded-bl-[40%]"
              />
            </div>
            <div className="relative rounded-full overflow-hidden">
              <Image
                src="/images/hero.png"
                alt="People collaborating on design"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-tl-[40%] rounded-tr-[40%] rounded-bl-[40%]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 to-blue-300/20 rounded-tl-[40%] rounded-tr-[40%] rounded-bl-[40%]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
