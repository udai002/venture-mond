"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BuildIcon from "@mui/icons-material/Build";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import TimelineIcon from "@mui/icons-material/Timeline";

const insights = [
  {
    icon: <BuildIcon className="text-[#0BA57F] text-4xl" />,
    title: "How We Validate Products Before Writing a Single Line of Code",
    desc: "Learn how our validation framework saves time, ensures market fit, and reduces costly build mistakes.",
  },
  {
    icon: <IntegrationInstructionsIcon className="text-[#0BA57F] text-4xl" />,
    title: "Why We Chose Next.js and Node.js for Venturemond’s Core Stack",
    desc: "A deep dive into why modern teams need full-stack JavaScript frameworks for speed, performance, and maintainability.",
  },
  {
    icon: <TimelineIcon className="text-[#0BA57F] text-4xl" />,
    title: "Turning Feedback into Product Roadmaps: Our 4-Step Approach",
    desc: "How continuous feedback loops and structured planning shape our product development process.",
  },
];

const BehindTheBuilds = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto space-y-16"
      >
       
        <div className="text-center space-y-4">
          <h2 className="heading font-extrabold">
            Product <span className="text-[#0BA57F]">Insights.</span>
          </h2>
          <p className="text-gray-300 para max-w-2xl mx-auto">
            Inside stories from our build process — tech choices, product design,
            and what we learned along the way.
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {insights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111111] border border-[#0BA57F]/20 p-6 rounded-2xl hover:border-[#0BA57F]/40 hover:shadow-[0_0_20px_#0BA57F22] transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        
        <div className="text-center mt-10">
          <Link
            href="#"
            className="text-[#0BA57F] hover:text-[#09c08f] font-medium tracking-wide transition"
          >
            [Explore Insights →]
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default BehindTheBuilds;
