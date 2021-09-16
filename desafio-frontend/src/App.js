import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css'
import Routes from "./components/Routes/routes";


function App () {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
    </BrowserRouter>
    
  );
}

export default App;
