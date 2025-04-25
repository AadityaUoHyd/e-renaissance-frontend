import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import VideoPlayer from "@/components/video-player";
import { AuthContext } from "@/context/auth-context";
import { StudentContext } from "@/context/student-context";
import {
  getCurrentCourseProgressService,
  markLectureAsViewedService,
  resetCourseProgressService,
} from "@/services";
import { Check, ChevronLeft, Play } from "lucide-react";
import Confetti from "react-confetti";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function StudentViewCourseProgressPage() {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const { studentCurrentCourseProgress, setStudentCurrentCourseProgress } =
    useContext(StudentContext);
  const [lockCourse, setLockCourse] = useState(false);
  const [currentLecture, setCurrentLecture] = useState(null);
  const [showCourseCompleteDialog, setShowCourseCompleteDialog] =
    useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [footerHeight, setFooterHeight] = useState(400); // Fallback
  const itemsPerPage = 10; // 10 lectures per page
  const { id } = useParams();

  // Measure footer height dynamically
  useEffect(() => {
    const updateFooterHeight = () => {
      const footer = document.querySelector(".border-t.border-gray-200.dark\\:border-gray-700") || document.querySelector("footer");
      if (footer) {
        const height = footer.offsetHeight;
        console.log("Footer height:", height); // Debug
        setFooterHeight(height > 0 ? height : 400);
      }
    };
    updateFooterHeight();
    const interval = setInterval(updateFooterHeight, 100);
    const timeout = setTimeout(() => clearInterval(interval), 5000);
    window.addEventListener("resize", updateFooterHeight);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      window.removeEventListener("resize", updateFooterHeight);
    };
  }, []);

  async function fetchCurrentCourseProgress() {
    const response = await getCurrentCourseProgressService(auth?.user?._id, id);
    if (response?.success) {
      if (!response?.data?.isPurchased) {
        setLockCourse(true);
      } else {
        setStudentCurrentCourseProgress({
          courseDetails: response?.data?.courseDetails,
          progress: response?.data?.progress,
        });

        if (response?.data?.completed) {
          setCurrentLecture(response?.data?.courseDetails?.curriculum[0]);
          setShowCourseCompleteDialog(true);
          setShowConfetti(true);
          return;
        }

        if (response?.data?.progress?.length === 0) {
          setCurrentLecture(response?.data?.courseDetails?.curriculum[0]);
        } else {
          const lastIndexOfViewedAsTrue = response?.data?.progress.reduceRight(
            (acc, obj, index) => {
              return acc === -1 && obj.viewed ? index : acc;
            },
            -1
          );

          setCurrentLecture(
            response?.data?.courseDetails?.curriculum[
              lastIndexOfViewedAsTrue + 1
            ]
          );
        }
      }
    }
  }

  async function updateCourseProgress() {
    if (currentLecture) {
      const response = await markLectureAsViewedService(
        auth?.user?._id,
        studentCurrentCourseProgress?.courseDetails?._id,
        currentLecture._id
      );

      if (response?.success) {
        fetchCurrentCourseProgress();
      }
    }
  }

  async function handleRewatchCourse() {
    const response = await resetCourseProgressService(
      auth?.user?._id,
      studentCurrentCourseProgress?.courseDetails?._id
    );

    if (response?.success) {
      setCurrentLecture(null);
      setShowConfetti(false);
      setShowCourseCompleteDialog(false);
      fetchCurrentCourseProgress();
    }
  }

  useEffect(() => {
    fetchCurrentCourseProgress();
  }, [id]);

  useEffect(() => {
    if (currentLecture?.progressValue === 1) updateCourseProgress();
  }, [currentLecture]);

  useEffect(() => {
    if (showConfetti) setTimeout(() => setShowConfetti(false), 15000);
  }, [showConfetti]);

  // Pagination logic
  const totalItems = studentCurrentCourseProgress?.courseDetails?.curriculum?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedCurriculum = studentCurrentCourseProgress?.courseDetails?.curriculum?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900 flex flex-col">
      {showConfetti && <Confetti />}
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-md">
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => navigate("/student-courses")}
            variant="ghost"
            size="sm"
            className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
          >
            <ChevronLeft className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            Back to My Courses
          </Button>
          <h1 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white hidden md:block">
            {studentCurrentCourseProgress?.courseDetails?.title}
          </h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Video Area */}
        <div className="flex-1">
          <div className="bg-black">
            <VideoPlayer
              width="100%"
              height="500px"
              url={currentLecture?.videoUrl}
              onProgressUpdate={setCurrentLecture}
              progressData={currentLecture}
            />
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
              {currentLecture?.title || "No Lecture Selected"}
            </h2>
          </div>
        </div>
        {/* Static Sidebar */}
        <div
          className="w-[400px] bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 shadow-lg flex-shrink-0"
          style={{
            minHeight: `min(564px, calc(100vh - 64px - ${footerHeight}px))`, // Align with video player bottom or footer
          }}
        >
          <Tabs defaultValue="content" className="h-full flex flex-col">
            <TabsList className="grid bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 w-full grid-cols-2 p-0 h-14">
              <TabsTrigger
                value="content"
                className="text-gray-900 dark:text-white rounded-none h-full data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:dark:bg-blue-400 transition-all duration-200"
              >
                Course Content
              </TabsTrigger>
              <TabsTrigger
                value="overview"
                className="text-gray-900 dark:text-white rounded-none h-full data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:dark:bg-blue-400 transition-all duration-200"
              >
                Overview
              </TabsTrigger>
            </TabsList>
            <TabsContent value="content" className="flex-1 overflow-hidden">
              <div
                className="flex flex-col"
                style={{
                  minHeight: `min(500px, calc(100vh - 64px - ${footerHeight}px - 56px))`, // Minimum video player height
                }}
              >
                <div className="p-4 space-y-4">
                  {paginatedCurriculum?.map((item, index) => (
                    <div
                      className="flex items-center space-x-3 text-sm text-gray-700 dark:text-gray-200 font-semibold cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 transition-all duration-200"
                      key={item._id}
                      onClick={() => setCurrentLecture(item)}
                    >
                      <span className="w-6 text-gray-700 dark:text-gray-200">
                        {(currentPage - 1) * itemsPerPage + index + 1}.
                      </span>
                      {studentCurrentCourseProgress?.progress?.find(
                        (progressItem) => progressItem.lectureId === item._id
                      )?.viewed ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Play className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      )}
                      <span>{item?.title}</span>
                    </div>
                  ))}
                </div>
                <div className="flex-1"></div> {/* Spacer to stretch to bottom */}
                {totalPages > 1 && (
                  <div className="p-4 flex justify-center space-x-2 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="py-2 px-4 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition-all duration-200"
                    >
                      Previous
                    </Button>
                    <span className="py-2 px-4 text-gray-700 dark:text-gray-200">
                      Page {currentPage} of {totalPages}
                    </span>
                    <Button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="py-2 px-4 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition-all duration-200"
                    >
                      Next
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="overview" className="flex-1 overflow-hidden">
              <div
                className="flex flex-col"
                style={{
                  minHeight: `min(500px, calc(100vh - 64px - ${footerHeight}px - 56px))`, // Minimum video player height
                }}
              >
                <div className="p-4">
                  <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                    About this course
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {studentCurrentCourseProgress?.courseDetails?.description ||
                      "No description available."}
                  </p>
                </div>
                <div className="flex-1"></div> {/* Spacer to stretch to bottom */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      {/* Dialogs */}
      <Dialog open={lockCourse}>
        <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
              Access Denied
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-300">
              Please purchase this course to gain access.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => navigate("/student-courses")}
            className="bg-blue-600 dark:bg-blue-400 text-white hover:bg-blue-700 dark:hover:bg-blue-500 rounded-lg transition-all duration-200"
          >
            Back to Courses
          </Button>
        </DialogContent>
      </Dialog>
      <Dialog open={showCourseCompleteDialog}>
        <DialogContent showOverlay={false} className="sm:max-w-[425px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
              Congratulations!
            </DialogTitle>
            <DialogDescription className="flex flex-col gap-4 text-gray-600 dark:text-gray-300">
              <Label>You have completed the course!</Label>
              <div className="flex flex-row gap-3">
                <Button
                  onClick={() => navigate("/student-courses")}
                  className="bg-blue-600 dark:bg-blue-400 text-white hover:bg-blue-700 dark:hover:bg-blue-500 rounded-lg transition-all duration-200"
                >
                  My Courses
                </Button>
                <Button
                  onClick={handleRewatchCourse}
                  className="bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition-all duration-200"
                >
                  Rewatch Course
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default StudentViewCourseProgressPage;