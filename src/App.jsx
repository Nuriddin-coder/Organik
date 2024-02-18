import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { pages } from "./route/main-route";

//// Import Component's:
import { ProductInner } from "./pages/ProductInner";
import { ShopInner } from "./pages/Shop/ShopInner";
import { NotFound } from "./pages/NotFound";
import { OfferInner } from "./pages/OfferInner";

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
        <Route path="/offer/:id" element={<OfferInner />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
