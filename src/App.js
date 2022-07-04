//import logo from './logo.svg';
import './App.css';
import Nav from "./Components/NavBar";
import Head from "./Components/Header";
import Slider from './Components/Slider';
import "./Components/Style.css";
import Body from './Components/Body';
import Pricing from './Components/Pricing';
function App() {
  return (
    <div className='w-[100%]'>
    <div   className="  bg-[#171717] sticky-navbar z-10  ">
  <Nav/>
    </div>
    <Head/>
    <Slider/>
   
    <Pricing/>
    <Body/>
    
    </div>
  );
}

export default App;
