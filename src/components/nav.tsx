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
      <ul className="md:flex hidden items-center gap-4">
        {links.map((item, i) => (
          <li key={i}>
            <button onClick={() => handleScroll(item.id)}>{item.name}</button>
          </li>
        ))}
      </ul>
      <div className="md:hidden flex">
        <button>
          <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
            <path
              fill="currentColor"
              d="M22 18.005c0 .55-.446.995-.995.995h-8.01a.995.995 0 010-1.99h8.01c.55 0 .995.445.995.995zM22 12c0 .55-.446.995-.995.995H2.995a.995.995 0 110-1.99h18.01c.55 0 .995.446.995.995zM21.005 6.99a.995.995 0 000-1.99H8.995a.995.995 0 100 1.99h12.01z"
            />
          </svg>
        </button>
      </div>
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
  {
    name: "Products",
    id: "products",
  },
];
