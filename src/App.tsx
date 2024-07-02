import "./App.css";
import Layout from "./components/layout";
import Hero from "./components/home/hero";
import About from "./components/home/about";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}

export default App;
