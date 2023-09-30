import { useRoutes, BrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "../Home";
import Work from "../Work";
import Contact from "../Contact";
import NotFound from "../NotFound";
import Navbar from "../../Components/Navbar";
import { CartContextProvider } from "../../Context";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/work", element: <Work /> },
    { path: "/contact", element: <Contact /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
