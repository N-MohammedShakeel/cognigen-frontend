// src/components/auth/RobotAvatar.jsx
import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RobotAvatar({
  isEmailFocused,
  isPasswordFocused,
  mousePosition,
}) {
  const eyeMovement = useMemo(() => {
    const limit = 5;
    const x = (mousePosition.x / window.innerWidth - 0.5) * limit * 2;
    const y = (mousePosition.y / window.innerHeight - 0.5) * limit * 2;
    return { x, y };
  }, [mousePosition]);

  return (
    <div className="relative w-full max-w-md h-[520px] flex flex-col items-center justify-center">
      {/* Speech bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isPasswordFocused ? "pwd" : isEmailFocused ? "email" : "idle"}
          initial={{ opacity: 0, scale: 0.8, y: 10, x: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          className="absolute top-8 right-[-8%] backdrop-blur-md bg-white/40 px-6 py-3 rounded-2xl shadow-lg border border-white/30 text-[#5d60ef] font-semibold text-sm z-20 pointer-events-none"
        >
          {isPasswordFocused
            ? "Don't worry, I'm looking away! 🙈"
            : isEmailFocused
              ? "Scanning for your account... 🔍"
              : "Welcome to Cognigen! Ready? 🚀"}
          <div className="absolute bottom-[-6px] left-6 w-3 h-3 bg-white/40 rotate-45 border-b border-l border-white/30" />
        </motion.div>
      </AnimatePresence>

      {/* Robot SVG */}
      <svg viewBox="0 0 200 250" className="w-full h-full drop-shadow-2xl">
        <defs>
          <linearGradient id="robotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#f0f1ff" stopOpacity="1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.ellipse
          animate={{ rx: [35, 45, 35], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          cx="100"
          cy="235"
          rx="40"
          ry="8"
          fill="#5d60ef"
        />

        <motion.g
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Body */}
          <rect
            x="60"
            y="110"
            width="80"
            height="90"
            rx="20"
            fill="url(#robotGrad)"
            stroke="#5d60ef"
            strokeWidth="1.5"
          />

          {/* Arms */}
          <motion.g animate={isPasswordFocused ? { y: -8 } : { y: 0 }}>
            <motion.rect
              x="38"
              y="125"
              width="18"
              height="55"
              rx="9"
              fill="#5d60ef"
              animate={
                isPasswordFocused
                  ? { rotate: -30 }
                  : isEmailFocused
                    ? { rotate: -8 }
                    : { rotate: 0 }
              }
              style={{ originX: "47px", originY: "135px" }}
            />
            <motion.rect
              x="144"
              y="125"
              width="18"
              height="55"
              rx="9"
              fill="#5d60ef"
              animate={
                isPasswordFocused
                  ? { rotate: 30 }
                  : isEmailFocused
                    ? { rotate: 8 }
                    : { rotate: 0 }
              }
              style={{ originX: "153px", originY: "135px" }}
            />
          </motion.g>

          {/* Head */}
          <motion.g
            animate={{
              rotate: isEmailFocused ? -3 : isPasswordFocused ? 7 : 0,
              y: isPasswordFocused ? 4 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <rect
              x="55"
              y="40"
              width="90"
              height="75"
              rx="28"
              fill="url(#robotGrad)"
              stroke="#5d60ef"
              strokeWidth="2"
            />

            <rect x="62" y="52" width="76" height="42" rx="16" fill="#141821" />

            <AnimatePresence mode="wait">
              {!isPasswordFocused ? (
                <motion.g key="open">
                  <g
                    transform={`translate(${eyeMovement.x}, ${eyeMovement.y})`}
                  >
                    <motion.circle
                      animate={isEmailFocused ? { r: [6, 8, 6] } : {}}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      cx="84"
                      cy="73"
                      r="7"
                      fill="#5d60ef"
                    />
                    <circle cx="86" cy="71" r="2.5" fill="#fff" />
                  </g>
                  <g
                    transform={`translate(${eyeMovement.x}, ${eyeMovement.y})`}
                  >
                    <motion.circle
                      animate={isEmailFocused ? { r: [6, 8, 6] } : {}}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      cx="116"
                      cy="73"
                      r="7"
                      fill="#5d60ef"
                    />
                    <circle cx="118" cy="71" r="2.5" fill="#fff" />
                  </g>
                </motion.g>
              ) : (
                <motion.g key="closed">
                  <path
                    d="M76 78 Q 84 86 92 78"
                    fill="none"
                    stroke="#5d60ef"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M108 78 Q 116 86 124 78"
                    fill="none"
                    stroke="#5d60ef"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </motion.g>
              )}
            </AnimatePresence>

            <line
              x1="100"
              y1="40"
              x2="100"
              y2="20"
              stroke="#5d60ef"
              strokeWidth="2.5"
            />
            <motion.circle
              animate={{ r: [4, 6, 4] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              cx="100"
              cy="18"
              r="5"
              fill="#5d60ef"
            />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
}
