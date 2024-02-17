import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { pages } from "./route/main-route";

//// Import Component's:
import { ProductInner } from "./pages/ProductInner";
import { ShopInner } from "./pages/Shop/ShopInner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {pages.map((route) => (
          <Route
            index={route.path ? false : true}
            path={route.path}
            key={route.id}
            element={route.components}
          />
        ))}

        <Route path="/product/:id" element={<ProductInner />} />
        <Route path="/shop/:id" element={<ShopInner />} />
      </Route>
    </Routes>
  );
}

export default App;
