// src/components/BackgroundSplashes.jsx
import { motion } from "framer-motion";

export default function BackgroundSplashes() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Light Blue Splash */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] rounded-full bg-blue-100 blur-[100px] opacity-40"
      />

      {/* Pink Splash */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-5%] w-[35rem] h-[35rem] rounded-full bg-pink-100 blur-[100px] opacity-40"
      />

      {/* Orange Splash */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-orange-50 blur-[120px] opacity-30"
      />

      {/* Center subtle indigo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-indigo-50/20 blur-[150px] opacity-50" />
    </div>
  );
}
