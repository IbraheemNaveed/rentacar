import React from 'react'
import ReactWhatsapp from 'react-whatsapp';
import { render } from 'react-dom';
function login() {
  return (
    <>
         <div className=" bg-[#171717] py-10  min-h-screen  " >
    <div className="h-16 w-full bg-[#6AE6B0] mt-3 blur-[250px] absolute "></div>
    <div className="bg-white  py-10 rounded shadow-md  text-black  container max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center  " >
    <div className=" text-4xl  mt-2 text-center  "> 
      <h1> BOOK YOUR CAR NOW </h1>
      <p className='text-xl  mt-2 font-bold text-gray-500 text-center'> <span className='' >SAVE 15%</span> if you book online your car  </p>
       </div>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 mt-8 ">
        <form className='  ' >
        <select className=" block border border-grey-light w-full p-3 rounded  mb-4" type="select" required   >
          <option >select your CAR type</option>
          <option>Corola GLI</option>
          <option>Honda Civic</option>
          <option>BRV</option>
          <option>WangonR</option>
          <option>Honda City</option>
        </select>
          <input
            type="email"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Enter your Email"
           
            required
          />
          <input
            type=" text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder=" Enter your Location where you want to go and from where describe briefly "
         
            required
          />
          <input
            type="tel" id="phone" name="phone" className=" mb-4 block border border-grey-light w-full p-3 rounded "
       pattern="[0-9]{4}-[0-9]{7}"
       required placeholder="Enter your phone number"
      //  Format: 0300-1234567
          />
          <p> Enter a date and time for your booking </p>
          <input className=" mb-4 block border border-grey-light w-full p-3 rounded " type="datetime-local" id="start" name="start"
          required ></input>
          <div className=" text-center  ">
            <button
              type="submit"
              // replace={true}
              className="border border-green-700  px-6 py-3 bg-green-600 text-white"
            >
              Book Ride Now
            </button>
          </div>
         
          <div>
         
            <button  >  Click here to chat NOW <br/>Hire the best car at the best price call us now <br/> 0300-8667583
            <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" />

             </button>
         
          </div>
        </form>
      </div>

      </div>
      <div className="     w-40  h-36 bg-gradient-to-r from-[#4ADE80]/50 to-[#6EE7B7]  blur-[100px] absolute ">
              {" "}
            </div>
      </div>
    </>
  )
}

export default login