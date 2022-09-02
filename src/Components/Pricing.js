import React from 'react'
import Tick from '../assests/Tick.svg';
const Pricing = () => {
  return (
  
    <div className=' mb-6'>
    <h1 className=" text-white  text-2xl sm:text-4xl md:text-5xl font-bold text-center align-bottom  backdrop-blur-md mt-28 ">
      Choose Your Plan
    </h1>
    <div className=" relative flex  justify-center lg:gap-4 gap-10 xl:gap-8 lg:items-end items-center mt-12 flex-col lg:flex-row  ">
      <div className="  max-w-[300px] sm:max-w-[400px]  px-8 py-10 max-h-[374px] w-full border border-[#4ADE80] rounded-lg bg-planbg ">
        <div className=" flex   justify-between   ">
          <div className="   ">
            <h1 className="   text-2xl text-white">Basic</h1>
            <p className="text-xs text-white">Single User</p>
          </div>
          <div>
            <p className="text-white">
              {" "}
              <a className="  text-3xl text-white">3000 RS/ </a>DAY
            </p>
          </div>
        </div>
        <ul className=" text-white text-sm gap-4 mt-10  ">
          <li className="hover:cursor-pointer flex gap-2 mt-2 ">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
          Any 1000cc CAR 
          </li>
          <li className="hover:cursor-pointer flex gap-2 mt-2">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
            With in 100km radius
          </li>
          <li className="hover:cursor-pointer flex gap-2 mt-2">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
           AC Cars 
          </li>
          <li className="hover:cursor-pointer flex gap-2 mt-2">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
            Weekly Report
          </li>
        </ul>
        <div className=" mt-10 flex justify-center mb-10   ">
          <button className="text-base sm:text-xl px-6 lg:px-20 py-3 sm:py-4 font-semibold dark:bg-gray-800 text-[#ffffff]   border-[1px] border-[#4ADE80]  rounded ">
            Choose{" "}
          </button>
        </div>
      </div>
      <div className=" h22  max-w-[405px] max-h-[450px] relative w-full border border-[#4ADE80] rounded-lg ultimate bg-ultimateplan backdrop-blur-[50px] px-10 py-10">
        <div className="dark:bg-gray-800 h-40 sm:w-52  absolute top-10 sm:right-24 sm:top-0 blur-[100px]"></div>
        <div className=" flex  justify-between mt-10 ">
          <div className="  ">
            <h1 className="   text-2xl text-white">Platinum</h1>
            <p className="text-xs text-white">Go all in</p>
          </div>
          <div>
            <p className="text-white">
              {" "}
              <a className="text-3xl text-white">10000 RS/ </a>Day
            </p>
          </div>
        </div>
        <ul className=" text-white text-sm gap-4 mt-10 ">
          <li className="hover:cursor-pointer flex gap-2 mt-2 ">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
            Any 1800cc Car
          </li>
          <li className="hover:cursor-pointer flex gap-2 mt-2">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
            Connectivity of Sensors 
          </li>
          <li className="hover:cursor-pointer flex gap-2 mt-2 ">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
            User friendly Frontend
          </li>
          <li className="hover:cursor-pointer flex gap-2 mt-2">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
          radius 500KM 
          </li>
          <li className="hover:cursor-pointer  flex gap-2 mt-2">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
            24/7 free Support 
          </li>
          <li className="hover:cursor-pointer  flex gap-2 mt-2">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
            Daily Report 
          </li>
        </ul>
        <div className=" mt-10 flex justify-center mb-10   ">
          <button className=" text-base sm:text-xl px-6 lg:px-20 py-3 sm:py-4 font-semibold   tracking-[-0.03em] bg-gradient-to-r from-[#15803D] to-[#34D399] hover:from-[#34D399] hover:to-[#15803D] text-[#ffffff]  border-[1px] border-[#4ADE80]  rounded ">
            Choose{" "}
          </button>
        </div>
      </div>
      <div className="max-w-[300px] sm:max-w-[400px] max-h-[374px] px-8 py-10 w-full border border-[#4ADE80] rounded-lg bg-planbg ">
        <div className=" flex  justify-between  ">
          <div className="  ">
            <h1 className="   text-2xl text-white">Business</h1>
            <p className="text-xs text-white">Better Results</p>
          </div>
          <div>
            <p className="text-white">
              {" "}
              <a className="text-3xl text-white">6000 RS/ </a>day
            </p>
          </div>
        </div>
        <ul className=" text-white text-sm gap-4 mt-10   ">
          <li className="hover:cursor-pointer flex gap-2 mt-2 ">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
            Any 1500cc Car 
          </li>
          <li className="hover:cursor-pointer flex gap-2 mt-2">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
            Connectivity of Sensors 
          </li>
          <li className="hover:cursor-pointer flex gap-2 mt-2">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
            300km radius 
          </li>
          <li className="hover:cursor-pointer flex gap-2 mt-2">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
            Upto date Models 
          </li>
        </ul>
        <div className=" mt-10 flex justify-center mb-10   ">
          <button className="text-base sm:text-xl px-6 lg:px-20 py-3 sm:py-4 font-semibold  bg-gradient-to-br from-[#4ADE80]/20 to-[#6EE7B7]/20 text-[#ffffff]  border-[1px] border-[#4ADE80]  rounded ">
            Choose{" "}
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Pricing