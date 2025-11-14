"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const stories = [
  {
    icon: <LocalShippingIcon className="text-[#0BA57F] text-4xl" />,
    title:
      "How a Logistics Startup Scaled to 10K Deliveries a Month with Our MVP Framework",
    desc: "A fast-moving logistics company used Venturemond’s structured build sprint to scale delivery operations efficiently.",
  },
  {
    icon: <SchoolIcon className="text-[#0BA57F] text-4xl" />,
    title: "Building an EdTech Platform in 60 Days — A Studio Sprint Story",
    desc: "Our rapid MVP execution model helped an education startup launch its full learning platform within just 2 months.",
  },
  {
    icon: <AccountBalanceIcon className="text-[#0BA57F] text-4xl" />,
    title: "What We Learned Building for the Government Sector",
    desc: "How Venturemond handled scale, compliance, and collaboration challenges in a large-scale government tech initiative.",
  },
];

const VentureStories = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto space-y-16"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="heading font-extrabold">
            Real Builds. <span className="text-[#0BA57F]">Real Results.</span>
          </h2>
          <p className="text-gray-300 para max-w-2xl mx-auto">
            Startups, founders, and companies we’ve helped turn ideas into
            growth stories.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111111] border border-[#0BA57F]/20 p-6 rounded-2xl hover:border-[#0BA57F]/40 hover:shadow-[0_0_25px_#0BA57F22] transition-all duration-300"
            >
              <div className="mb-4">{story.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {story.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {story.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="#"
            className="text-[#0BA57F] hover:text-[#09c08f] font-medium tracking-wide transition"
          >
            [View Stories →]
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default VentureStories;
