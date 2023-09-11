import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div className="col-span-3 md:col-span-1 ">
      <div
        className="mb-3 p-3 rounded-lg
      bg-indigo-100 ring-1 font-bold text-indigo-700"
      >
        <h3>Spent time on read: {readTime} min</h3>
      </div>
      <div className="bg-gray-200 rounded-xl p-3">
        <h1 className="font-bold mb-3">BookMarked Blogs:{bookmarks.length}</h1>
        {bookmarks.map((bookmark) => (
          <Bookmark bookmark={bookmark} key={bookmark.id} />
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
