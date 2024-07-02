import "./App.css";
import Layout from "./components/layout";
import Hero from "./components/home/hero";
import About from "./components/home/about";
import Products from "./components/home/products";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Products />
    </Layout>
  );
}

export default App;
