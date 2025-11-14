"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const cases = [
  {
    name: "Smart Agri Management Platform",
    description:
      "Digitizing agricultural operations with real-time analytics for farmers and distributors.",
    division: "Studio",
  },
  {
    name: "Learning Management System for Universities",
    description:
      "Full-stack LMS for seamless online learning and administration.",
    division: "Studio",
  },
  {
    name: "Department of IT — Government Project",
    description:
      "Collaborative initiative to digitize internal workflows securely.",
    division: "Studio",
  },
  {
    name: "Venturemond Workspace",
    description:
      "Our flagship product redefining team collaboration and private cloud infrastructure.",
    division: "SaaS",
  },
];

const CaseStories = () => {
  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto space-y-12"
      >
      
        <div className="text-center space-y-4">
          <h2 className="heading font-extrabold">
            Ventures <span className="text-[#0BA57F]">We’ve Built.</span>
          </h2>
          <p className="text-gray-300 para max-w-2xl mx-auto">
            A glimpse into some of the projects and ideas we’ve executed through{" "}
            <span className="text-[#0BA57F]">Venturemond Studio</span> and{" "}
            <span className="text-[#0BA57F]">SaaS</span>.
          </p>
        </div>

     
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="overflow-x-auto mt-10"
        >
          <table className="w-full border-collapse rounded-2xl overflow-hidden">
            <thead className="bg-[#111111] text-[#0BA57F] text-left para uppercase tracking-wide border-b border-[#0BA57F]/20">
              <tr>
                <th className="px-6 py-4 font-semibold">Case</th>
                <th className="px-6 py-4 font-semibold">Description</th>
                <th className="px-6 py-4 font-semibold">Division</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800 bg-[#0F0F0F]">
              {cases.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-[#0BA57F]/5 para transition"
                >
                  <td className="px-6 py-4 font-semibold text-white whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-gray-300 leading-relaxed">
                    {item.description}
                  </td>
                  <td className="px-6 py-4 text-gray-400 whitespace-nowrap">
                    {item.division}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          
          <div className="text-right mt-6">
            <Link
              href="#"
              className="text-[#0BA57F] hover:text-[#09c08f] font-medium"
            >
              [View More →]
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CaseStories;
