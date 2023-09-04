import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Category from "../pages/Category"
import ItemDetails from "../pages/ItemDetails"
import NavBarComponents from "../components/NavBarComponents/NavBarComponents"

const MainRouter = () => {
  return (
    <BrowserRouter>

      < NavBarComponents />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:itemId" element={<ItemDetails />} />

      </Routes>

    </BrowserRouter>
  )
}

export default MainRouter