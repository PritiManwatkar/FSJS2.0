import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
     
     <Header/>
      {/*  This element will render either <About/> when the url is "/about",<Contact/> when the url is "/contact" or Home if it is "/" */}
      <Outlet />
      <Footer/>

      
   
    </>
  );
}

export default App;
