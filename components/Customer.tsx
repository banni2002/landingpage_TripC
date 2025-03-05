"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Nguyễn Văn A",
    type: "Du khách yêu thích khám phá",
    avatar: "/images/avatar.jpg",
    review:
      "TripC đã thay đổi cách tôi lập kế hoạch cho những chuyến đi. Ứng dụng này rất dễ sử dụng và giúp tôi tìm thấy những trải nghiệm địa phương tuyệt vời mà tôi không hề biết đến trước đây.",
  },
  {
    name: "Trần Thị B",
    type: "Chuyên gia du lịch",
    avatar: "/placeholder.svg?height=40&width=40",
    review:
      "Tôi đã sử dụng nhiều ứng dụng du lịch, nhưng TripC thực sự nổi bật. AI của họ đưa ra những gợi ý rất chính xác và hữu ích cho chuyến đi của tôi.",
  },
  {
    name: "Lê Văn C",
    type: "Người yêu thích du lịch",
    avatar: "/placeholder.svg?height=40&width=40",
    review:
      "Hệ thống đặt chỗ trên TripC rất tiện lợi. Tôi đã đặt được khách sạn và vé máy bay chỉ trong vài phút mà không gặp bất kỳ khó khăn nào.",
  },
  {
    name: "Phạm Thị D",
    type: "Người dùng trung thành",
    avatar: "/placeholder.svg?height=40&width=40",
    review:
      "TripC không chỉ giúp tôi tiết kiệm thời gian mà còn mang đến những trải nghiệm tuyệt vời. Tôi sẽ giới thiệu cho bạn bè và gia đình của mình.",
  },
  {
    name: "Nguyễn Thị E",
    type: "Người khám phá ẩm thực",
    avatar: "/placeholder.svg?height=40&width=40",
    review:
      "Tôi đã tìm thấy nhiều nhà hàng địa phương ngon miệng mà tôi chưa từng biết đến trước đây. TripC đã giúp tôi có những bữa ăn tuyệt vời trong chuyến đi của mình.",
  },
  {
    name: "Huỳnh Văn F",
    type: "Người yêu thích khám phá",
    avatar: "/placeholder.svg?height=40&width=40",
    review:
      "Tôi đã có một chuyến đi tuyệt vời nhờ vào sự hỗ trợ của TripC. Tính năng gợi ý địa điểm rất đặc sắc và hữu ích.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Đánh giá của người dùng về TripC
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.type}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">{testimonial.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
