import logo from "../../assets/logoMzaki.png";
import img from "../../assets/frame1.png";

const Hero = () => {
  return (
    <section className="h-full min-h-screen grid md:grid-cols-2 grid-cols-1 px-4 md:px-8">
      <div className="h-full flex flex-col justify-center">
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
          by <span>MEZAKI’S COLLECTION</span>
        </h1>
        <p className="text-balance">
          seamlessly connect with our extensive offerings and expert service
          providers, making it easier than ever to stay stylish and
          well-groomed.
        </p>
      </div>
      <div>
        <img src={img} alt="frame1" loading="lazy" />
      </div>
    </section>
  );
};

export default Hero;
