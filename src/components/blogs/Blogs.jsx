import Blog from "../blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({ blogs, handleBookmark, handleReadTime }) => {
  return (
    <div className="my-7 col-span-3 md:col-span-2 order-last md:order-first">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBookmark={handleBookmark}
          handleReadTime={handleReadTime}
        />
      ))}
    </div>
  );
};
Blogs.propTypes = {
  blogs: PropTypes.array,
  handleBookmark: PropTypes.func,
  handleReadTime: PropTypes.func,
};

export default Blogs;
