import "./App.css";
import { HashRouter } from "react-router-dom";
import Header from "./components/nav/Header";
import Links from "./routes/Links";
import Footer from "./components/nav/Footer";

const App = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <Links />
        <Footer />
      </HashRouter>
    </>
  );
};

export default App;
