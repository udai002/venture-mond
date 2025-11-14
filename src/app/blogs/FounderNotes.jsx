"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const notes = [
  {
    title: "The Execution Gap: Why Most Startups Fail After the Idea Stage",
    desc: "Ideas are abundant. Execution is rare. Here’s why most founders stall — and how structured build models change that.",
  },
  {
    title: "Designing Systems That Scale — Lessons from Venturemond Builds",
    desc: "How to approach scalability from day one: balancing speed, tech debt, and architecture clarity.",
  },
  {
    title: "Why Speed Without Structure Kills Innovation",
    desc: "Startups love speed — but without frameworks, momentum turns into chaos. Here's how we balance both.",
  },
  {
    title: "The Future of Collaboration: Building Venturemond Workspace",
    desc: "Inside our mission to redefine collaboration — privacy-first, AI-ready, and frictionless for modern teams.",
  },
];

const FounderNotes = () => {
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
            Thoughts from the <span className="text-[#0BA57F]">Desk.</span>
          </h2>
          <p className="text-gray-300 para max-w-2xl mx-auto">
            Perspectives on building, scaling, and leading in a fast-changing world.
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {notes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111111] border border-[#0BA57F]/20 p-6 rounded-2xl hover:border-[#0BA57F]/40 hover:shadow-[0_0_20px_#0BA57F22] transition-all duration-300"
            >
              
              <h3 className="text-lg font-semibold text-white mb-3">{note.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{note.desc}</p>
            </motion.div>
          ))}
        </div>

        
        <div className="text-center mt-10">
          <Link
            href="#"
            className="text-[#0BA57F] hover:text-[#09c08f] font-medium tracking-wide transition"
          >
            [Read All Articles →]
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default FounderNotes;
