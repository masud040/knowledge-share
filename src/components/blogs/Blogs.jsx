import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    try {
      const dataFetch = async () => {
        const res = await fetch("blog.json");
        const data = await res.json();
        const blogs = data.blogs;
        setBlogs(blogs);
      };
      dataFetch();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="my-5 grid grid-cols-3 gap-6">
      {blogs.map((blog) => console.log(blog))}
    </div>
  );
};

export default Blogs;
