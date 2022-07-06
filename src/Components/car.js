import React from 'react'
import Carwr from "../assests/carwh.png";
import Carwl from "../assests/carwl.png";
import Tree from "../assests/trees.png";
import Track from "../assests/track.png";
import Carb from "../assests/car_body.png";

function car() {
  return (
    <div>
<>
<div className=' bg-no-repeat  ' style={{ backgroundImage: `url(${Tree})` }} >

<div className="  max-w-[1000px] h-auto width-[800px] height-[60px]  mx-8 sm:mx-auto " >
<image src={Track}/>
      
       <div
          className="  relative bg-center h-[500px] sm:h-[805px]  px-8 lg:px-0     bg-no-repeat   "
           style={{ backgroundImage: `url(${Carb})` }}
        >
        
          <div className='absolute animate-spin  mx-28 my-96    rounded-2 border-red-600 '>
          <img src={Carwl} />
          </div>
          <div className=' absolute animate-spin my-96 mx-44  right-2 rounded-2 border-red-600' >
          <img src={Carwr} />
          </div>
         
        </div>
      
      </div>
</div>
  

    
     
     
  
  

</>


        
    </div>
  )
}

export default car