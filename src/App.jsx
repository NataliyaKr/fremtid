import { useRoutes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Characteristic from "./pages/Characteristic";
import Application from "./pages/Application";
import Perspectives from "./pages/Perspectives";
import Footer from "./components/footer/Footer";
import Development from "./pages/development/Development";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/development", element: <Development /> },
    { path: "/characteristic", element: <Characteristic /> },
    { path: "/application", element: <Application /> },
    { path: "/perspectives", element: <Perspectives /> },
  ]);
  return (
    <>
      <div className="app">
        <Navigation />
        <div className="content">{routes}</div>
        <Footer />
      </div>
    </>
  );
}

export default App;
