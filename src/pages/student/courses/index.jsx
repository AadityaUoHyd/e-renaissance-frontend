import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { filterOptions, sortOptions } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { StudentContext } from "@/context/student-context";
import {
  checkCoursePurchaseInfoService,
  fetchStudentViewCourseListService,
} from "@/services";
import { ArrowUpDownIcon, ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function createSearchParamsHelper(filterParams) {
  const queryParams = [];

  for (const [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value) && value.length > 0) {
      const paramValue = value.join(",");

      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
    }
  }

  return queryParams.join("&");
}

function StudentViewCoursesPage() {
  const [sort, setSort] = useState("price-lowtohigh");
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const coursesPerPage = 15;
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    studentViewCoursesList,
    setStudentViewCoursesList,
    loadingState,
    setLoadingState,
  } = useContext(StudentContext);
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  function handleFilterOnChange(getSectionId, getCurrentOption) {
    let cpyFilters = { ...filters };
    const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);

    if (indexOfCurrentSection === -1) {
      cpyFilters = {
        ...cpyFilters,
        [getSectionId]: [getCurrentOption.id],
      };
    } else {
      const indexOfCurrentOption = cpyFilters[getSectionId].indexOf(
        getCurrentOption.id
      );

      if (indexOfCurrentOption === -1)
        cpyFilters[getSectionId].push(getCurrentOption.id);
      else cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
    }

    setFilters(cpyFilters);
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
  }

  async function fetchAllStudentViewCourses(filters, sort) {
    const query = new URLSearchParams({
      ...filters,
      sortBy: sort,
    });
    const response = await fetchStudentViewCourseListService(query);
    if (response?.success) {
      setStudentViewCoursesList(response?.data);
      setLoadingState(false);
    }
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

  // Search and Pagination logic
  const filteredCourses = studentViewCoursesList.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalCourses = filteredCourses.length;
  const totalPages = Math.ceil(totalCourses / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  function handlePageChange(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to page 1 on search change
  }

  function handleClearSearch() {
    setSearchQuery("");
    setCurrentPage(1);
  }

  useEffect(() => {
    const buildQueryStringForFilters = createSearchParamsHelper(filters);
    setSearchParams(new URLSearchParams(buildQueryStringForFilters));
  }, [filters]);

  useEffect(() => {
    setSort("price-lowtohigh");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  }, []);

  useEffect(() => {
    if (filters !== null && sort !== null) {
      fetchAllStudentViewCourses(filters, sort);
      setCurrentPage(1); // Reset to page 1 on filter or sort change
    }
  }, [filters, sort]);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem("filters");
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 text-center">
          All Courses
        </h1>
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <form className="relative flex items-center">
            <div className="absolute left-3">
              <Search className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <Input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search courses by title..."
              className="w-full pl-10 pr-10 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 rounded-lg shadow-md focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 transition-all duration-200"
            />
            {searchQuery && (
              <Button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-2 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-1 transition-all duration-200"
              >
                <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Button>
            )}
          </form>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar */}
          <aside className="w-full md:w-64 space-y-4">
            {Object.keys(filterOptions).map((keyItem) => (
              <div
                key={keyItem}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-4"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {keyItem.toUpperCase()}
                </h3>
                <div className="grid gap-2">
                  {filterOptions[keyItem].map((option) => (
                    <Label
                      key={`${keyItem}-${option.id}`}
                      className="flex items-center gap-3 text-base text-gray-700 dark:text-gray-200"
                    >
                      <Checkbox
                        checked={
                          filters &&
                          Object.keys(filters).length > 0 &&
                          filters[keyItem] &&
                          filters[keyItem].indexOf(option.id) > -1
                        }
                        onCheckedChange={() =>
                          handleFilterOnChange(keyItem, option)
                        }
                        className="border-gray-300 dark:border-gray-600"
                      />
                      {option.label}
                    </Label>
                  ))}
                </div>
              </div>
            ))}
          </aside>
          {/* Main Content */}
          <main className="flex-1">
            <div className="flex justify-end items-center mb-6 gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg px-4 py-2"
                  >
                    <ArrowUpDownIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-base font-semibold tracking-wide">
                      Sort By
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg"
                >
                  <DropdownMenuRadioGroup
                    value={sort}
                    onValueChange={(value) => setSort(value)}
                  >
                    {sortOptions.map((sortItem) => (
                      <DropdownMenuRadioItem
                        value={sortItem.id}
                        key={sortItem.id}
                        className="text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer px-4 py-2"
                      >
                        {sortItem.label}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <span className="text-base font-semibold text-gray-900 dark:text-white">
                {filteredCourses.length} Results
              </span>
            </div>
            <div className="space-y-4">
              {currentCourses && currentCourses.length > 0 ? (
                currentCourses.map((courseItem) => (
                  <Card
                    onClick={() => handleCourseNavigate(courseItem?._id)}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    key={courseItem?._id}
                  >
                    <CardContent className="flex gap-4 p-4">
                      <div className="w-48 h-32 flex-shrink-0">
                        <img
                          src={courseItem?.image}
                          alt={courseItem?.title}
                          className="w-full h-full object-fit rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {courseItem?.title}
                        </CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                          Category : {" "}
                          <span className="mb-3 inline-block px-3 py-1 text-sm font-semibold text-yellow-800 dark:text-yellow-400 bg-gray-200 dark:bg-gray-700 rounded-full">
                            {courseItem?.category}
                          </span>
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                          Created By : {" "}
                          <span className="font-semibold">
                            {courseItem?.instructorName}
                          </span>
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-2">
                          {`${courseItem?.curriculum?.length} ${
                            courseItem?.curriculum?.length <= 1
                              ? "Lecture"
                              : "Lectures"
                          } - ${courseItem?.level.toUpperCase()} Level`}
                        </p>
                        <p className="font-bold text-lg text-blue-600 dark:text-blue-400">
                         Price : ${courseItem?.pricing}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : loadingState ? (
                <Skeleton className="w-full h-32 rounded-lg" />
              ) : (
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">
                  No Courses Found
                </h1>
              )}
            </div>
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <Button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg px-4 py-2 shadow-md transition-all duration-200"
                >
                  <ChevronLeft className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  Previous
                </Button>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-lg shadow-md transition-all duration-200 ${
                          currentPage === page
                            ? "bg-blue-600 dark:bg-blue-400 text-white"
                            : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        {page}
                      </Button>
                    )
                  )}
                </div>
                <Button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg px-4 py-2 shadow-md transition-all duration-200"
                >
                  Next
                  <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default StudentViewCoursesPage;