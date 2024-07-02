const Nav = () => {
  const handleScroll = (id: string) => {
    const sec = document.getElementById(id);
    sec?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <nav className="py-4 bg-black text-white px-4 md:px-8 flex items-center justify-between">
      <h1 className="font-extrabold">
        MEZAKI’S <br /> COLLECTION
      </h1>
      <ul className="flex items-center gap-4">
        {links.map((item, i) => (
          <li key={i}>
            <button onClick={() => handleScroll(item.id)}>{item.name}</button>
          </li>
        ))}
      </ul>
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
