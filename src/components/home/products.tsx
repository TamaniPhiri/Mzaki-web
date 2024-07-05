import woman from "../../assets/woman.jpg";
import nails from "../../assets/nails.jpg";
import female from "../../assets/female-4899174_1280.jpg";

const Products = () => {
  return (
    <section
      id="products"
      className="min-h-screen px-4 md:px-8 w-full bg-gray-100 py-4 md:py-8 items-center flex flex-col justify-center"
    >
      <h1 className="text-center text-5xl font-extrabold text-gray-800 mb-8">
        Our Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="category rounded-lg shadow-md overflow-hidden shadow-slate-950">
          <img src={woman} alt={woman} className="w-full h-64 object-cover" />
          <div className="px-4 py-2 bg-white">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Clothes (Apparel)
            </h3>
            <p className="text-gray-600">
              Dresses, Suits, Blouses, Casual Wear
            </p>
            <a
              href="#clothes"
              className="text-indigo-500 hover:text-indigo-700 underline"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="category rounded-lg shadow-md overflow-hidden shadow-slate-950">
          <img src={nails} alt={nails} className="w-full h-64 object-cover" />
          <div className="px-4 py-2 bg-white">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Accessories (Consumables)
            </h3>
            <p className="text-gray-600">
              Hair Extensions, Wigs, Styling Gels, Serums
            </p>
            <a
              href="#accessories"
              className="text-indigo-500 hover:text-indigo-700 underline"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="category rounded-lg shadow-md overflow-hidden shadow-slate-950">
          <img src={female} alt={female} className="w-full h-64 object-cover" />
          <div className="px-4 py-2 bg-white">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Services (Hair & Beauty)
            </h3>
            <p className="text-gray-600">
              Hair Styling, Protective Styling, Hair Treatments
            </p>
            <a
              href="#services"
              className="text-indigo-500 hover:text-indigo-700 underline"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
