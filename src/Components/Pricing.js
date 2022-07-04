import React from 'react'
import Tick from '../assests/Tick.svg';
const Pricing = () => {
  return (
  
    <div className=' mb-6'>
    <h1 className=" text-[#171717]  text-2xl sm:text-4xl md:text-5xl font-bold text-center align-bottom  backdrop-blur-md mt-28 ">
      Choose Your Plan
    </h1>
    <div className=" relative flex justify-center lg:gap-4 gap-10 xl:gap-8 lg:items-end items-center mt-12 flex-col lg:flex-row  ">
      <div className="max-w-[405px] max-h-[374px] w-full border border-[#404040] rounded-lg bg-planbg px-10 py-10">
        <div className=" flex  justify-between   ">
          <div className="  ">
            <h1 className="   text-2xl text-[#171717]">Basic</h1>
            <p className="text-xs text-[#171717]">Single User</p>
          </div>
          <div>
            <p className="text-[#171717]">
              {" "}
              <a className="  text-3xl text-[#171717]">$54/ </a>month
            </p>
          </div>
        </div>
        <ul className=" text-[#171717] text-sm gap-4 mt-10  ">
          <li className="hover:cursor-pointer flex gap-2 mt-2 ">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
          Any two Sensors 
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
           User friendly Frontend Web and Mobile App
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
          <button className=" px-12 lg:px-24  bg-gradient-to-br from-[#4ADE80]/20 to-[#6EE7B7]/20 text-[#4ADE80]  py-5 border-[1px] border-[#4ADE80]  rounded ">
            Choose{" "}
          </button>
        </div>
      </div>
      <div className=" h22  max-w-[405px] max-h-[476px] relative w-full border border-[#4ADE80] rounded-lg ultimate bg-ultimateplan backdrop-blur-[50px] px-10 py-10">
        <div className="bg-gradient-to-r from-[#4ADE80] to-[#6EE7B7] h-40 sm:w-52  absolute top-10 sm:right-24 sm:top-0 blur-[100px]"></div>
        <div className=" flex  justify-between mt-10 ">
          <div className="  ">
            <h1 className="   text-2xl text-[#171717]">Platinum</h1>
            <p className="text-xs text-[#171717]">Go all in</p>
          </div>
          <div>
            <p className="text-[#171717]">
              {" "}
              <a className="text-3xl text-[#171717]">$99/ </a>month
            </p>
          </div>
        </div>
        <ul className=" text-[#171717] text-sm gap-4 mt-10 ">
          <li className="hover:cursor-pointer flex gap-2 mt-2 ">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
            All Required  Sensors 
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
            User friendly Frontend Web and Mobile App
          </li>
          <li className="hover:cursor-pointer flex gap-2 mt-2">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
           Connectivity With database 
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
          <button className=" px-12 lg:px-24   tracking-[-0.03em] bg-gradient-to-r from-[#15803D] to-[#34D399] hover:from-[#34D399] hover:to-[#15803D] text-[#ffffff] font-bold   py-5 border-[1px] border-[#4ADE80]  rounded ">
            Choose{" "}
          </button>
        </div>
      </div>
      <div className="max-w-[405px] max-h-[374px] w-full border border-[#404040] rounded-lg bg-planbg px-10 py-10">
        <div className=" flex  justify-between  ">
          <div className="  ">
            <h1 className="   text-2xl text-[#171717]">Business</h1>
            <p className="text-xs text-[#171717]">Better Results</p>
          </div>
          <div>
            <p className="text-[#171717]">
              {" "}
              <a className="text-3xl text-[#171717]">$79/ </a>month
            </p>
          </div>
        </div>
        <ul className=" text-[#171717] text-sm gap-4 mt-10   ">
          <li className="hover:cursor-pointer flex gap-2 mt-2 ">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
            Any two Sensors 
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
            User friendly Frontend Web and Mobile App
          </li>
          <li className="hover:cursor-pointer flex gap-2 mt-2">
            {" "}
            <div className=" flex rounded-full bg-[#171717]/10 px-1  ">
              {" "}
              <img src={Tick} />
            </div>{" "}
            Connectivity with data base 
          </li>
        </ul>
        <div className=" mt-10 flex justify-center mb-10   ">
          <button className=" px-12 lg:px-24  bg-gradient-to-br from-[#4ADE80]/20 to-[#6EE7B7]/20 text-[#4ADE80]  py-5 border-[1px] border-[#4ADE80]  rounded ">
            Choose{" "}
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Pricing