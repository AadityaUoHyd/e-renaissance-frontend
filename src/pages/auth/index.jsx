import CommonForm from "@/components/common-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import Logo from "@/assets/logo.png";
import {
  Home,
  Info,
  Contact,
  LogIn,
  UserPlus,
  LogOut,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AuthPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("signin");
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser,
    auth,
    resetCredentials,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab === "signup") {
      setActiveTab("signup");
    } else {
      setActiveTab("signin");
    }
  }, [location.search]);

  function handleTabChange(value) {
    setActiveTab(value);
    navigate(`/auth?tab=${value}`, { replace: true });
  }

  function checkIfSignInFormIsValid() {
    return (
      signInFormData &&
      signInFormData.userEmail !== "" &&
      signInFormData.password !== ""
    );
  }

  function checkIfSignUpFormIsValid() {
    return (
      signUpFormData &&
      signUpFormData.userName !== "" &&
      signUpFormData.userEmail !== "" &&
      signUpFormData.password !== ""
    );
  }

  function handleSignOut() {
    resetCredentials();
    sessionStorage.clear();
    navigate("/");
  }

  // Wrap handleLoginUser to catch errors and show toast
  async function handleLoginWithToast(formData) {
    try {
      await handleLoginUser(formData);
    } catch (error) {
      const errorMessage =
        "Invalid email or password. Please try again.";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: document.documentElement.classList.contains("dark") ? "dark" : "light",
      });
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900">
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={document.documentElement.classList.contains("dark") ? "dark" : "light"}
        toastClassName="rounded-lg bg-red-600 dark:bg-red-500 text-white font-semibold tracking-wide shadow-md"
        bodyClassName="text-sm"
      />

      {/* Mobile-specific styles */}
      <style>{`
        @media (max-width: 768px) {
          header nav > *:not(:nth-child(1)) {
            display: none;
          }
          header nav > button:nth-child(1) {
            display: flex;
          }
          header nav > button:nth-child(1):not(:has(svg[class*="LogIn"])) {
            display: none;
          }
          header {
            justify-content: center !important;
          }
          .max-w-4xl {
            max-width: 100% !important;
          }
          .lg\\:flex-row {
            flex-direction: column !important;
          }
          .lg\\:w-1\\/2 {
            width: 100% !important;
          }
          .p-8 {
            padding: 1rem !important;
          }
          .text-2xl {
            font-size: 1.25rem !important;
          }
          .grid-cols-2 {
            grid-template-columns: 1fr 1fr !important;
          }
          .h-10,
          .w-10,
          .w-3\\/4 {
            max-width: 100px !important;
            height: auto !important;
          }
          .hover\\:scale-105 {
            transform: none !important;
          }
          header span {
            display: none;
          }
        }
      `}</style>

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <Link
          to="/"
          className="flex items-center group hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <img
            src={Logo}
            alt="e-Renaissance logo"
            className="h-10 w-10 mr-3 transform group-hover:scale-105 transition-transform duration-200"
          />
          <span className="font-extrabold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 tracking-tight">
            e-Renaissance
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-2 text-sm md:text-base font-semibold tracking-wide ${
                isActive
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
              `flex items-center space-x-2 text-sm md:text-base font-semibold tracking-wide ${
                isActive
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
              `flex items-center space-x-2 text-sm md:text-base font-semibold tracking-wide ${
                isActive
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              } transition-colors duration-200`
            }
          >
            <Contact className="w-5 h-5 transform hover:scale-110 transition-transform duration-200" />
            <span>Contact</span>
          </NavLink>
          {auth?.authenticate ? (
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 text-sm md:text-base font-semibold tracking-wide text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <LogOut className="w-5 h-5 transform hover:scale-110 transition-transform duration-200 hover:text-red-500" />
              <span>SignOut</span>
            </button>
          ) : (
            <>
              <button
                onClick={() => handleTabChange("signin")}
                className={`flex items-center space-x-2 text-sm md:text-base font-semibold tracking-wide ${
                  activeTab === "signin"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                } transition-colors duration-200`}
              >
                <LogIn className="w-5 h-5 transform hover:scale-110 transition-transform duration-200" />
                <span>SignIn</span>
              </button>
              <button
                onClick={() => handleTabChange("signup")}
                className={`flex items-center space-x-2 text-sm md:text-base font-semibold tracking-wide ${
                  activeTab === "signup"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                } transition-colors duration-200`}
              >
                <UserPlus className="w-5 h-5 transform hover:scale-110 transition-transform duration-200" />
                <span>SignUp</span>
              </button>
            </>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center flex-grow px-4 py-12">
        <Card className="w-full max-w-4xl flex flex-col lg:flex-row bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden">
          {/* Logo Section */}
          <div className="lg:w-1/2 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-indigo-800 flex items-center justify-center p-8">
            <img
              src={Logo}
              alt="e-Renaissance logo"
              className="w-3/4 max-w-md h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Form Section */}
          <div className="lg:w-1/2 p-8">
            <Tabs
              value={activeTab}
              defaultValue="signin"
              onValueChange={handleTabChange}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <TabsTrigger
                  value="signin"
                  className="py-2 text-sm md:text-base font-semibold tracking-wide rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 dark:data-[state=active]:bg-gray-800 dark:data-[state=active]:text-blue-400 transition-all duration-200"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="py-2 text-sm md:text-base font-semibold tracking-wide rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 dark:data-[state=active]:bg-gray-800 dark:data-[state=active]:text-blue-400 transition-all duration-200"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>
              <TabsContent value="signin">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Sign in to your account
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <CommonForm
                    formControls={signInFormControls}
                    buttonText={"Sign In"}
                    formData={signInFormData}
                    setFormData={setSignInFormData}
                    isButtonDisabled={!checkIfSignInFormIsValid()}
                    handleSubmit={handleLoginWithToast}
                    buttonClassName="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-md font-semibold tracking-wide transform hover:scale-105 transition-all duration-300"
                  />
                  <Link
                    to="/auth/forgot-password"
                    className="flex justify-between mt-4 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-semibold tracking-wide transition-colors duration-200"
                  >
                    Forgot Password?
                  </Link>
                </CardContent>
              </TabsContent>
              <TabsContent value="signup">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Create a new account
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <CommonForm
                    formControls={signUpFormControls}
                    buttonText={"Sign Up"}
                    formData={signUpFormData}
                    setFormData={setSignUpFormData}
                    isButtonDisabled={!checkIfSignUpFormIsValid()}
                    handleSubmit={handleRegisterUser}
                    buttonClassName="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-md font-semibold tracking-wide transform hover:scale-105 transition-all duration-300"
                  />
                </CardContent>
              </TabsContent>
            </Tabs>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AuthPage;