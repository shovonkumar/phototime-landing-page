import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Design from "./components/design/Design";
import Community from "./components/community/Community";
import Subscribe from "./components/subscribe/Subscribe";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/backToTop/BacktoTop";
import Preloader from "./components/preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    AOS.init({
      duration: 1000,
      mirror: true,
    });
  }, []);
  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
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
            <BackToTop />
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
