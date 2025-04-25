import React from "react";
import {
  Info,
  Shield,
  Lock,
  Share2,
  Cookie,
  UserCheck,
  Link,
  RefreshCcw,
  Mail,
} from "lucide-react";

const sections = [
  {
    icon: Info,
    title: "1. Information We Collect",
    content:
      "We may collect personal details such as your name, email address, phone number, and other information you provide while registering, contacting us, or using our services.",
  },
  {
    icon: Shield,
    title: "2. How We Use Your Information",
    content: "Your information is used to:",
    list: [
      "Provide, maintain, and improve our services",
      "Communicate with you about your account or inquiries",
      "Send newsletters, updates, and promotional content",
      "Ensure platform security and prevent fraud",
    ],
  },
  {
    icon: Lock,
    title: "3. Data Protection",
    content:
      "We use industry-standard security measures to protect your data from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.",
  },
  {
    icon: Share2,
    title: "4. Sharing of Information",
    content:
      "We do not sell or rent your personal data. We may share information with trusted third-party services who assist us in operating our platform, provided they agree to keep your information confidential.",
  },
  {
    icon: Cookie,
    title: "5. Cookies",
    content:
      "We use cookies to enhance your experience, analyze site traffic, and personalize content. You can disable cookies through your browser settings if you prefer.",
  },
  {
    icon: UserCheck,
    title: "6. Your Rights",
    content:
      "You have the right to access, correct, or delete your personal data. You may also opt-out of receiving marketing communications at any time.",
  },
  {
    icon: Link,
    title: "7. Third-Party Links",
    content:
      "Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external sites.",
  },
  {
    icon: RefreshCcw,
    title: "8. Changes to This Policy",
    content:
      "We may update our privacy policy from time to time. Changes will be posted on this page with a revised effective date.",
  },
  {
    icon: Mail,
    title: "9. Contact Us",
    content:
      "If you have any questions about our privacy practices, please contact us at support@e-renaissance.com.",
  },
];

const Privacy = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This privacy policy outlines how we
            collect, use, and protect your information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
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

export default Privacy;