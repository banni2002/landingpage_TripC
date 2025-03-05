"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    question: "Làm thế nào để tải ứng dụng TripC?",
    answer:
      "Để tải ứng dụng TripC, bạn có thể truy cập vào App Store hoặc Google Play Store trên điện thoại của mình và tìm kiếm từ khóa “TripC”. Sau đó, bạn chọn ứng dụng TripC và bấm vào nút “Tải về” để cài đặt ứng dụng lên điện thoại của mình.",},
  {
    question: "TripC hỗ trợ những tính năng gì?",
    answer:
      "TripC cung cấp lập kế hoạch lịch trình tự động, đặt phòng khách sạn và vé máy bay, cùng với các gợi ý trải nghiệm địa phương để chuyến đi của bạn trở nên thú vị hơn.",
  },
  {
    question: "Có cần tài khoản để sử dụng TripC không?",
    answer:
      "Có, bạn cần tạo một tài khoản để có thể lưu trữ các thông tin cá nhân và lịch trình của mình. Điều này giúp bạn dễ dàng truy cập và quản lý thông tin khi cần thiết.",
  },
  {
    question: "TripC có miễn phí không?",
    answer:
      "Có, bạn có thể sử dụng nhiều tính năng cơ bản của TripC hoàn toàn miễn phí. Tuy nhiên, một số dịch vụ cao cấp có thể yêu cầu thanh toán.",
  },
  {
    question: "Làm thế nào để liên hệ nếu gặp vấn đề?",
    answer:
      "Nếu bạn gặp bất kỳ vấn đề nào, hãy liên hệ với đội ngũ hỗ trợ khách hàng của TripC qua email hoặc trang hỗ trợ trên ứng dụng để được tư vấn và giải đáp nhanh chóng.",
  },
];

export default function FAQSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="box-wp py-16 px-4 md:px-6 lg:px-8 faq mx-auto w-full">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          CÁC CÂU HỎI THƯỜNG GẶP
        </motion.h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <AccordionItem value={`item-${index}`} className="px-4 py-2 border border-gray-300 last:border-b-1 rounded-md">
                <AccordionTrigger className="text-[#384059]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
