import { useEffect, useState } from "react";
import Thumbnail from "../blogThumbnail/Blog";

const Blogs = () => {
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
    <div className="col-span-3 md:col-span-2">
      {blogs.map((blog) => (
        <Thumbnail key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
