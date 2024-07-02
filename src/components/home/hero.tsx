import logo from "../../assets/logoMzaki.png";
import img from "../../assets/frame.png";

const Hero = () => {
  return (
    <section className="h-full min-h-screen grid md:grid-cols-2 grid-cols-1 px-4 md:px-8">
      <div className="h-full flex flex-col justify-center md:items-start items-center md:text-left text-center">
        <div className="h-16 w-36">
          <img
            src={logo}
            alt="logo"
            loading="lazy"
            className=" object-cover object-center h-full w-full"
          />
        </div>
        <h1 className=" text-4xl font-bold">
          My Plug
          <br />
          by{" "}
          <span className=" font-extrabold text-gray-500">
            MEZAKI’S COLLECTION
          </span>
        </h1>
        <p className="text-balance">
          seamlessly connect with our extensive offerings and expert service
          providers, making it easier than ever to stay stylish and
          well-groomed.
        </p>
      </div>
      <div className="h-full flex items-center justify-center">
        <div className="h-[500px] w-fit">
          <img
            src={img}
            alt="frame1"
            loading="lazy"
            className="object-cover object-center h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
