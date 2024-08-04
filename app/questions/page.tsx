import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

const QuestionPage = () => {
  return (
    <>
      <Header
        headerText="Question Bank"
        description="Search through all of the questions in the question bank. If you don't see one you're looking for, you can always add it in your section."
      />
      <SearchBar placeHolder="Search questions" />
    </>
  );
};

export default QuestionPage;
