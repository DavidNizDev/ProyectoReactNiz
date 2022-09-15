import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import MyProvider from "./context/CartContext";
import "./firebaseApp.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <MyProvider>
        <NavBar />
        <Main />
      </MyProvider>
    </BrowserRouter>
  )
}
export default App;