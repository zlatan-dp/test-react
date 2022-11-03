import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Products } from "../Pages/Products";
import { NotFound } from "../Pages/NotFound";
import { ProductDetails } from "../Pages/ProductDetails";
import { Mission } from "../ForAbout/Mission";
import { Reviews } from "../ForAbout/Reviews";
import { Team } from "../ForAbout/Team";
import { SharedLayout } from "../SharedLayout/SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
