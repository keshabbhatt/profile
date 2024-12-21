import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TypeWriter from "../components/TypeWriter";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 pt-16 py-12 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm{" "}
              <TypeWriter text="Kunaal Bhatt" className="text-orange-300" />
            </h1>
            <p className="text-xl text-white mb-8">
              A passionate developer crafting beautiful and functional web
              experiences
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
            <div className="flex gap-6 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-300 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-300 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:contact@kunaalbhatt.com"
                className="text-white hover:text-orange-300 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mt-12 md:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Kunaal Bhatt"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
