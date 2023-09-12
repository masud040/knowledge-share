import { useEffect, useState } from "react";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";
import { addTitleLS, getBookmarks, setTitleOnLS } from "./utiliti/BookmarkData";
import { addTime, getReadTime } from "./utiliti/SpendTime";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  useEffect(() => {
    try {
      const dataFetch = async () => {
        const res = await fetch("blog.json");
        const data = await res.json();
        setBlogs(data);
      };
      dataFetch();
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    if (blogs.length) {
      const bookmarksData = getBookmarks();
      const newArr = [];
      blogs.map((blog) => {
        if (bookmarksData.includes(blog.title)) {
          newArr.push(blog);
        }
      });
      setBookmarks(newArr);
    }
    const readTimeLs = getReadTime();
    setReadTime(readTimeLs);
  }, [blogs]);
  const handleBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
    addTitleLS(blog.title);
  };
  const handleReadTime = (id, time, title) => {
    setReadTime(readTime + time);
    const remaining = bookmarks.filter((bookmark) => bookmark.id !== id);
    addTime(time);
    setBookmarks(remaining);
    const bookmarkData = getBookmarks();
    const remains = bookmarkData.filter((bookmark) => bookmark !== title);
    setTitleOnLS(remains);
  };
  return (
    <div className="w-[80%] mx-auto my-7">
      <Header />
      <hr className="border-2 border-gray-400" />
      <div className="grid grid-cols-3 gap-6">
        <Blogs
          blogs={blogs}
          handleBookmark={handleBookmark}
          handleReadTime={handleReadTime}
        />
        <Bookmarks bookmarks={bookmarks} readTime={readTime} />
      </div>
    </div>
  );
}

export default App;
