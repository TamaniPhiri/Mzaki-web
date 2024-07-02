import logo from "../../assets/logoMzaki.png";
import img from "../../assets/frame.png";
import Google from "../../assets/Google";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-full min-h-screen gap-12 grid md:grid-cols-2 grid-cols-1 px-4 md:px-8 py-12"
    >
      <div className="h-full flex flex-col gap-4 justify-center md:items-start items-center md:text-left text-center">
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
        <p className="text-balance max-w-sm">
          Seamlessly connect with our extensive offerings and expert service
          providers, making it easier than ever to stay stylish and
          well-groomed.
        </p>
        <div>
          <button className=" active:scale-95 duration-100 delay-75">
            <Google />
          </button>
        </div>
      </div>
      <div className="h-full flex items-center justify-center">
        <div className="h-[500px] w-fit">
          <img
            src={img}
            alt="frame1"
            loading="lazy"
            className="object-cover object-center h-full w-full hover:rotate-3 hover:scale-95 duration-700 delay-200"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
