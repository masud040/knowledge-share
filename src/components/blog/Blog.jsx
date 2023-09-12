import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookmark, handleReadTime }) => {
  const {
    id,
    author_img,
    author_name,
    cover,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;
  return (
    <div>
      <img
        className="w-full rounded-xl"
        src={cover}
        alt={`img for this ${title}`}
      />
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center gap-5">
          <img className="w-14 " src={author_img} alt="author image" />
          <div>
            <h3 className="text-xl font-bold">{author_name}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>0{reading_time} min read</span>
          <button
            onClick={() => handleBookmark(blog)}
            className="text-xl text-pink-500 ms-4"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold my-3">{title}</h1>
      <p>
        {hashtags.map((name, ind) => (
          <span key={ind} className="text-blue-700 underline pr-6">
            <a href="#">#{name}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleReadTime(id, reading_time, title)}
        className="text-indigo-800 underline my-3"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func,
  handleReadTime: PropTypes.func,
};
export default Blog;
