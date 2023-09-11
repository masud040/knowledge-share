import { useEffect, useState } from "react";
import Blog from "../blogThumbnail/Blog";
import PropTypes from "prop-types";

const Blogs = ({ addBookmark, handleTime }) => {
  const [blogs, setBlogs] = useState([]);
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
  return (
    <div className="col-span-3 sm:order-last md:order-first md:col-span-2">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          addBookmark={addBookmark}
          handleTime={handleTime}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  addBookmark: PropTypes.func.isRequired,
  handleTime: PropTypes.func.isRequired,
};

export default Blogs;
