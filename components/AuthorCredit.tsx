"use client";

import { motion } from "framer-motion";

export default function AuthorCredit() {
  return (
    <div className="mt-12 pt-6 border-t text-sm text-gray-600">

      <p>
        <strong>Author:</strong>{" "}
        <motion.span
          className="inline-block text-gray-900 font-medium"
          animate={{
            y: [0, -3, 0],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Anamika Ahirwar
        </motion.span>
      </p>

      <p className="mt-2">
        <motion.a
          href="https://www.linkedin.com/in/anamika-ahirwar-47a406379/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-blue-600 hover:underline inline-block"
        >
          View LinkedIn Profile →
        </motion.a>
      </p>

    </div>
  );
}