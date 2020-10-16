
import Rates from "./pages/rates.js";
import Home from "./pages/home.js";
import About from "./pages/about.js";


var indexRoutes = [
  { path: "/", name: "Home", component: Home },
  { path: "/rates", name: "Rates", component: Rates },
  { path: "/about", name: "About", component: About }
];

export default indexRoutes;
