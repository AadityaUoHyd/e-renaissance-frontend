import React from "react";
import {
  FileText,
  ShieldCheck,
  Lock,
  EyeOff,
  AlertTriangle,
  Gavel,
  RefreshCcw,
  Mail,
} from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "1. Introduction",
    content:
      "These terms and conditions govern the use of this website and services offered by e-Renaissance. By accessing or using the site, you agree to be bound by these terms. If you disagree with any of these terms, please do not use our services.",
  },
  {
    icon: ShieldCheck,
    title: "2. Usage of Service",
    content:
      "You must use our services only for lawful purposes and in accordance with these Terms. You agree not to use the service:",
    list: [
      "For any unlawful purpose or illegal activities",
      "To harass, abuse, or harm any person or group",
      "To interfere with or disrupt the service in any way",
    ],
  },
  {
    icon: Lock,
    title: "3. Account Security",
    content:
      "You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use or security breach of your account.",
  },
  {
    icon: EyeOff,
    title: "4. Data Privacy",
    content:
      "We take your privacy seriously. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your personal data.",
  },
  {
    icon: AlertTriangle,
    title: "5. Limitation of Liability",
    content:
      "In no event shall e-Renaissance be held liable for any damages, including but not limited to indirect, incidental, punitive, or consequential damages arising from your use of our services.",
  },
  {
    icon: Gavel,
    title: "6. Governing Law",
    content:
      "These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes shall be resolved under the jurisdiction of the courts in Hyderabad.",
  },
  {
    icon: RefreshCcw,
    title: "7. Changes to Terms",
    content:
      "We reserve the right to modify or update these terms at any time. We will notify users of any significant changes by updating the date of these terms.",
  },
  {
    icon: Mail,
    title: "8. Contact Us",
    content:
      "If you have any questions about these terms and conditions, please contact us at support@e-renaissance.com.",
  },
];

const Terms = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using our
            service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400 transform hover:scale-110 transition-transform duration-200" />
                  {section.title}
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {section.content}
                </p>
                {section.list && (
                  <ul className="list-disc list-inside mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Terms;