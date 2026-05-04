"use client";

import { motion } from "framer-motion";

export default function AuthorCard() {
  return (
    <div className="mt-12 pt-6 border-t text-sm text-gray-600">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <strong>Author:</strong>{" "}
        <motion.span
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block cursor-pointer text-gray-900"
        >
          Anamika Ahirwar
        </motion.span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-2"
      >
        <motion.a
          href="https://www.linkedin.com/in/anamika-ahirwar-47a406379/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          className="text-blue-600 hover:underline inline-block"
        >
          View LinkedIn Profile →
        </motion.a>
      </motion.p>
    </div>
  );
}