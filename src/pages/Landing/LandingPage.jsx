// src/pages/Landing/LandingPage.jsx
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackgroundSplashes from "../../components/common/BackgroundSplashes";
import Navbar from "../../components/common/Navbar";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaBrain,
  FaChartLine,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import metaLogo from "../../assets/meta.png";
import googleLogo from "../../assets/google.png";
import amazonLogo from "../../assets/amazon.png";
import netflixLogo from "../../assets/netflix.png";
import airbnbLogo from "../../assets/airbnb.png";

function LandingPage() {
  const navigate = useNavigate();

  const trustedCompaniesDark = [
    { name: "Meta", icon: metaLogo },
    { name: "Amazon", icon: amazonLogo },
    { name: "Netflix", icon: netflixLogo },
    { name: "Google", icon: googleLogo },
    { name: "Airbnb", icon: airbnbLogo },
  ];

  const features = [
    {
      icon: <FaBrain className="text-5xl text-[#5d60ef]" />,
      title: "AI-Personalized Paths",
      desc: "Adaptive roadmaps that evolve with your progress and goals.",
    },
    {
      icon: <FaChartLine className="text-5xl text-purple-600" />,
      title: "Smart Assessments",
      desc: "Questions adjust difficulty in real-time based on your answers.",
    },
    {
      icon: <FaRocket className="text-5xl text-pink-500" />,
      title: "Realistic AI Interviews",
      desc: "Hyper-real mock sessions with detailed instant feedback.",
    },
    {
      icon: <FaUsers className="text-5xl text-indigo-600" />,
      title: "Visual Progress Insights",
      desc: "Beautiful dashboards showing strengths, gaps & trends.",
    },
  ];

  const orbitItems = [
    { icon: "🗺️", label: "Skill Map", color: "bg-teal-500/80" },
    { icon: "📅", label: "Timeline", color: "bg-yellow-500/80" },
    { icon: "📊", label: "Analytics", color: "bg-orange-500/80" },
    { icon: "🎯", label: "Goals", color: "bg-pink-500/80" },
  ];

  const testimonials = [
    {
      quote:
        "CogniGen has completely transformed how I prepare for system design interviews. The AI feedback is incredibly detailed and realistic.",
      name: "Aarav Sharma",
      role: "Software Engineer",
      company: "Google",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    },
    {
      quote:
        "The adaptive learning paths helped me go from beginner to confident in just 4 months. Best investment in my career so far.",
      name: "Priya Menon",
      role: "Full-Stack Developer",
      company: "Amazon",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
    },
    {
      quote:
        "The mock interviews feel exactly like the real thing. I passed my Meta interview on the first try thanks to CogniGen.",
      name: "Rahul Kapoor",
      role: "Senior Engineer",
      company: "Meta",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <BackgroundSplashes />
      <Navbar />

      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50/80 via-purple-50/70 to-pink-50/50">
        {/* ─── HERO ──────────────────────────────────────────────── */}
        <section className="relative pb-20 md:pb-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5d60ef]/10 to-purple-500/5 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-full md:w-5/12 bg-white/30 backdrop-blur-sm clip-slant" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            {/* Hero Content */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-16 md:pt-28 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="md:w-1/2 text-center md:text-left"
              >
                <span className="inline-block bg-white/40 backdrop-blur-sm px-6 py-2 rounded-full text-base font-semibold text-[#5d60ef] mb-8 border border-white/40 shadow-sm">
                  🚀 Welcome to AI-Powered Learning
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
                  Master Tech Skills
                  <br />
                  <span className="bg-gradient-to-r from-[#5d60ef] via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Faster & Smarter
                  </span>
                </h1>
                <p className="mt-8 text-xl text-gray-700 max-w-xl mx-auto md:mx-0">
                  Personalized AI paths, adaptive quizzes, realistic mock
                  interviews — built for developers and career switchers.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(93,96,239,0.35)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate("/signup")}
                    className="bg-[#5d60ef] hover:bg-[#4a4df2] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition"
                  >
                    Start Free →
                  </motion.button>
                  <button className="border-2 border-[#5d60ef] text-[#5d60ef] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#5d60ef]/10 transition">
                    Watch Demo
                  </button>
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="md:w-1/2 relative h-96 md:h-[500px] flex items-center justify-center"
              >
                <motion.div
                  animate={{ y: [0, -18, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 right-4 md:right-12 backdrop-blur-lg bg-white/50 border border-white/40 rounded-2xl shadow-2xl p-6 w-72 md:w-80"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-800">
                      Ananya S.
                    </span>
                    <span className="text-xs bg-green-600/90 text-white px-3 py-1 rounded-full">
                      Completed
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    System Design — Grokking the Patterns
                  </p>
                  <div className="text-yellow-400 mt-2">★★★★★</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 18, 0] }}
                  transition={{
                    duration: 7.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2,
                  }}
                  className="absolute bottom-12 left-4 md:left-12 backdrop-blur-lg bg-white/50 border border-white/40 rounded-2xl shadow-2xl p-6 w-72 md:w-80"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-800">
                      Vikram R.
                    </span>
                    <span className="text-xs bg-blue-600/90 text-white px-3 py-1 rounded-full">
                      In Progress
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Behavioral Mock Interview — Senior Role
                  </p>
                  <div className="text-yellow-400 mt-2">★★★★☆</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── DARK STYLE MARQUEE (your requested look) ──────────── */}
        <section className="py-12 bg-gradient-to-r from-indigo-950 via-purple-950 to-indigo-950 text-white border-y border-white/10">
          <h3 className="text-center text-xl md:text-2xl font-semibold mb-6">
            Trusted by engineers from world-class companies
          </h3>
          <div className="overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...trustedCompaniesDark, ...trustedCompaniesDark].map(
                (comp, i) => (
                  <div
                    key={i}
                    className="mx-8 md:mx-12 flex items-center gap-3 text-lg font-medium"
                  >
                    <img
                      src={comp.icon}
                      alt={comp.name}
                      className="w-8 h-8 object-contain object-center"
                    />

                    <span className="capitalize">{comp.name}</span>
                  </div>
                ),
              )}
            </motion.div>
          </div>
        </section>

        {/* ─── FEATURES ──────────────────────────────────────────── */}
        <section
          id="features"
          className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why{" "}
            <span className="bg-gradient-to-r from-[#5d60ef] to-purple-600 bg-clip-text text-transparent">
              CogniGen
            </span>{" "}
            Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="backdrop-blur-lg bg-white/60 border border-white/40 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-6">{f.icon}</div>

                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {f.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── ORBIT SECTION ─────────────────────────────────────── */}
        {/* ORBIT SECTION */}
        <section className="py-20 px-6 md:px-12 bg-white/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-2/5 text-center md:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Intelligent Views That{" "}
                <span className="text-[#5d60ef]">Evolve</span> With You
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Track progress with dynamic skill maps, timelines, analytics,
                and goal trackers — all powered by AI insights.
              </p>
            </motion.div>

            {/* Orbit container */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 border-2 border-dashed border-[#5d60ef]/30 rounded-full animate-spin-slow" />

              {/* Inner ring */}
              <div className="absolute inset-[15%] border-2 border-dashed border-purple-400/40 rounded-full animate-spin-slow-reverse" />

              {/* Orbiting items */}
              {orbitItems.map((item, i) => {
                const angle = i * (360 / orbitItems.length);

                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2"
                    style={{ transform: "translate(-50%, -50%)" }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div
                      style={{
                        transform: `
                  rotate(${angle}deg)
                  translate(var(--orbit-radius))
                  rotate(-${angle}deg)
                  translateY(-44px)
              
                `,
                      }}
                      className="flex flex-col items-center"
                    >
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${item.color}
                flex items-center justify-center text-3xl shadow-lg border border-white/40 backdrop-blur-md`}
                      >
                        {item.icon}
                      </div>

                      <span className="mt-2 text-xs sm:text-sm font-medium text-gray-800 whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Responsive orbit radiuses */}
          <style jsx>{`
            :root {
              --orbit-radius: 135px; /* for w-80 (320px container) */
            }

            @media (min-width: 640px) {
              :root {
                --orbit-radius: 170px; /* for sm:w-96 (384px) */
              }
            }

            @media (min-width: 768px) {
              :root {
                --orbit-radius: 210px; /* for md:w-[480px] */
              }
            }
          `}</style>
        </section>

        {/* ─── TESTIMONIALS CAROUSEL ─────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-indigo-50/30 to-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Join <span className="text-[#5d60ef]">2.9 million+</span> learners
              leveling up
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              See why developers at top companies trust CogniGen
            </p>

            {/* CAROUSEL WRAPPER */}
            <div className="overflow-hidden relative">
              <motion.div
                className="flex gap-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div
                    key={i}
                    className="min-w-[320px] md:min-w-[380px] bg-white/80 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-xl"
                  >
                    <p className="text-gray-800 leading-relaxed mb-6 text-lg">
                      "{t.quote}"
                    </p>

                    <div className="flex items-center gap-4">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-indigo-200/40"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {t.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {t.role} @ {t.company}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Move footer spacing */}
            <div className="mt-32"></div>
          </div>
        </section>

        {/* ─── FINAL CTA ─────────────────────────────────────────── */}
        <section className="py-32 relative overflow-hidden">
          {/* Soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#5d60ef]/10 via-purple-300/10 to-pink-300/10 blur-3xl opacity-60" />

          <div className="relative max-w-4xl mx-auto text-center px-6">
            {/* Glow ring behind card */}
            <div className="absolute inset-0 flex justify-center -z-10">
              <div className="w-[450px] h-[450px] bg-gradient-to-br from-[#5d60ef]/30 to-purple-500/30 rounded-full blur-[120px]" />
            </div>

            {/* Glass Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-2xl rounded-3xl p-16"
            >
              <h2 className="text-5xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Ready to{" "}
                <span className="bg-gradient-to-r from-[#5d60ef] to-purple-600 bg-clip-text text-transparent">
                  Accelerate
                </span>{" "}
                Your Career?
              </h2>

              <p className="text-xl text-gray-700 mt-6 mb-12 max-w-2xl mx-auto">
                Start your journey today — personalized AI learning,
                career-aligned roadmaps, and interview simulations. No credit
                card needed.
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 35px rgba(93,96,239,0.6)",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/signup")}
                className="relative bg-[#5d60ef] hover:bg-[#4a4df2] text-white px-10 py-4 rounded-2xl
                   text-2xl font-semibold shadow-xl transition-all duration-300"
              >
                {/* Button Shine */}
                <span className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-20 transition bg-gradient-to-r from-white to-transparent" />
                Get Started Free →
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* ─── FOOTER ────────────────────────────────────────────── */}
        <footer className="backdrop-blur-xl bg-white/30 border-t border-white/20 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left text-gray-700">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5d60ef] to-purple-600 text-white font-bold flex items-center justify-center shadow-lg">
                    CG
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    CogniGen
                  </span>
                </div>
                <p>All Rights Reserved © CogniGen.com</p>
                <p>Chennai, Tamil Nadu, India</p>
              </div>

              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#5d60ef] transition"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#5d60ef] transition"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#5d60ef] transition"
                >
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#5d60ef] transition"
                >
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 50s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow 65s linear infinite reverse;
        }
        .clip-slant {
          clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </>
  );
}

export default LandingPage;
