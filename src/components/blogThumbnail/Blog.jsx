import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog }) => {
  console.log(blog);
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
    <div>
      <img
        className="w-full"
        src={cover}
        alt={`Image for this title${title}`}
      />
      <div className="flex justify-between">
        <div className="flex justify-start items-center gap-3">
          <img className="w-12" src={author_img} alt={`${author_name} image`} />
          <div>
            <h3 className="font-bold">{author_name}</h3>
            <p>{posted_date && posted_date.slice(0, -6)}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span>0{reading_time} min read</span>
          <button>
            <FaBookmark />
          </button>
        </div>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
