"use client";

import { motion } from "framer-motion";

const AboutTeam = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading font-bold mb-6">
            Founder-led. Execution-focused. <span className="text-[#0BA57F]">Driven by Impact.</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            At Venturemond, we believe execution beats ideas. Our teams thrive on innovation, 
            collaboration, and ownership — building real-world solutions that matter.
          </p>
          <p className="text-gray-400 leading-relaxed">
            If you love startups, cutting-edge tech, and hands-on product building, 
            you’ll feel right at home with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-full h-64 bg-[#0BA57F]/10 border border-[#0BA57F]/20 rounded-2xl flex items-center justify-center text-[#0BA57F] text-xl font-semibold shadow-[0_0_20px_#0BA57F33]">
            💡 Innovative. 
            <br />
            🤝 Collaborative.
            <br />
             🚀 Fast-paced.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;
