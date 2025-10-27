"use client";

import { motion } from "framer-motion";
import AGENT_BACKGROUND from "@/assets/agent-cta-background.webp";
import { AuroraText } from "../ui/aurora-text";

export default function UniversityLeadership() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lãnh đạo của
            <AuroraText className="px-2" colors={["#002e7dff", "#ae0303ff"]}>
              HCMUTE
            </AuroraText>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Đội ngũ lãnh đạo giàu kinh nghiệm, tận tâm với sự nghiệp giáo dục và
            phát triển nhân tài
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="relative bg-blue-600 min-h-[24rem] md:h-96 rounded-2xl overflow-hidden">
          <img
            src={AGENT_BACKGROUND}
            alt="Agent Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Content overlay */}
          <div className="absolute inset-0 bg-blue-900/40"></div>

          {/* Text content on left */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center pt-8 pb-12 lg:py-0">
                {/* Left side - Text */}
                <motion.div
                  className="text-white order-2 lg:order-1"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                    PGS. TS. Lê Hiếu Giang
                  </h3>
                  <p className="text-blue-100 text-lg sm:text-xl font-medium mb-2">
                    Hiệu trưởng Trường Đại học Sư phạm Kỹ thuật TP.HCM
                  </p>
                  <p className="text-blue-200 text-sm mb-4">
                    Chính thức từ ngày 24/01/2025
                  </p>
                  <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                    Với hơn 20 năm gắn bó và cống hiến cho nhà trường, từ cựu
                    sinh viên đến vị trí Hiệu trưởng, ông đã trải qua nhiều vị
                    trí quan trọng trong việc phát triển trường.
                  </p>
                </motion.div>

                {/* Right side - Image */}
                <motion.div
                  className="hidden lg:flex justify-center lg:justify-end order-1 lg:order-2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src="/PGS_TS_LGH.png"
                    alt="PGS. TS. Lê Hiếu Giang"
                    className="h-48 sm:h-64 md:h-80 lg:h-96 object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="p-24 lg:p-0"></div>
          <img
            src="/PGS_TS_LGH.png"
            alt="PGS. TS. Lê Hiếu Giang"
            className="lg:hidden right-8 absolute bottom-0 h-60 sm:h-64 md:h-80 lg:h-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
