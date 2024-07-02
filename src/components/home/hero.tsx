import logo from "../../assets/logoMzaki.png";
import img from "../../assets/frame.png";
import Google from "../../assets/Google";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [animate, setAnimate] = useState<boolean>(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
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
        <motion.h1
          initial={animate ? {} : { opacity: 0 }}
          whileInView={animate ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
          className=" text-4xl font-bold"
        >
          My Plug
          <br />
          by{" "}
          <span className=" font-extrabold text-gray-500">
            MEZAKI’S COLLECTION
          </span>
        </motion.h1>
        <motion.p
          initial={animate ? {} : { opacity: 0 }}
          whileInView={animate ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
          className="text-balance max-w-sm"
        >
          Seamlessly connect with our extensive offerings and expert service
          providers, making it easier than ever to stay stylish and
          well-groomed.
        </motion.p>
        <div>
          <motion.button
            initial={animate ? {} : { opacity: 0, y: "100%", scale: 0 }}
            whileInView={animate ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className=" active:scale-95 duration-100 delay-75"
          >
            <Google />
          </motion.button>
        </div>
      </div>
      <div className="h-full flex items-center justify-center">
        <motion.div
          initial={animate ? {} : { opacity: 0, x: "100%" }}
          whileInView={animate ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
          className="h-[500px] w-fit"
        >
          <img
            src={img}
            alt="frame1"
            loading="lazy"
            className="object-cover object-center h-full w-full hover:rotate-3 hover:scale-95 duration-700 delay-200"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
