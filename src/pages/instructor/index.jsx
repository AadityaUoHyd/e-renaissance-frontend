import InstructorCourses from "@/components/instructor-view/courses";
import InstructorDashboard from "@/components/instructor-view/dashboard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AuthContext } from "@/context/auth-context";
import { InstructorContext } from "@/context/instructor-context";
import { fetchInstructorCourseListService } from "@/services";
import { BarChart, Book, LogOut, Sun, Moon } from "lucide-react"; // Add icons
import { useContext, useEffect, useState } from "react";

function InstructorDashboardpage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isDarkMode, setIsDarkMode] = useState(true); // Default dark
  const { resetCredentials } = useContext(AuthContext);
  const { instructorCoursesList, setInstructorCoursesList } =
    useContext(InstructorContext);

  async function fetchAllCourses() {
    const response = await fetchInstructorCourseListService();
    if (response?.success) setInstructorCoursesList(response?.data);
  }

  useEffect(() => {
    fetchAllCourses();
  }, []);

  // Theme effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
      component: <InstructorDashboard listOfCourses={instructorCoursesList} />,
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      component: <InstructorCourses listOfCourses={instructorCoursesList} />,
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "logout",
      component: null,
    },
  ];

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 shadow-md hidden md:block">
        <div className="p-6">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
            Instructor View
          </h2>

          {/* Theme Toggle Button */}
          <Button
            onClick={toggleTheme}
            className="w-full justify-start py-3 px-4 text-sm md:text-base font-semibold tracking-wide rounded-lg transition-all duration-200 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 mb-4"
            variant="ghost"
          >
            {isDarkMode ? (
              <Sun className="mr-3 h-5 w-5" />
            ) : (
              <Moon className="mr-3 h-5 w-5" />
            )}
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </Button>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((menuItem) => (
              <Button
                key={menuItem.value}
                variant={activeTab === menuItem.value ? "secondary" : "ghost"}
                onClick={
                  menuItem.value === "logout"
                    ? handleLogout
                    : () => setActiveTab(menuItem.value)
                }
                className={`w-full justify-start py-3 px-4 text-sm md:text-base font-semibold tracking-wide rounded-lg transition-all duration-200 
                  ${
                    activeTab === menuItem.value
                      ? "bg-blue-100 text-blue-600 dark:bg-gray-600 dark:text-blue-400"
                      : menuItem.value === "logout"
                      ? "text-gray-700 dark:text-gray-200 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-800 dark:hover:text-red-100"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
              >
                <menuItem.icon className="mr-3 h-5 w-5 transform hover:scale-110 transition-transform duration-200" />
                {menuItem.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8">
            Instructor Dashboard
          </h1>
          <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {menuItems
                .filter((item) => item.component !== null)
                .map((menuItem) => (
                  <TabsContent key={menuItem.value} value={menuItem.value}>
                    {menuItem.component}
                  </TabsContent>
                ))}
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}

export default InstructorDashboardpage;
