import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { GraduationCap, Target, Mail } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover who we are, what drives us, and our passion to reshape education for everyone.
          </p>
        </div>

        {/* Logo & Description */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Logo Card */}
          <div className="flex justify-center items-center bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-10">
            <img
              src={logo}
              alt="e-Renaissance Logo"
              className="w-60 h-60 object-contain transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Mission & Vision */}
          <div className="flex-1 space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                We are committed to delivering high-quality, engaging, and accessible educational content that
                enables learners worldwide to upskill and reach their potential.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                To become a global leader in digital education by empowering millions with knowledge,
                creativity, and skills that spark real-world change.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-md font-semibold tracking-wide transform hover:scale-105 transition-all duration-300"
          >
            <Mail className="h-5 w-5" />
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;