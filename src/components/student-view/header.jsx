import { useState, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";
import Logo from "@/assets/logo.png";
import {
  TvMinimalPlay,
  User,
  Sun,
  Moon,
  LogOut,
  Info,
  Contact,
  LogIn,
  UserPlus,
  Home,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const { auth, resetCredentials } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300">
      {/* Mobile styles */}
      <style>{`
        @media (max-width: 768px) {
          /* Hide About, Contact */
          header .space-x-6 > .flex.items-center.space-x-4 {
            display: none;
          }

          /* Hide Sign Up */
          header .flex.gap-4 > a[href*="signup"] {
            display: none;
          }

          /* Hide logo text (optional - if you want it cleaner) */
          header span {
            display: none;
          }

          /* Optionally shrink logo */
          header img {
            max-width: 40px;
            height: auto;
          }

          /* Stack layout vertically on mobile */
          header {
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
          }
        }
      `}</style>

      <div className="flex items-center space-x-6">
        <Link
          to="/home"
          className="flex items-center group hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <img
            src={Logo}
            alt="e-Renaissance logo"
            className="h-10 w-10 mr-3 transform group-hover:scale-105 transition-transform duration-200"
          />
          <span className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 tracking-tight">
            e-Renaissance
          </span>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-2 text-sm md:text-base font-semibold tracking-wide ${isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              } transition-colors duration-200`
            }
          >
            <Home className="w-5 h-5 transform hover:scale-110 transition-transform duration-200" />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center space-x-2 text-sm md:text-base font-semibold tracking-wide ${isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              } transition-colors duration-200`
            }
          >
            <Info className="w-5 h-5 transform hover:scale-110 transition-transform duration-200" />
            <span>About</span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center space-x-2 text-sm md:text-base font-semibold tracking-wide ${isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              } transition-colors duration-200`
            }
          >
            <Contact className="w-5 h-5 transform hover:scale-110 transition-transform duration-200" />
            <span>Contact</span>
          </NavLink>
        </div>

        {auth?.authenticate ? (



          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-12 w-12 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center ring-2 ring-blue-300 dark:ring-blue-500 hover:ring-blue-400 dark:hover:ring-blue-400 transition-all duration-300"
              >
                <User className="h-7 w-7 text-gray-800 dark:text-gray-200 transform hover:scale-110 transition-transform duration-200" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 transform transition-all duration-300 ease-in-out">
              <DropdownMenuItem
                onClick={() => navigate("/courses/student-courses")}
                className="flex items-center space-x-3 text-base text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md px-3 py-2 cursor-pointer transition-colors duration-200"
              >
                <TvMinimalPlay className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>My Courses</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={toggleTheme}
                className="flex items-center space-x-3 text-base text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md px-3 py-2 cursor-pointer transition-colors duration-200"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                ) : (
                  <Sun className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                )}
                <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={handleLogout}
                className="flex items-center space-x-3 text-base bg-transparent text-gray-700 dark:text-gray-200 hover:bg-red-300 hover:text-red-800 dark:hover:bg-red-800 dark:hover:text-red-200 rounded-md px-3 py-2 cursor-pointer transition-colors duration-200"
              >
                <LogOut className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Logout</span>
              </DropdownMenuItem>

            </DropdownMenuContent>
          </DropdownMenu>


        ) : (
          <div className="flex gap-3 items-center">
            <NavLink
              to="/auth"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-sm md:text-base font-semibold tracking-wide ${isActive
                  ? "text-blue-600 dark:text-blue-400 gap-2"
                  : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 gap-2"
                } transition-colors duration-200`
              }
            >
              <LogIn className="w-5 h-5 transform hover:scale-110 transition-transform duration-200" />
              <span>SignIn</span>
            </NavLink>
            <NavLink
              to="/auth?tab=signup"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-sm md:text-base font-semibold tracking-wide ${isActive
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                } transition-colors duration-200`
              }
            >
              <UserPlus className="w-5 h-5 transform hover:scale-110 transition-transform duration-200" />
              <span>SignUp</span>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default StudentViewCommonHeader;
