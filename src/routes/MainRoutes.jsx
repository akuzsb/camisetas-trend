import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBarComponent } from "../components";
// import { ItemListContainer } from "../components/ListContainer/ItemListContainer";
import { Home,  ItemDetailContainer, ItemListContainer } from "../pages";

export const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:id" element={<ItemListContainer />} />
        
        <Route exact path="/item/:id" element={<ItemDetailContainer />} /> 
      </Routes>
    </Router>
  );
};
