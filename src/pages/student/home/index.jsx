import { courseCategories, testimonials, faculty } from "@/config";
import Hero1 from "../../../assets/hero1.png";
import Hero2 from "../../../assets/hero2.png";
import Hero3 from "../../../assets/hero3.png";
import Hero4 from "../../../assets/hero4.png";
import Hero5 from "../../../assets/hero5.png";
import Hero6 from "../../../assets/hero6.png";
import Hero22 from "../../../assets/hero21.png";
import Hero33 from "../../../assets/hero31.png";
import Hero44 from "../../../assets/hero41.png";
import Hero55 from "../../../assets/hero51.png";
import Hero66 from "../../../assets/hero61.png";
import Hero7 from "../../../assets/hero7.jpg";
import Hero8 from "../../../assets/hero8.png";
import Hero81 from "../../../assets/hero81.png";
import Hero9 from "../../../assets/hero9.jpg";
import Hero10 from "../../../assets/hero10.png";
import { Button } from "@/components/ui/button";
import { useContext, useEffect, useState } from "react";
import { StudentContext } from "@/context/student-context";
import {
  checkCoursePurchaseInfoService,
  fetchStudentViewCourseListService,
} from "@/services";
import { AuthContext } from "@/context/auth-context";
import { useNavigate, NavLink } from "react-router-dom";
import { FileSearch } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function StudentHomePage() {
  const { studentViewCoursesList, setStudentViewCoursesList } =
    useContext(StudentContext);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Images for the slider based on theme
  const heroImages = isDarkMode
    ? [
        { src: Hero1, alt: "Hero 1" },
        { src: Hero22, alt: "Hero 22" },
        { src: Hero33, alt: "Hero 33" },
        { src: Hero44, alt: "Hero 44" },
        { src: Hero55, alt: "Hero 55" },
        { src: Hero66, alt: "Hero 66" },
        { src: Hero7, alt: "Hero 7" },
        { src: Hero81, alt: "Hero 81" },
        { src: Hero9, alt: "Hero 9" },
        { src: Hero10, alt: "Hero 10" },
      ]
    : [
        { src: Hero1, alt: "Hero 1" },
        { src: Hero2, alt: "Hero 2" },
        { src: Hero3, alt: "Hero 3" },
        { src: Hero4, alt: "Hero 4" },
        { src: Hero5, alt: "Hero 5" },
        { src: Hero6, alt: "Hero 6" },
        { src: Hero7, alt: "Hero 7" },
        { src: Hero8, alt: "Hero 8" },
        { src: Hero9, alt: "Hero 9" },
        { src: Hero10, alt: "Hero 10" },
      ];

  function handleNavigateToCoursesPage(getCurrentId) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      category: [getCurrentId],
    };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate("/courses");
  }

  async function fetchAllStudentViewCourses() {
    const response = await fetchStudentViewCourseListService();
    if (response?.success) setStudentViewCoursesList(response?.data);
  }

  async function handleCourseNavigate(getCurrentCourseId) {
    const response = await checkCoursePurchaseInfoService(
      getCurrentCourseId,
      auth?.user?._id
    );
    if (response?.success) {
      if (response?.data) {
        navigate(`/course-progress/${getCurrentCourseId}`);
      } else {
        navigate(`/course/details/${getCurrentCourseId}`);
      }
    }
  }

  useEffect(() => {
    fetchAllStudentViewCourses();
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  // Limit to 12 latest course categories
  const latestCourseCategories = courseCategories.slice(0, 12);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      
      {/* Hero Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-12 bg-white dark:bg-gray-800 shadow-lg">
        <div className="flex flex-col items-center max-w-7xl mx-auto">
          {/* Slider Image */}
          <div className="w-full max-w-4xl mb-2">
            <Slider {...sliderSettings}>
              {heroImages.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={image.src}
                    className="w-full h-auto object-cover rounded-xl aspect-[16/9] transform hover:scale-102 transition-transform duration-300"
                    alt={image.alt}
                  />
                </div>
              ))}
            </Slider>
          </div>
          {/* Text and Button */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-gray-900 dark:text-white tracking-tight">
              Empower Your Future
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-xl mx-auto">
              Learn the skills you need to thrive today — and lead tomorrow.
            </p>
            <Button className="group flex items-center space-x-2 py-6 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 mx-auto">
              <NavLink to="/courses" className="flex items-center space-x-2">
                <FileSearch className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-base font-semibold">Explore Courses</span>
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="py-12 px-6 lg:px-12 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
          Course Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {courseCategories.map((categoryItem) => (
            <Button
              key={categoryItem.id}
              variant="outline"
              onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
              className="justify-start py-3 px-4 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg shadow-sm transform hover:scale-105 transition-all duration-200"
            >
              <span className="text-sm font-semibold">{categoryItem.label}</span>
            </Button>
          ))}
        </div>
      </section>

      {/* New Featured Courses Section */}
      <section className="py-16 px-6 lg:px-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
          New Featured Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentViewCoursesList && studentViewCoursesList.length > 0 ? (
            studentViewCoursesList.slice(0, 12).map((courseItem) => (
              <div
                key={courseItem._id}
                onClick={() => handleCourseNavigate(courseItem?._id)}
                className="border rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={courseItem?.image}
                  width={300}
                  height={150}
                  className="w-full h-48 object-cover rounded-t-xl"
                  alt={courseItem?.title}
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white line-clamp-2">
                    {courseItem?.title}
                  </h3>
                  <h5 className="mb-3 inline-block px-3 py-1 text-sm font-semibold text-yellow-800 dark:text-yellow-400 bg-gray-200 dark:bg-gray-700 rounded-full">
                    {courseItem?.category}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    By - {courseItem?.instructorName}
                  </p>
                  <p className="text-base font-bold text-blue-600 dark:text-blue-400">
                    Price - ${courseItem?.pricing}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-gray-500 dark:text-gray-400">
              No courses available.
            </p>
          )}
        </div>
        <div className="mt-6 text-center">
          <Button
            onClick={() => navigate("/courses")}
            className="py-6 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600"
          >
            <span className="text-base font-semibold">Find More New Courses</span>
          </Button>
        </div>
      </section>

      {/* Our Faculty Members Section */}
      <section className="py-12 px-6 lg:px-12 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
          Our Faculty Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((teacher, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-6"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                {teacher.name}
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 text-center mb-3">
                {teacher.subject}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center">
                {teacher.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-12 px-6 lg:px-12 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
          Let's See Few Student Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {testimonial.course}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}

export default StudentHomePage;