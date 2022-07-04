import React from 'react'
import Imagetwo from '../assests/imagetwo.png';

const Body = () => {
  return (
    <div className="max-w-[1280px] mx-auto bg-[#171717] py-3 ">
<div className=' class=" px-4 flex w-full mt-32 justify-between flex-wrap items-center lg:items-start"  '>
  <div className=" flex flex-col px-4 lg:w-1/2  sm:px-10 text-[#ffffff] gap-5 ">
    <h1 className="  text-5xl font-bold">Meet the Author</h1>

    <p className=" text-xl text-[#A3A3A3] sm:w-full ">
    Ibraheem Naveed along with his partner Saman bashir proposed an Internet of Things (IOT) to enhance the experience of personal gardening as a method of therapy for mental-health patients, given a belief in its role in a person’s mood and general positivity. </p>

    <p className=" text-base text-[#A3A3A3]  ">
    They proposed (IoT) prototype continuously senses and monitors the state of an indoor plant through different sensors. The user is notified of the plant’s needs for water, sunlight, etc., through generated notifications from channels over cloud in-real time. Thus, we were able to successfully create a humanized experience of recovery where the user can accessibly ‘talk’ with its plant through a smartphone. IoT sensors are used to detect growth of plants though keeping an eye on your plant and being aware of what your plants needs at the moment to grow.   </p>
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
    <div className=" w-40 -top-10 h-36 bg-gradient-to-r from-[#4ADE80]/50 to-[#6EE7B7] -right-5 blur-[100px] absolute ">
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