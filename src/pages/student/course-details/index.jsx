import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import VideoPlayer from "@/components/video-player";
import { AuthContext } from "@/context/auth-context";
import { StudentContext } from "@/context/student-context";
import {
  checkCoursePurchaseInfoService,
  createPaymentService,
  fetchStudentViewCourseDetailsService,
} from "@/services";
import { CheckCircle, Globe, Lock, PlayCircle } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function StudentViewCourseDetailsPage() {
  const {
    studentViewCourseDetails,
    setStudentViewCourseDetails,
    currentCourseDetailsId,
    setCurrentCourseDetailsId,
    loadingState,
    setLoadingState,
  } = useContext(StudentContext);

  const { auth } = useContext(AuthContext);

  const [displayCurrentVideoFreePreview, setDisplayCurrentVideoFreePreview] =
    useState(null);
  const [showFreePreviewDialog, setShowFreePreviewDialog] = useState(false);
  const [approvalUrl, setApprovalUrl] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjust based on content height
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  async function fetchStudentViewCourseDetails() {
    const response = await fetchStudentViewCourseDetailsService(
      currentCourseDetailsId
    );

    if (response?.success) {
      setStudentViewCourseDetails(response?.data);
      setLoadingState(false);
    } else {
      setStudentViewCourseDetails(null);
      setLoadingState(false);
    }
  }

  function handleSetFreePreview(getCurrentVideoInfo) {
    setDisplayCurrentVideoFreePreview(getCurrentVideoInfo?.videoUrl);
  }

  async function handleCreatePayment() {
    const paymentPayload = {
      userId: auth?.user?._id,
      userName: auth?.user?.userName,
      userEmail: auth?.user?.userEmail,
      orderStatus: "pending",
      paymentMethod: "paypal",
      paymentStatus: "initiated",
      orderDate: new Date(),
      paymentId: "",
      payerId: "",
      instructorId: studentViewCourseDetails?.instructorId,
      instructorName: studentViewCourseDetails?.instructorName,
      courseImage: studentViewCourseDetails?.image,
      courseTitle: studentViewCourseDetails?.title,
      courseId: studentViewCourseDetails?._id,
      coursePricing: studentViewCourseDetails?.pricing,
    };

    const response = await createPaymentService(paymentPayload);

    if (response.success) {
      sessionStorage.setItem(
        "currentOrderId",
        JSON.stringify(response?.data?.orderId)
      );
      setApprovalUrl(response?.data?.approveUrl);
    }
  }

  useEffect(() => {
    if (displayCurrentVideoFreePreview !== null) setShowFreePreviewDialog(true);
  }, [displayCurrentVideoFreePreview]);

  useEffect(() => {
    if (currentCourseDetailsId !== null) fetchStudentViewCourseDetails();
  }, [currentCourseDetailsId]);

  useEffect(() => {
    if (id) setCurrentCourseDetailsId(id);
  }, [id]);

  useEffect(() => {
    if (!location.pathname.includes("course/details"))
      setStudentViewCourseDetails(null),
        setCurrentCourseDetailsId(null),
        setCoursePurchaseId(null);
  }, [location.pathname]);

  if (loadingState) return <Skeleton className="w-full h-64 rounded-xl" />;

  if (approvalUrl !== "") {
    window.location.href = approvalUrl;
  }

  const getIndexOfFreePreviewUrl =
    studentViewCourseDetails !== null
      ? studentViewCourseDetails?.curriculum?.findIndex(
          (item) => item.freePreview
        )
      : -1;

  // Pagination logic for curriculum
  const totalItems = studentViewCourseDetails?.curriculum?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedCurriculum = studentViewCourseDetails?.curriculum?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white p-8 rounded-xl shadow-lg mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            {studentViewCourseDetails?.title}
          </h1>
          <p className="text-xl text-gray-200 dark:text-gray Heaven300 mb-6">
            {studentViewCourseDetails?.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-100 dark:text-gray-200">
            <span>Category: {studentViewCourseDetails?.category},</span>
            <span>Created By: {studentViewCourseDetails?.instructorName},</span>
            <span>Created On: {studentViewCourseDetails?.date.split("T")[0]},</span>
            <span className="flex items-center">
              <Globe className="mr-1 h-4 w-4" />
              {studentViewCourseDetails?.primaryLanguage},
            </span>
            <span>
              {studentViewCourseDetails?.students.length}{" "}
              {studentViewCourseDetails?.students.length <= 1
                ? "Student Enrolled"
                : "Students Enrolled"}.
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Section */}
          <main className="flex-grow">
            <Card className="mb-8 bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden">
              <CardHeader className="p-6">
                <CardTitle className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  What You'll Learn
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {studentViewCourseDetails?.objectives
                    ?.split(",")
                    .map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-200">
                          {objective}
                        </span>
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden">
              <CardHeader className="p-6">
                <CardTitle className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  Course Description
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-gray-700 dark:text-gray-200">
                {studentViewCourseDetails?.description}
              </CardContent>
            </Card>

            {/* Course Curriculum and Video Player Section */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Video Player Section */}
              <Card className="w-full lg:w-1/2 bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden">
                <CardHeader className="p-6">
                  <CardTitle className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Course Preview
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <VideoPlayer
                      url={
                        getIndexOfFreePreviewUrl !== -1
                          ? studentViewCourseDetails?.curriculum[
                              getIndexOfFreePreviewUrl
                            ].videoUrl
                          : ""
                      }
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="mt-6">
                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">Price 
                      ${studentViewCourseDetails?.pricing}
                    </span>
                  </div>
                  <Button
                    onClick={handleCreatePayment}
                    className="w-full py-3 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-md font-semibold tracking-wide transform hover:scale-105 transition-all duration-300"
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>

              {/* Course Curriculum Section */}
              <Card
                className="w-full lg:w-1/2 bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden"
                style={{ minHeight: "100%" }} // Ensures min height matches video player
              >
                <CardHeader className="p-6">
                  <CardTitle className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Course Curriculum
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex flex-col">
                  <ul
                    className="space-y-4 flex-grow overflow-y-auto"
                    style={{ maxHeight: "400px" }} // Adjust based on video player height
                  >
                    {paginatedCurriculum?.map((curriculumItem, index) => (
                      <li
                        key={curriculumItem._id}
                        className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                          curriculumItem?.freePreview
                            ? "cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                            : "cursor-not-allowed opacity-60"
                        }`}
                        onClick={
                          curriculumItem?.freePreview
                            ? () => handleSetFreePreview(curriculumItem)
                            : null
                        }
                      >
                        <span className="mr-3 font-semibold text-gray-700 dark:text-gray-200">
                          {(currentPage - 1) * itemsPerPage + index + 1}.
                        </span>
                        {curriculumItem?.freePreview ? (
                          <PlayCircle className="mr-3 h-5 w-5 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <Lock className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                        )}
                        <span className="text-gray-700 dark:text-gray-200">
                          {curriculumItem?.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-4 space-x-2">
                      <Button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg"
                      >
                        Previous
                      </Button>
                      <span className="py-2 px-4 text-gray-700 dark:text-gray-200">
                        Page {currentPage} of {totalPages}
                      </span>
                      <Button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg"
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </main>
        </div>

        {/* Free Preview Dialog */}
        <Dialog
          open={showFreePreviewDialog}
          onOpenChange={() => {
            setShowFreePreviewDialog(false);
            setDisplayCurrentVideoFreePreview(null);
          }}
        >
          <DialogContent className="max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Course Preview
              </DialogTitle>
            </DialogHeader>
            <div className="aspect-video rounded-lg overflow-hidden mb-6">
              <VideoPlayer
                url={displayCurrentVideoFreePreview}
                width="100%"
                height="100%"
              />
            </div>
            <div className="space-y-2">
              {studentViewCourseDetails?.curriculum
                ?.filter((item) => item.freePreview)
                .map((filteredItem) => (
                  <p
                    onClick={() => handleSetFreePreview(filteredItem)}
                    key={filteredItem._id}
                    className="cursor-pointer p-2 rounded-md text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                  >
                    {filteredItem?.title}
                  </p>
                ))}
            </div>
            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button
                  variant="secondary"
                  className="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg font-semibold tracking-wide transition-all duration-200"
                >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default StudentViewCourseDetailsPage;