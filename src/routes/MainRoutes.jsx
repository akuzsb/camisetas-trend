import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBarComponent } from "../components";
import { ItemDetailContainerPage, ItemListContainer, UploadProduct, Cart} from "../pages";


export const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:id" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainerPage />} />
        <Route exact path="/uploadProduct" element={<UploadProduct />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};
