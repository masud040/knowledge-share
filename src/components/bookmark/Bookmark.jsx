import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="text-sm font-semibold bg-white rounded-lg p-2 mb-3">
      <h3>{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
