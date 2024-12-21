import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/9809435364?text=Hello, my name is ${encodeURIComponent(
      name
    )}. My email is ${encodeURIComponent(
      email
    )}. Here is my message: ${encodeURIComponent(message)}`;

    // Show success message
    setIsSubmitted(true);

    // Redirect to WhatsApp after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 py-12 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/90">
            We'd love to hear from you! Fill out the form below or reach out via WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/20 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-orange-300 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-white/90">kunaalbhatt2001@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-orange-300 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-white/90">9809435364</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-orange-300 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-white/90">Kanchanpur, Nepal</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/20 p-6 rounded-lg shadow-md"
          >
            {isSubmitted ? (
              <div className="text-center text-green-500 font-bold text-lg">
                Message sent successfully! Redirecting to WhatsApp...
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent text-white"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-400 text-white py-3 px-6 rounded-lg hover:bg-orange-500 transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
