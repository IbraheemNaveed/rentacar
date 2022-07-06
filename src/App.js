//import logo from './logo.svg';
import './App.css';
import Nav from "./Components/NavBar";
import Head from "./Components/Header";
import Slider from './Components/Slider';
import "./Components/Style.css";
import Body from './Components/Body';
import Pricing from './Components/Pricing';
import Login from './Components/login';
import FAQ from './Components/faq';
import Navb from './Components/nav';
import Car from './Components/car';
function App() {
  return (
    <div className='w-[100%] bg-gradient-to-r from-[#c8f3d8] to-[#577c6d] backdrop-blur-xl  '>
    <div   className="  bg-[#1d1b1b] sticky-navbar z-10  ">
  <Nav/>
    </div>
    <Head/>
    <Slider/>
   
    <Pricing/>
    <Login/>
    <Body/>
   <div className='hidden sm:visible' >  <Car/> </div>
   <FAQ/>
   <Navb/>
    </div>
  );
}

export default App;
