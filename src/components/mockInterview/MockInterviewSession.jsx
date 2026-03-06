import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mic, MicOff } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function MockInterviewSession() {
  const location = useLocation();
  const navigate = useNavigate();

  const language = location.state?.language || "java";

  const [question, setQuestion] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(true);

  const videoRef = useRef(null);
  const recognitionRef = useRef(null);
  const streamRef = useRef(null);

  const API = "http://127.0.0.1:5000";

  // 🎤 Speech Recognition
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let text = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      setTranscript(text);
    };

    recognitionRef.current = recognition;
  }, []);

  // 📷 Start Camera
  useEffect(() => {
    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
    };
    startCamera();

    return () => {
      if (streamRef.current)
        streamRef.current.getTracks().forEach((track) => track.stop());
    };
  }, []);

  // 🚀 Start interview
  useEffect(() => {
    const startInterview = async () => {
      await fetch(`${API}/start`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ language }),
      });

      getQuestion();
    };

    startInterview();
  }, []);

  // ❓ Get question
  const getQuestion = async () => {
    setLoading(true);

    const res = await fetch(`${API}/generate-question`);
    const data = await res.json();

    if (data.message === "Interview completed") {
      navigate("/mock-interview/session/feedback");
      return;
    }

    setQuestion(data.question);
    setQuestionNumber(data.question_number);
    setTranscript("");
    setLoading(false);
  };

  // 🎤 Toggle mic
  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }

    setIsListening(!isListening);
  };

  // ➡️ Next Question
  const nextQuestion = async () => {
    await fetch(`${API}/ask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
        answer: transcript,
      }),
    });

    getQuestion();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <motion.div
          key={questionNumber}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl"
        >
          <h2 className="text-cyan-300 text-sm mb-3">
            Question {questionNumber}
          </h2>

          <h1 className="text-2xl font-bold mb-6">
            {loading ? "Generating question..." : question}
          </h1>

          <div className="bg-slate-900/60 rounded-2xl p-5 min-h-[140px]">
            <p>{transcript || "Start speaking..."}</p>
          </div>

          {/* Mic */}
          <div className="flex flex-col items-center gap-6 mt-8">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleListening}
              className={`p-6 rounded-full ${
                isListening ? "bg-red-500" : "bg-blue-600"
              }`}
            >
              {isListening ? <MicOff /> : <Mic />}
            </motion.button>

            <button
              onClick={nextQuestion}
              className="px-8 py-3 bg-purple-600 rounded-2xl"
            >
              Next Question
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE CAMERA */}
        <div>
          <video
            ref={videoRef}
            autoPlay
            className="w-full h-[420px] object-cover rounded-3xl"
          />

          <p className="text-center mt-4 text-cyan-300">
            Live Interview Camera
          </p>
        </div>
      </div>
    </div>
  );
}
