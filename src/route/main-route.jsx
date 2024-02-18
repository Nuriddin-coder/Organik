import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Shop } from "../pages/Shop";
import { News } from "../pages/News";

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
  {
    id: 4,
    components: <News />,
    path: "/news",
  },
];
