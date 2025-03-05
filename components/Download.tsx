"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Fake data
const fakeData = {
  image: "/images/banner-install.png",
  title: "Tải ngay ứng dụng TripC để bắt đầu hành trình của bạn!",
  description:
    "Với TripC, việc lập kế hoạch chuyến đi chưa bao giờ dễ dàng đến thế. Hãy khám phá những trải nghiệm du lịch tuyệt vời chỉ bằng một cú chạm.",
  buttonText: "Bắt đầu hành trình!",
};

export default function DownloadSection() {
  return (
    <section className="w-full pb-16 bg-white">
      <div className="box-wp mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Phone Image - Animate từ dưới lên */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Image src={fakeData.image} alt="Smartphone with TripC app" width={504} height={524} />
            </div>
          </motion.div>

          {/* Text Content - Animate từ phải sang trái */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">{fakeData.title}</h2>
            <p className="text-gray-700 mb-8">{fakeData.description}</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
              {fakeData.buttonText}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
