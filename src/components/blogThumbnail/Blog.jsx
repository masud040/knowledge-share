import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, addBookmark, handleTime }) => {
  const {
    cover,
    author_img,
    author_name,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;
  return (
    <div className="mb-8">
      <img
        className="w-full rounded-xl"
        src={cover}
        alt={`Image for this title${title}`}
      />
      <div className="flex justify-between my-3">
        <div className="flex justify-start items-center gap-3">
          <img className="w-12" src={author_img} alt={`${author_name} image`} />
          <div>
            <h3 className="font-bold text-xl">{author_name}</h3>
            <p>
              <span>{posted_date && posted_date.slice(0, -6)}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span>0{reading_time} min read</span>
          <button
            onClick={() => addBookmark(blog)}
            className="text-xl text-red-500"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <p>
        {hashtags.map((tag, ind) => (
          <span key={ind} className="underline mr-6 text-purple-700">
            <a href="#">#{tag}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleTime(reading_time)}
        className="text-indigo-600 underline mt-3"
      >
        Mark as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  addBookmark: PropTypes.func.isRequired,
  handleTime: PropTypes.func.isRequired,
};
export default Blog;
