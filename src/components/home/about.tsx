import img from "../../assets/frame5.png";
const About = () => {
  return (
    <div
      id="about"
      className=" bg-black min-h-screen gap-12 text-white grid grid-cols-1 md:grid-cols-2 w-full py-12 px-4 md:px-8"
    >
      <div className="h-full flex items-center justify-center order-last md:order-first">
        <div className="h-[500px] w-fit">
          <img
            src={img}
            alt="frame1"
            loading="lazy"
            className="object-cover object-center h-full w-full hover:rotate-3 hover:scale-95 duration-700 delay-200"
          />
        </div>
      </div>
      <div className="h-full flex flex-col gap-4 justify-center md:items-start items-center md:text-left text-center">
        <h1 className="text-4xl font-extrabold">ABOUT MEZAKI</h1>
        <p className="text-balance max-w-sm text-gray-200">
          Mezaki's Collection is a premier retail store based in Zambia,
          specializing in high-quality apparel, hair products, and accessories.
          Founded in 2020 by Zawadi Mwanza, a highly driven and professional
          banker, Mezaki's Collection emerged from a profound passion for
          delivering quality service and exceptional products to clients from
          diverse backgrounds. Our mission is to provide a one-stop solution for
          all fashion and hair care needs, ensuring every customer leaves our
          store feeling confident and stylish.
        </p>
      </div>
    </div>
  );
};

export default About;
