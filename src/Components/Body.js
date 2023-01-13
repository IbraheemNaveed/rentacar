import React from 'react'
import Imagetwo from '../assests/imagetwo.png';

const Body = () => {
  return (
    <div className="max-w-[1280px] mx-auto bg-gray-800 py-3 mt-6">
<div className=' class=" px-4 flex w-full mt-32 justify-between flex-wrap items-center lg:items-start"  '>
  <div className=" flex flex-col px-4 lg:w-1/2  sm:px-10 text-[#ffffff] gap-5 ">
    <h1 className="  text-5xl font-bold">Meet the Author</h1>

    <p className=" text-xl text-[#A3A3A3] sm:w-full ">
   Naveed Bashir CEO of BISSMILLAH rent car in faisalabad always ready to offer you the smooth and feasible solutions in the form of our well known Rent a Car Pakistan Packages. Not just Rent A Car Pakistan teams are well reckoned in providing reliable services, in fact our teams are acknowledged as one of The Most Reasonable Car Rental Services Providers.
 </p>

    <p className=" text-base text-[#A3A3A3]  ">
    In order to help you save yourself from getting stuck in traffic in all the big cities, at Pakistan Car Rentals, we have been working hard to provide the best Car Hire Pakistan Packages for all customers, and continue to do so. Rent A Car Pakistan have got a wide number of vehicles lining our premises which you can choose from and travel freely to your desired places quick and easy.   </p>
    <div className=" flex   mt-4 ">
      {" "}
      <button className=" flex gap-2 items-center b1  px-8 py-2 sm:px-16 sm:py-4 bg-gradient-to-tr  from-[#4ADE80]/10 to-[#6EE7B7]/10 border-[#4ADE80] border-2 text-[#4ADE80]   ">
        {" "}
        Read more about the author
        {/* <img src={Arrow} />{" "} */}
      </button>
    </div>
  </div>
  <div className=" flex flex-col mt-5 relative ">
    <div className=" w-40 -top-10 h-36 bg-gray-800 -right-5 blur-[100px] absolute ">
      {" "}
    </div>
    <img src={Imagetwo} />
    <p className="text-[#ffffff]">Introduction Video ( 2:49 )</p>
  </div>
</div>
</div>
  )
}

export default Body