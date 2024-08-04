import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import InterviewLibrary from "./InterviewLibrary";

const InterviewLibraryPage = () => {
  return (
    <>
      <Header
        headerText="Interview Library"
        description="Explore from our comphrensive library of interview questions, or
            draft out your own questions."
      />
      <SearchBar placeHolder="Search interviews" />
      <InterviewLibrary />
      <div className="pt-6 pb-8">
        <nav
          className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-[13px] sm:px-6"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">12</span> of{" "}
              <span className="font-medium">93</span> results
            </p>
          </div>
          <div className="flex flex-1 justify-between sm:justify-end">
            <button className="cursor-auto disabled:opacity-50 relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <a href="/questions/page/2">
              <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
export default InterviewLibraryPage;
