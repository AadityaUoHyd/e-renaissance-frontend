import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const BecomeInstructor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expertise: "",
    bio: "",
    courseIdea: "",
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
    if (!formData.name || !formData.email || !formData.expertise) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success("Your application has been submitted successfully!");
    setFormData({
      name: "",
      email: "",
      expertise: "",
      bio: "",
      courseIdea: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Become an Instructor
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Share your knowledge with others by teaching on e-Renaissance! Join
            our growing community of educators and make a lasting impact.
          </p>
        </header>

        {/* Application Form */}
        <section className="space-y-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-2xl rounded-xl p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
              Apply to Become an Instructor
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600 rounded-lg"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600 rounded-lg"
                    required
                  />
                </div>

                <div className="flex flex-col md:col-span-2">
                  <label
                    htmlFor="expertise"
                    className="text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Area of Expertise
                  </label>
                  <Input
                    id="expertise"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    placeholder="What do you specialize in?"
                    className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600 rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="bio"
                  className="text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Short Bio
                </label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell us about yourself"
                  className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600 rounded-lg"
                  rows={4}
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="courseIdea"
                  className="text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                  Your Course Idea
                </label>
                <Textarea
                  id="courseIdea"
                  name="courseIdea"
                  value={formData.courseIdea}
                  onChange={handleChange}
                  placeholder="What would you like to teach?"
                  className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600 rounded-lg"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-md font-semibold tracking-wide transform hover:scale-105 transition-all duration-300"
              >
                Apply Now
              </Button>
            </form>
          </div>
        </section>

        {/* Benefits */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8">
            Why Become an Instructor?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                Earn Money
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Monetize your knowledge and earn money for each student enrolled
                in your course.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                Flexible Schedule
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Create and manage your courses on your own schedule. Teach at
                your own pace.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                Global Reach
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Reach students from all over the world and share your knowledge
                with a global community.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BecomeInstructor;