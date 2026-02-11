// src/components/common/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full backdrop-blur-xl bg-white/30 border-b border-white/20 px-6 py-5 flex items-center justify-between fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5d60ef] to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
          CG
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-[#5d60ef] to-purple-700 bg-clip-text text-transparent">
          CogniGen
        </span>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-5">
        <Link
          to="/login"
          className="text-gray-700 hover:text-[#5d60ef] font-medium transition"
        >
          Login
        </Link>

        <button
          onClick={() => navigate("/signup")}
          className="bg-[#5d60ef] hover:bg-[#4a4df2] text-white px-6 py-2.5 rounded-2xl font-semibold shadow-lg shadow-[#5d60ef]/30 transition"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
