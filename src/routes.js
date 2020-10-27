
import Rates from "./pages/rates.js";
import Home from "./pages/home.js";
import About from "./pages/about.js";


var indexRoutes = [
  { path: "/rates", name: "Rates", component: Rates },
  { path: "/about", name: "About", component: About },
  { path: "/", name: "Home", component: Home }
];

export default indexRoutes;
