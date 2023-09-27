import { CartProvider } from "./context/CartContext";
import MainLayout from "./layouts/MainLayout";
import MainRouter from "./routes/MainRouter";
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css";


import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <CartProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </CartProvider>
  );
};

export default App;
