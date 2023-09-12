const getReadTime = () => {
  const readTime = localStorage.getItem("time");
  if (readTime) {
    return JSON.parse(readTime);
  }
  return 0;
};
const setTimeOnLS = (time) => {
  const strTime = JSON.stringify(time);
  localStorage.setItem("time", strTime);
};

const addTime = (time) => {
  const readTime = getReadTime();
  const newTime = readTime + time;
  setTimeOnLS(newTime);
};

export { addTime, getReadTime };
