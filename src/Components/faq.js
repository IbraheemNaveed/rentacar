import React from 'react';
import Mapo from "../assests/Wmap.svg";

const faq = () => {
  let test= new RTCPeerConnection()
  console.log(test);
  return (
    <>
     <div className=' dark:bg-gray-800 ' >
       

       
     



     <div className=" max-w-[1280px] mx-auto ">
        <div className="mt-14 px-4 xl:px-8 pb-20 pt-10">
          <h1 className=" mt-20 text-5xl text-center text-[#ffffff] font-bold">
            Frequently Asked Questions
          </h1>
          <div className="flex flex-col sm:flex-row   sm:px-20 px-4 mt-14 gap-10 faaq ">
            <div className="sm:w-1/2  group ">
              <h1 className="text-[#ffffff] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l from-[#4ADE80] to-[#6EE7B7] text-xl sm:text-2xl font-bold  ">
              What is not included in the rates?
              </h1>
              <p className=" text-xs sm:text-sm text-[#A3A3A3] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[#ffffff] ">
              Fuel
• Km in excess of the rate
• Costs arising from the rental (fines, tolls, damage, etc.)
              </p>
            </div>
            <div className="sm:w-1/2  group">
              <h1 className="text-[#ffffff] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l from-[#4ADE80] to-[#6EE7B7] text-xl sm:text-2xl font-bold  ">
                {" "}
                Is there a way I can talk to someone if I get stuck?
              </h1>
              <p className=" text-xs sm:text-sm text-[#A3A3A3] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[#ffffff] ">
               Yes we are available 24/7, We are here to help you and work easy for you.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row   sm:px-20 px-4 mt-8 gap-10 faaq ">
            <div className="sm:w-1/2 w-fit group">
              <h1 className="text-[#ffffff] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l from-[#4ADE80] to-[#6EE7B7] text-xl sm:text-2xl font-bold  ">
How many people can I bring with me? 
              </h1>
              <p className=" text-xs sm:text-sm text-[#A3A3A3] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[#ffffff] ">
              
How many people can I bring with me?   </p>
            </div>
            <div className="sm:w-1/2 w-fit group">
              <h1 className="text-[#ffffff] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l from-[#4ADE80] to-[#6EE7B7] text-xl sm:text-2xl font-bold  ">
                {" "}
                What is a day of rental?     </h1>
              <p className=" text-xs sm:text-sm text-[#A3A3A3] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[#ffffff] ">
              A rental day is considered to be 12 hours from 09:00 AM to 09:00 PM , however, we can give you relaxtion of upto 30 minutes incase you fail to free our vehicle within the specified time peiod.
     </p>
            </div>
          </div>
        </div>
      </div>

     </div>
        <div className=" max-w-[1000px]  rounded-full  py-10 mb-8 mx-8 sm:mx-auto dark:bg-gray-800 ">
        <div
          className=" bg-center h-[500px] sm:h-[705px] flex flex-col px-8 lg:px-0 items-center justify-center bg-no-repeat mb-11  "
           style={{ backgroundImage: `url(${Mapo})` }}
        >
          <h1 className="  text-[#ffffff] text-center text-5xl font-bold">
          CONNECT WITH US
          </h1>

          <p className=" mt-6 px-4 sm:px-24 text-xl text-[#A3A3A3] sm:w-full text-center ">
          Connect us through email to keep yourself updated about innovations, offers and packages we provide. </p>

          <div className=" bg-gradient-to-r p-[3px] from-[#4ADE80] to-[#6EE7B7] mt-10   rounded  ">
            <div className="  w-full    bg-[#6b7280] rounded-sm  flex flex-col  sm:flex-row  justify-between items-center mx-auto  gap-4 sm:mx-auto  sm:w-[600px] h-[28px] sm:h-[56px]">
              <div>
                {" "}
                <input
                  className="bg-[#6B7280] sm:text-[16px] text-xs sm:px-8  text-[#E5E5E5]  leading-4 outline-none  sm:py-4  "
                  type={"email"}
                  placeholder={" Enter your email"}
                />
              </div>
              <div>
                <button className="font-medium sm:rounded-none rounded-md py-4 sm:py-0 md:text-base text-sm leading-4 text-white gap-3 hover:to-[#15803D] hover:from-[#34D399] sm:h-[56px] bg-gradient-to-r px-[29px] from-[#15803D] to-[#34D399] flex items-center justify-center ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
   
    
  )
}

export default faq