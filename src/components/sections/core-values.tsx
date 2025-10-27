"use client";

import { motion } from "framer-motion";
import { AuroraText } from "../ui/aurora-text";

export default function CoreValues() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-start font-bold text-gray-900 mb-4">
              Giá trị
              <AuroraText className="px-2" colors={["#002e7dff", "#ae0303ff"]}>
                cốt lõi
              </AuroraText>
            </h2>
            <p className="text-lg text-gray-600 text-start mx-auto">
              Thúc đẩy tri thức và đổi mới sáng tạo vì một tương lai bền vững
            </p>
          </motion.div>
        </motion.div>
        {/* Core Values Cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-gray-900 mb-6">
                NHÂN BẢN
              </h3>
              <p className="text-lg font-semibold text-gray-700 leading-relaxed mb-8">
                Đặt con người làm trung tâm trong mọi hoạt động giáo dục. Chúng
                tôi cam kết phát triển toàn diện nhân cách, kỹ năng và tri thức
                cho từng sinh viên, tạo nên những con người có tâm hồn cao đẹp
                và năng lực vượt trội.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-gray-900 mb-6">
                HỘI NHẬP
              </h3>
              <p className="text-lg font-semibold text-gray-700 leading-relaxed mb-8">
                Kết nối và hội nhập với cộng đồng giáo dục toàn cầu. Tạo ra môi
                trường học tập đa văn hóa, mở rộng tầm nhìn quốc tế và xây dựng
                cầu nối hợp tác với các tổ chức giáo dục hàng đầu thế giới.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-gray-900 mb-6">
                SÁNG TẠO
              </h3>
              <p className="text-lg font-semibold text-gray-700 leading-relaxed mb-8">
                Thúc đẩy tinh thần đổi mới và sáng tạo trong nghiên cứu khoa
                học, phương pháp giảng dạy và ứng dụng công nghệ. Nuôi dưỡng tư
                duy sáng tạo và khả năng giải quyết vấn đề cho thế hệ tương lai.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
