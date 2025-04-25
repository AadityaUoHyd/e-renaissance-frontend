import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "What is e-Renaissance?",
      answer:
        "e-Renaissance is an online learning platform that offers a wide variety of courses designed to empower individuals to learn new skills and advance in their careers.",
    },
    {
      question: "How do I enroll in a course?",
      answer:
        "Either you can search courses according to your need at the search bar in the navbar, or browse our courses on the homepage and click on 'Explore Our Courses'. Choose a course and click 'Enroll Now' to start after payment.",
    },
    {
      question: "Do I need any special software to access the courses?",
      answer:
        "No, just a modern web browser and internet connection. Some courses may list specific tools required on their page.",
    },
    {
      question: "Is there a certification after completing a course?",
      answer:
        "Yes, you will receive a certificate upon successful completion, which you can showcase on your resume or share with employers.",
    },
    {
      question: "Can I access courses on mobile devices?",
      answer:
        "Absolutely! Our platform is fully responsive and works great on all devices, including smartphones and tablets.",
    },
    {
      question: "How can I contact support if I have a question?",
      answer:
        "You can reach our support team via the 'Contact' page or by emailing support@e-renaissance.com.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find answers to the most common questions about e-Renaissance and how our platform works.
          </p>
        </header>

        {/* FAQ Items */}
        <section className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center p-4 text-left cursor-pointer"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </h2>
                {activeQuestion === index ? (
                  <ChevronUp className="h-6 w-6 text-blue-600 dark:text-blue-400 transform hover:scale-110 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-blue-600 dark:text-blue-400 transform hover:scale-110 transition-transform duration-200" />
                )}
              </button>
              {activeQuestion === index && (
                <div className="text-gray-600 dark:text-gray-300 text-base p-4 pt-0 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Faq;