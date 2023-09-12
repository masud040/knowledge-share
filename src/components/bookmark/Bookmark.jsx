import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="text-xl font-bold bg-white p-3 rounded-xl mt-4">
      <h3>{title}</h3>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
