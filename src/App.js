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
import {useState,useEffect} from 'react'
import axios from 'axios';

function App() {
  const [ip, setIP] = useState('');
  const getData = async () => {
    const res = await axios.get('https://api.db-ip.com/v2/free/self')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])
  return (
    <div className='w-[100%] bg-gradient-to-r bg-gray-800 backdrop-blur-xl  '>
    <div   className="     ">
  <Nav/>
    </div>
    <Head/>
    <Slider/>
   
    <Pricing/>
    <Login/>
    <Body/>
   <div className='hidden sm:visible ' >  <Car/> </div>
   <FAQ/>
   <Navb/>
   <h2>Your IP Address is</h2>
      <h4>{ip}</h4>
    </div>
  );
}

export default App;
