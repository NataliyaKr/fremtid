import { useRoutes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Future from "./pages/Future";
import Characteristic from "./pages/Characteristic";
import Application from "./pages/Application";
import Perspectives from "./pages/Perspectives";
import Development from "./pages/Development";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/future", element: <Future /> },
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
      </div>
    </>
  );
}

export default App;
