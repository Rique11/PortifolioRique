import { Banner } from "@/components/banner/Banner";
import { Header } from "@/components/header/Header";
import { Nav } from "@/components/nav/Nav";
import { About } from "@/components/about/About";
import { Services } from "@/components/services/Services";
import { Work } from "@/components/work/Work";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

const App = () => (
  <div className="site-shell">
    <Header />
    <main>
      <Banner />
      <About />
      <Services />
      <Work />
      <Contact />
    </main>
    <Footer />
    <Nav />
  </div>
);

export default App;
