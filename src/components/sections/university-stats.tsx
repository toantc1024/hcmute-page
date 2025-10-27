"use client";

import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AuroraText } from "../ui/aurora-text";

interface StatItem {
  number?: number;
  suffix?: string;
  description: string;
  color: string;
}

const stats: StatItem[] = [
  {
    // number: 1,
    suffix: "#1",
    description: "Các giải thưởng nghiên cứu khoa học",
    color: "text-blue-900",
  },
  {
    number: 27000,
    suffix: "+",
    description: "Sinh viên đang theo học tại trường",
    color: "text-red-800",
  },
  {
    number: 52,
    suffix: "",
    description: "Chuyên ngành đào tạo",
    color: "text-blue-900",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
    },
  },
};

export default function UniversityStats() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-start font-bold text-gray-900 mb-4">
            TRƯỜNG TRỌNG ĐIỂM QUỐC GIA VỀ
            <AuroraText
              className="px-2"
              colors={["#0c4ebfff", "#1760dfff", "#ae0303ff"]}
            >
              KỸ THUẬT & CÔNG NGHỆ
            </AuroraText>
          </h2>
          <p className="text-lg text-gray-600 text-start mx-auto">
            Thúc đẩy tri thức và đổi mới sáng tạo vì một tương lai bền vững
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className=" rounded-xl p-6 transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}
                >
                  {/* posfix */}
                  {stat.number && (
                    <NumberTicker
                      value={stat.number}
                      className={`inline-block  ${stat.color}`}
                    />
                  )}
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
