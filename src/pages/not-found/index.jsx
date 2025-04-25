import { Link } from "react-router-dom";
import { AlertCircle, Home, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-16 w-16 text-blue-600 dark:text-blue-400 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
          It looks like you've wandered off the path. The page you're looking for
          doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-md font-semibold tracking-wide py-3 px-6 transform hover:scale-105 transition-all duration-300"
          >
            <Link to="/">
              <Home className="h-5 w-5" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg shadow-md font-semibold tracking-wide py-3 px-6 transform hover:scale-105 transition-all duration-300"
          >
            <Link to="/courses">
              <FileSearch className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Browse Courses
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;