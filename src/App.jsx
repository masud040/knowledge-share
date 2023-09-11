import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="w-[80%] mx-auto my-7">
      <Header />
      <hr className="border-2 border-gray-400" />
      <Blogs />
    </div>
  );
}

export default App;
