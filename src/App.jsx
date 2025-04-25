import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";
import RouteGuard from "./components/route-guard";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";
import InstructorDashboardpage from "./pages/instructor";
import StudentViewCommonLayout from "./components/student-view/common-layout";
import StudentHomePage from "./pages/student/home";
import NotFoundPage from "./pages/not-found";
import AddNewCoursePage from "./pages/instructor/add-new-course";
import StudentViewCoursesPage from "./pages/student/courses";
import StudentViewCourseDetailsPage from "./pages/student/course-details";
import PaypalPaymentReturnPage from "./pages/student/payment-return";
import StudentCoursesPage from "./pages/student/student-courses";
import StudentViewCourseProgressPage from "./pages/student/course-progress";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";

// Public routes
import About from "@/pages/public/About";
import BecomeInstructor from "@/pages/public/BecomeInstructor";
import Career from "@/pages/public/Career";
import Contact from "@/pages/public/Contact";
import Faq from "@/pages/public/Faq";
import Privacy from "@/pages/public/Privacy";
import Terms from "@/pages/public/Terms";

import ForgotPassword from "@/context/auth-context/ForgotPassword";
import ResetPassword from "@/context/auth-context/ResetPassword";
import VerifyOtp from "@/context/auth-context/VerifyOtp";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Routes>
          {/* Public Routes with StudentViewCommonLayout */}
          <Route element={<StudentViewCommonLayout />}>
            <Route path="/" element={<StudentHomePage />} />
            <Route path="/home" element={<StudentHomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/become-instructor" element={<BecomeInstructor />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
          </Route>

          {/* Auth Route */}
          <Route
            path="/auth"
            element={
              <RouteGuard
                element={<AuthPage />}
                authenticated={auth?.authenticate}
                user={auth?.user}
              />
            }
          />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/verify-otp" element={<VerifyOtp />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />

          {/* Protected Routes for Users */}
          <Route
            path="/"
            element={
              <RouteGuard
                element={<StudentViewCommonLayout />}
                authenticated={auth?.authenticate}
                user={auth?.user}
              />
            }
          >
            <Route path="courses" element={<StudentViewCoursesPage />} />
            <Route path="student-courses" element={<StudentCoursesPage />} />
            <Route path="courses/student-courses" element={<StudentCoursesPage />} />
            <Route path="course/details/:id" element={<StudentViewCourseDetailsPage />} />
            <Route
              path="course-progress/:id"
              element={<StudentViewCourseProgressPage />}
            />
            <Route path="payment-return" element={<PaypalPaymentReturnPage />} />
          </Route>

          {/* Protected Routes for Instructors */}
          <Route
            path="/instructor"
            element={
              <RouteGuard
                element={<InstructorDashboardpage />}
                authenticated={auth?.authenticate}
                user={auth?.user}
              />
            }
          />
          <Route
            path="/instructor/create-new-course"
            element={
              <RouteGuard
                element={<AddNewCoursePage />}
                authenticated={auth?.authenticate}
                user={auth?.user}
              />
            }
          />
          <Route
            path="/instructor/edit-course/:courseId"
            element={
              <RouteGuard
                element={<AddNewCoursePage />}
                authenticated={auth?.authenticate}
                user={auth?.user}
              />
            }
          />

          {/* Catch-all Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </div>
  );
}

export default App;