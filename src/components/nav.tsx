const Nav = () => {
  const handleScroll = (id: string) => {
    const sec = document.getElementById(id);
    sec?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <nav className="py-4 bg-black text-white px-4 md:px-8">
      <h1 className="font-extrabold">
        MEZAKI’S <br /> COLLECTION
      </h1>
      <ul>
        {links.map((item, i) => (
          <li key={i}>
            <button onClick={() => handleScroll(item.id)}></button>
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
