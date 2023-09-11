import myImage from "../../assets/masud.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center ring-1 ring-pink-500 px-6 py-2 rounded-xl mb-3">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img className="w-14" src={myImage} alt="" />
    </header>
  );
};

export default Header;
