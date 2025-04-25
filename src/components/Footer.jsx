import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="shrink-0 mt-auto bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-extrabold tracking-tight mb-4 text-blue-600 dark:text-blue-400">
            <Link to="/" className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
              e-Renaissance
            </Link>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Empowering learners worldwide with high-quality, accessible, and affordable education. Join us and build your future today.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
            Developed by:{" "}
            <a
              href="https://www.linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aaditya B Chatterjee
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            Resources
          </h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <li>
              <a
                href="https://dearabc.vercel.app/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Blog
              </a>
            </li>
            <li>
              <Link
                to="/careers"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/become-instructor"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Become an Instructor
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            Connect With Us
          </h3>
          <div className="text-sm text-gray-600 dark:text-gray-300 space-y-3">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              contact@e-renaissance.com
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              +91 99999 99999
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Hyderabad, India
            </p>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a
              href="https://linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com/your-fb-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/your-twitter-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm py-4 text-center text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} e-Renaissance. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;