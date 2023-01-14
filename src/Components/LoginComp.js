import React,  {useRef } from 'react';
import {useState} from 'react';
import emailjs from 'emailjs-com';
import P1 from '../assests/p1.jpg';
import P2 from '../assests/p2.jpg';
import P3 from '../assests/p3.jpg';
import P4 from '../assests/p4.jpg';
export const LoginComp = () => {
    const form = useRef();
    const [first, setFirst] = useState('');
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_b1qqjtk', 'template_smuukgr', form.current, 'lrdsevidEV4_NBI3r')
        .then((result) => {
            console.log(result.text);
            window.location.reload();
            alert(' Submited the Form.....');
            
  
        }, (error) => {
            console.log(error.text);
            alert(' ERROR Submited the form Correctly');
        });
    };
  return (
    <>
         <div className=" dark:bg-gray-800 py-10  min-h-screen  " >
    <div className="h-16 w-full bg-[#6AE6B0] mt-3 blur-[250px] absolute "></div>
    <div className="bg-white  py-10 rounded shadow-md  text-black  container max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center  " >
    <div className=" text-4xl  mt-2 text-center  "> 
      <h1> BOOK YOUR CAR NOW </h1>
      <p className='text-xl  mt-2 font-bold text-gray-500 text-center'> <span className='' >SAVE 15%</span> if you book online your car  </p>
       </div>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 mt-8 ">
        <form ref={form}  onSubmit={sendEmail} className='  ' >
        <select id="floating_car" name='floating_car' className=" block border border-grey-light w-full p-3 rounded  mb-4" type="select" required   >
          <option >select your CAR type</option>
          <option>Corola GLI</option>
          <option>Honda Civic</option>
          <option>BRV</option>
          <option>WangonR</option>
          <option>Honda City</option>
        </select>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Enter your name"
           id='username'
           name='username'
            required
          />
          <input
            type=" text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder=" Enter Location where you want to go and from where describe briefly "
            id="location" name='location'
            required
          />
          <input
            type="tel" id="phonenumber" name='phonenumber' className=" mb-4 block border border-grey-light w-full p-3 rounded "
       pattern="[0-9]{4}-[0-9]{7}"
       required placeholder="phone number as 0300-8667583 "
      //  Format: 0300-1234567
          />
          <p> Enter a date and time for your booking </p>
          <input className=" mb-4 block border border-grey-light w-full p-3 rounded " type="datetime-local" id="start" name="start"
          required ></input>
          <div className=" text-center  ">
            <button
             type="submit" value="Send"
              // replace={true}
              className="border border-green-700  px-6 py-3 bg-green-600 text-white"
            >
              Book Ride Now
            </button>
          </div>
         
          <div>
         
            <button  >  Click here to chat NOW <br/>Hire the best car at the best price call us now <br/> 0300-8667583
           

             </button>
         
          </div>
        </form>
      </div>

      </div>
      <div className="     w-40  h-36 bg-gradient-to-r from-[#4ADE80]/50 to-[#6EE7B7]  blur-[100px] absolute ">
              {" "}
            </div>
      </div>
      
<div class="max-w-screen-xl p-4  mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
    <div class="relative">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="lg:col-start-2 lg:max-w-2xl ml-auto">
                <p class="text-base leading-6 text-indigo-500 font-semibold uppercase">
                    Interactive
                </p>
                <h4 class="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                    Interactivity between team members is the key of the success.
                </h4>
                <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                    Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient.
                </p>
                <ul class="mt-8 md:grid md:grid-cols-2 gap-6">
                    <li class="mt-6 lg:mt-0">
                        <div class="flex">
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                Live modifications
                            </span>
                        </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                        <div class="flex">
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                Data tracker
                            </span>
                        </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                        <div class="flex">
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                24/24 support
                            </span>
                        </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                        <div class="flex">
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                Free tips to improve work time
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                <div class="relative space-y-4">
                    <div class="flex items-end justify-center lg:justify-start space-x-4">
                        <img class="rounded-lg shadow-lg w-32 md:w-56" width="200" src={P4} alt="1"/>
                        <img class="rounded-lg shadow-lg w-40 md:w-64" width="260" src={P2} alt="2"/>
                    </div>
                    <div class="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                        <img class="rounded-lg shadow-lg w-24 md:w-40" width="170" src={P3} alt="3"/>
                        <img class="rounded-lg shadow-lg w-32 md:w-56" width="200" src={P1} alt="4"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default LoginComp