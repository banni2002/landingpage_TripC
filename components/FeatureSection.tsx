"use client";

import React from "react";
import { Smartphone, Plane, Map } from "lucide-react";
import { motion } from "framer-motion";

function FeatureCard({
  icon: Icon,
  title,
  subtitle,
  description,
  imageUrl,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <>
      <motion.div
        className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 md:block hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="h-64 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-2">
            <Icon className="h-5 w-5 text-blue-500 mr-2" />
            <p className="text-blue-500 font-medium">{title}</p>
          </div>
          <h3 className="text-xl font-bold mb-2">{subtitle}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </motion.div>

      {/* Mobile and Tablet view */}
      <motion.div
        className="md:hidden flex flex-row bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-1/3 h-full">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="w-2/3 p-4 flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <Icon className="h-5 w-5 text-blue-500 mr-2" />
            <p className="text-blue-500 font-medium">{title}</p>
          </div>
          <h3 className="text-xl font-bold mb-2">{subtitle}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </motion.div>
    </>
  );
}

function App() {
  const features = [
    {
      icon: Smartphone,
      title: "Lập Kế Hoạch Thông Minh",
      subtitle: "Lập Kế Hoạch",
      description:
        "TripC sử dụng AI để tạo ra những lịch trình tùy chỉnh theo sở thích cá nhân của bạn. Bạn chỉ cần nhập thông tin cơ bản.",
      imageUrl: "/images/feature1.png",
    },
    {
      icon: Plane,
      title: "Đặt Vé Dễ Dàng",
      subtitle: "Đặt Vé Nhanh",
      description:
        "Đặt vé máy bay và khách sạn chỉ với vài cú chạm. TripC giúp bạn so sánh giá và tìm kiếm các lựa chọn tốt nhất.",
      imageUrl: "/images/feature2.png",
    },
    {
      icon: Map,
      title: "Trải Nghiệm Địa Phương",
      subtitle: "Khám Phá Địa Phương",
      description:
        "Khám phá những địa điểm không thể bỏ lỡ và các hoạt động thú vị tại điểm đến của bạn. TripC sẽ gợi ý cho bạn những trải nghiệm độc đáo.",
      imageUrl: "/images/feature3.png",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="box-wp mx-auto px-4 py-12">
        <motion.h2
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Những Tính Năng Đáng Chú Ý
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
              imageUrl={feature.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
