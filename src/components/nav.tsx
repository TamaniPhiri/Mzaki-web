const Nav = () => {
  return (
    <nav className="py-4 bg-black text-white px-4 md:px-8">
      <h1 className="font-extrabold">
        MEZAKI’S <br /> COLLECTION
      </h1>
      <div></div>
    </nav>
  );
};

export default Nav;

const links = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "About",
    id: "about",
  },
];
