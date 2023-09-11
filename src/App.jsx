import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Design from "./components/design/Design";
import Community from "./components/community/Community";
import Subscribe from "./components/subscribe/Subscribe";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <About />
        <Design />
        <Community />
        <Subscribe />
        <Download />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
