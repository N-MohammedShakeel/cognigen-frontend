// src/pages/Home/Home.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import BackgroundSplashes from "../../components/common/BackgroundSplashes";
import Sidebar from "../../components/common/Sidebar";
import Dashboard from "./Dashboard";

function Home() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <Dashboard />;
      case "Leaderboard":
        return (
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5d60ef] to-purple-600">
              Leaderboard
            </h1>
            <p className="mt-4 text-gray-600">Coming soon...</p>
          </div>
        );
      case "Settings":
        return (
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5d60ef] to-purple-600">
              Settings
            </h1>
            <p className="mt-4 text-gray-600">
              Profile, notifications, preferences...
            </p>
          </div>
        );
      case "Log Out":
        return (
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-red-600">Logging out...</h1>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <BackgroundSplashes />

      <div className="min-h-screen flex bg-gradient-to-br from-indigo-50/70 via-purple-50/50 to-pink-50/40 overflow-hidden">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        <motion.main
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 overflow-y-auto p-6 md:p-8"
        >
          <div className="max-w-7xl mx-auto">{renderContent()}</div>
        </motion.main>
      </div>
    </>
  );
}

export default Home;
