import { useRoutes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
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
