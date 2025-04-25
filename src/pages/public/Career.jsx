import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, UserCheck, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Career = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At e-Renaissance, we believe in empowering the next generation of
            learners. We’re looking for passionate individuals who want to make
            a real difference.
          </p>
        </header>

        {/* Culture Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white mb-8">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Briefcase className="h-10 w-10 mx-auto mb-4 text-blue-600 dark:text-blue-400 transform hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Challenging Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Work on innovative projects that challenge your skills and grow
                your career.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <UserCheck className="h-10 w-10 mx-auto mb-4 text-blue-600 dark:text-blue-400 transform hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Inclusive Environment
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We value diversity and create space where everyone thrives.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CheckCircle className="h-10 w-10 mx-auto mb-4 text-blue-600 dark:text-blue-400 transform hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Growth Opportunities
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Learn, grow, and advance through continuous development.
              </p>
            </div>
          </div>
        </section>

        {/* Openings Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white mb-8">
            Current Openings
          </h2>
          <div className="space-y-8">
            {/* Job 1 */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Software Engineer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Help us build the future of education with elegant, scalable code and innovation.
              </p>
              <Link
                to="/apply/1"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold tracking-wide transition-colors duration-200"
              >
                Learn More & Apply
              </Link>
            </div>

            {/* Job 2 */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                UX/UI Designer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Shape intuitive learning experiences with beautiful and functional design.
              </p>
              <Link
                to="/apply/2"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold tracking-wide transition-colors duration-200"
              >
                Learn More & Apply
              </Link>
            </div>

            {/* Job 3 */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Marketing Manager
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Help us grow our global community with impactful marketing strategies.
              </p>
              <Link
                to="/apply/3"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold tracking-wide transition-colors duration-200"
              >
                Learn More & Apply
              </Link>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="bg-white dark:bg-gray-800 p-12 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white mb-8">
            Apply Now
          </h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-base font-semibold text-gray-900 dark:text-white mb-2"
              >
                Full Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600 rounded-lg"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-base font-semibold text-gray-900 dark:text-white mb-2"
              >
                Email Address
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-gray-300 DARK:border-gray-600 rounded-lg"
              />
            </div>

            <div>
              <label
                htmlFor="resume"
                className="block text-base font-semibold text-gray-900 dark:text-white mb-2"
              >
                Upload Your Resume
              </label>
              <Input
                type="file"
                id="resume"
                name="resume"
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600 rounded-lg"
              />
            </div>

            <Button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-md font-semibold tracking-wide transform hover:scale-105 transition-all duration-300"
            >
              Submit Application
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Career;