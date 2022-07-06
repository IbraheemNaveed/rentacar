import React from 'react'
import BG1 from "../assests/bg1.jpg";
function Header() {
  return (
    
    <div className=' flex bg-gradient-to-tl from-[#1d1b1b] to-[#34D399] '>

<div className="  w-1/2 sm:mt-12   ">
{/* <div className="h-16   mt-7 blur-[250px] absolute "></div> */}
<h1 className=" ml-12 pt-4 text-start text-3xl sm:text-2xl font-bold mt-10  meet1 text-[#FAFAFA]">
BISSMILLAH
</h1>
<h1 className=" ml-12 mt-3 text-start text-3xl sm:text-6xl  font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#1d1b1b] to-[#142c22] ">
RENT A CAR
</h1>
<p className=" w-full ml-12 mt-2 text-[#E5E5E5] text-lg sm:text-2xl text-start  ">
 Faisalabad's Most reliable rental service 
</p>
<p className=" w-full ml-12 mt-3 text-[#ffffff] text-xs sm:text-base text-start  ">
Hire the best car at the best price call us now 0300-8667583  </p> 
</div>

  <div className='w-1/2 mt-24 sm:mt-6'>
    <img className=" w-auto " src={BG1} >
      
    </img>
  </div>
    
    </div>
  )
}

export default Header