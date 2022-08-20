import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { createContext } from "react";
import CustomProvider from "./components/CustomProvider";

const context = createContext();

const App = () => {
  return (
    <BrowserRouter>
      <CustomProvider>
        <Header />
        <Main />
        <Footer />
      </CustomProvider>
    </BrowserRouter>
  )
}
export default App;