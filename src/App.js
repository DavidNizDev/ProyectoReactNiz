import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { createContext } from "react";
import CustomProvider from "./components/CustomProvider";
import MyProvider from "./context/CartContext";

const context = createContext();

const App = () => {
  return (
    <BrowserRouter>
      <MyProvider>
        <Header />
        <Main />
        <Footer />
      </MyProvider>
    </BrowserRouter>
  )
}
export default App;