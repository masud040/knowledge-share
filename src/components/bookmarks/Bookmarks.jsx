import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div className="col-span-3 md:col-span-1 sm:mt-5">
      <div className="bg-indigo-100 p-3 rounded-xl mb-4 text-xl font-bold text-indigo-600 ring-1 ring-indigo-600">
        <h3>Spent time on read: {readTime} min</h3>
      </div>
      <div className="bg-gray-200 px-3 py-4 rounded-xl">
        <h1 className="text-2xl font-bold">
          Bookmarked Blogs: {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, ind) => (
          <Bookmark key={ind} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readTime: PropTypes.number,
};

export default Bookmarks;
