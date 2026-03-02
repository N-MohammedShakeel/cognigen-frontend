import React, { useState } from "react";
import axios from "axios";

const API_BASE = "http://127.0.0.1:5000";

function Test() {
  const [subject, setSubject] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const [question, setQuestion] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  // --------------------
  // Start Session
  // --------------------
  const startSession = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${API_BASE}/start`, {
        subject,
        num_questions: 5,
      });

      setSessionId(res.data.session_id);
      setQuestion(res.data.question);
      setDifficulty(res.data.difficulty);
    } catch (err) {
      alert("Error starting session");
    } finally {
      setLoading(false);
    }
  };

  // --------------------
  // Submit Answer
  // --------------------
  const submitAnswer = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${API_BASE}/answer`, {
        session_id: sessionId,
        answer,
      });

      if (res.data.message === "Session Complete") {
        setCompleted(true);
        setFeedback(res.data);
      } else {
        setQuestion(res.data.next_question);
        setDifficulty(res.data.difficulty);
      }

      setAnswer("");
    } catch (err) {
      alert("Error submitting answer");
    } finally {
      setLoading(false);
    }
  };

  // --------------------
  // SUBJECT SCREEN
  // --------------------
  if (!sessionId) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="bg-white p-10 rounded-xl shadow-lg w-96 text-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-6">AI Tutor</h1>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-blue-200 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Subject</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="web">Web Development</option>
          </select>

          <button
            onClick={startSession}
            disabled={!subject || loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading ? "Starting..." : "Start Session"}
          </button>
        </div>
      </div>
    );
  }

  // --------------------
  // FINAL FEEDBACK SCREEN
  // --------------------
  if (completed) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-xl shadow-lg max-w-2xl w-full">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Session Complete 🎉
          </h2>

          <div className="mb-4 text-gray-700">
            <p>
              <strong>Correct:</strong> {feedback.correct_answers}
            </p>
            <p>
              <strong>Wrong:</strong> {feedback.wrong_answers}
            </p>
            <p>
              <strong>Accuracy:</strong> {feedback.accuracy}%
            </p>
          </div>

          <div className="border-t pt-4 text-gray-800 leading-relaxed">
            {feedback.feedback}
          </div>
        </div>
      </div>
    );
  }

  // --------------------
  // QUESTION SCREEN
  // --------------------
  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="w-1/2 bg-white p-12 border-r border-blue-100">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Question</h2>

        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-4">
          {difficulty?.toUpperCase()}
        </span>

        <p className="text-gray-800 text-lg leading-relaxed">{question}</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 bg-blue-50 p-12 flex flex-col">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Your Answer</h2>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here..."
          className="flex-1 p-4 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        <button
          onClick={submitAnswer}
          disabled={!answer || loading}
          className="mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? "Submitting..." : "Submit Answer"}
        </button>
      </div>
    </div>
  );
}

export default Test;
