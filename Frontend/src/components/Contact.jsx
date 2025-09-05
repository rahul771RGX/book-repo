

import axios from "axios";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
  await axios.post("http://localhost:4001/contact", form);
      setSuccess("Thank you for contacting us! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <section className="min-h-[70vh] w-full flex items-center justify-center py-16 px-2">
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center">
          <div className="bg-blue-100 dark:bg-slate-700 p-4 rounded-full mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 01-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0m8 0v4a4 4 0 01-8 0v-4" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-1">Contact Us</h1>
          <p className="text-gray-500 dark:text-gray-300 text-center text-base max-w-xs">We'd love to hear from you! Fill out the form below and our team will get back to you soon.</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-gray-300 dark:border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-900 dark:text-white text-base"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-gray-300 dark:border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-900 dark:text-white text-base"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 dark:border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-900 dark:text-white text-base"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors disabled:opacity-60 mt-2"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && <div className="text-green-600 text-center font-medium mt-2">{success}</div>}
          {error && <div className="text-red-600 text-center font-medium mt-2">{error}</div>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
