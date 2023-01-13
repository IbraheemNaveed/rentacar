import React from 'react'
import BG1 from "../assests/bg1.jpg";
import Carsvg from "../assests/carsvg.gif";
import BG from '../assests/bg.svg';
function Header() {
  return (
    
//     <div className=' flex bg-gradient-to-tl from-[#1d1b1b] to-[#34D399] '>

// <div className="  w-1/2 sm:mt-12   ">
// {/* <div className="h-16   mt-7 blur-[250px] absolute "></div> */}
// <h1 className=" ml-12 pt-4 text-start text-3xl sm:text-2xl font-bold mt-10  meet1 text-[#FAFAFA]">
// BISSMILLAH
// </h1>
// <h1 className=" ml-12 mt-3 text-start text-3xl sm:text-6xl  font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#1d1b1b] to-[#142c22] ">
// RENT A CAR
// </h1>
// <p className=" w-full ml-12 mt-2 text-[#E5E5E5] text-lg sm:text-2xl text-start  ">
//  Faisalabad's Most reliable rental service 
// </p>
// <p className=" w-full ml-12 mt-3 text-[#ffffff] text-xs sm:text-base text-start  ">
// Hire the best car at the best price call us now 0300-8667583  </p> 
// </div>

//   <div className='w-1/2 mt-24 sm:mt-6'>
//     <img className=" w-auto " src={BG1} >
      
//     </img>
//   </div>
    
//     </div>



<div class="bg-gray-800 overflow-hidden  lg:flex lg:items-center">
    <div class="w-full py-2 px-4 sm:px-4 lg:py-8 lg:px-6 z-20">
        <h2 class="text-3xl font-extrabold  text-white sm:text-4xl">
            <span class="block">
            BISSMILLAH CAR RENTAL IN FAISALABAD
            </span>
        </h2>
        <p class="text-md mt-4 text-gray-400">
        Faisalabad's Most reliable rental service Hire the best car at the best price call us now 0300-8667583
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
                <button type="button" class="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Book Your Car Now
                </button>
            </div>
        </div>
    </div>
    <div class="flex items-center gap-8 p-8 lg:p-24">
        <img src={Carsvg}/>
    </div>
</div>


  )
}

export default Header