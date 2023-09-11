import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const addBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };
  const handleTime = (time) => {
    console.log(time);
    setReadTime(readTime + time);
  };
  return (
    <div className="w-[80%] mx-auto my-7">
      <Header />
      <hr className="border-2 border-gray-400" />
      <div className="grid grid-cols-3 gap-6 mt-3">
        <Blogs addBookmark={addBookmark} handleTime={handleTime} />
        <Bookmarks bookmarks={bookmarks} readTime={readTime} />
      </div>
    </div>
  );
}

export default App;
