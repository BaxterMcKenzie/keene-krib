import "./App.css";
import { HashRouter } from "react-router-dom";
import Header from "./components/nav/Header";
import Links from "./routes/Links";
import Footer from "./components/nav/Footer";
import ScrollToTop from "./components/ScrollToTop";  // adjust path if needed

const App = () => {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Header />
        <Links />
        <Footer />
      </HashRouter>
    </>
  );
};

export default App;
