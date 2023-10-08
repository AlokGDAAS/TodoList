import logo from "./logo.svg";
import "./App.css";
import { useGlobalContext } from "./components/Context";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";







function App() {

  const {isOpen} = useGlobalContext()


  

  return (
    <div>
      {/* {isOpen && <Modal/>} */}
      <Navbar/>
      <CartContainer/>

      
      
    </div>
  );
}

export default App;
