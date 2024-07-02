import img from "../../assets/frame5.png";
const About = () => {
  return (
    <div
      id="about"
      className=" bg-black min-h-screen text-white grid grid-cols-1 md:grid-cols-2 w-full"
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
      <div className="">about</div>
    </div>
  );
};

export default About;
