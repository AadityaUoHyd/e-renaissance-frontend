import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  MailOpen,
  Phone,
  MapPin,
} from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          We’d love to hear from you!
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">Reach out to us for any inquiries, support, or feedback. Feel free to contact us via email, phone, or the form below!</p>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="3c4b90a4-9256-452e-8223-3c3a6636f062"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-semibold text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="mt-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-semibold text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="mt-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-semibold text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="mt-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-md font-semibold tracking-wide transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl lg:text-left">
          <div className="w-full  text-left ">
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <MailOpen className="h-6 w-6 text-blue-600 dark:text-blue-400 transform hover:scale-110 transition-transform duration-200" />
                <div className="font-semibold text-gray-900 dark:text-white">Email: </div>
                <div>support@e-renaissance.com</div>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 transform hover:scale-110 transition-transform duration-200" />

                  <div className="font-semibold text-gray-900 dark:text-white">Mobile: </div>
                  <div>+91 99999 99999</div>
                </div>

              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 transform hover:scale-110 transition-transform duration-200" />

                  <div className="font-semibold text-gray-900 dark:text-white">Address:</div>
                  <div>SR Nagar, Hyderabad, India - 500038</div>

              </div>
            </div>

            {/* Google Map Embed */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.184868931506!2d78.43467201483122!3d17.444431388080688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c6a2e67223cf%3A0x3b3b82f0bfe9519d!2sSR%20Nagar%2C%20Hyderabad%2C%20Telangana%20500038%2C%20India!5e0!3m2!1sen!2sus!4v1679894107387!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;