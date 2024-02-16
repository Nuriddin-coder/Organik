import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { pages } from "./route/main-route";

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
      </Route>
    </Routes>
  );
}

export default App;
