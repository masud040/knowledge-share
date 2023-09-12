const getBookmarks = () => {
  const bookmarksTitle = localStorage.getItem("title");
  if (bookmarksTitle) {
    return JSON.parse(bookmarksTitle);
  }
  return [];
};

const setTitleOnLS = (BookTitle) => {
  const strBookTitle = JSON.stringify(BookTitle);
  localStorage.setItem("title", strBookTitle);
};

const addTitleLS = (title) => {
  const lsTitle = getBookmarks();
  lsTitle.push(title);
  setTitleOnLS(lsTitle);
};

export { addTitleLS, getBookmarks, setTitleOnLS };
