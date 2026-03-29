import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export default function MockInterviewFeedback() {
  const [feedback, setFeedback] = useState("");

  const API = "http://127.0.0.1:5000";

  useEffect(() => {
    const fetchFeedback = async () => {
      const res = await fetch(`${API}/final-feedback`);
      const data = await res.json();

      setFeedback(data.final_feedback);
    };

    fetchFeedback();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 flex items-center justify-center p-6 text-white">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center"
        >
          <div className="bg-white/10 p-10 rounded-full">
            <Bot size={120} />
          </div>

          <h2 className="mt-6 text-2xl font-bold">AI Interview Feedback</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/10 p-10 rounded-3xl"
        >
          <h3 className="text-xl mb-4 text-cyan-300">AI Analysis</h3>

          <div className="bg-white/5 p-6 rounded-2xl whitespace-pre-line">
            {feedback || "Generating feedback..."}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
