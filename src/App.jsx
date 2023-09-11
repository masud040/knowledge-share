import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmark from "./components/bookmark/Bookmark";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="w-[80%] mx-auto my-7">
      <Header />
      <hr className="border-2 border-gray-400" />
      <div className="grid grid-cols-3 gap-6 mt-3">
        <Blogs />
        <Bookmark />
      </div>
    </div>
  );
}

export default App;
