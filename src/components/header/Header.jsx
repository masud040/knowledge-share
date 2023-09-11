import myImage from "../../assets/masud.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center ring-1 ring-pink-500 px-6 py-2 rounded-xl mb-5">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img className="w-14" src={myImage} alt="" />
    </div>
  );
};

export default Header;
