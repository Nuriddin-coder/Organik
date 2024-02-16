import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Shop } from "../pages/Shop";

export const pages = [
  {
    id: 1,
    components: <Home />,
  },
  {
    id: 2,
    components: <About />,
    path: "/about",
  },
  {
    id: 3,
    components: <Shop />,
    path: "/shop",
  },
];
