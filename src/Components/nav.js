import React from 'react'

function nav() {
  return (
    // <div>
    //    <div className=" dark:bg-gray-800 ">
    //     <div className=" max-w-[1280px] mx-auto  ">
    //       <div className="flex flex-wrap sm:flex-row bg-[#262626] pb-4 px-4 gap-10 sm:gap-4 lg:gap-[80px] w-full md:w-fit justify-between text-[#ffffff] ">
    //         <div className="  sm:w-1/4 mt-10  ">
    //           <h1 className="hover:cursor-pointer font-medium text-[18px] mb-2">
    //           BISSMILLAH RENT A CAR
    //           </h1>
    //           <p className="text-[#A3A3A3]">
    //           Faisalabad's Most reliable rental service,Hire the best car at the best price call us now <br/>0300-8667583
    //              </p>
    //         </div>
    //         <div className=" flex flex-col mt-10  ">
    //           <ul className="  space-y-2 ">
    //             <li className="hover:cursor-pointer font-medium text-[18px] mb-2">
    //               HOME
    //             </li>
            
    //             <li className=" text-[#A3A3A3] hover:cursor-pointer">Proin.</li>
    //             <li className=" text-[#A3A3A3] hover:cursor-pointer">
    //               Documents
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="flex flex-col mt-10">
    //           <ul className=" space-y-2 ">
    //             <li className="hover:cursor-pointer font-medium text-[18px] mb-2">
    //               Plan
    //             </li>
    //             <li className=" text-[#A3A3A3] hover:cursor-pointer">
    //               Roadmap
    //             </li>
    //             <li className=" text-[#A3A3A3] hover:cursor-pointer">Blog</li>
    //             <li className=" text-[#A3A3A3] hover:cursor-pointer">Blog</li>
                
    //           </ul>
    //         </div>

    //         <div className=" flex flex-col mt-10  ">
    //           <ul className="  space-y-2 ">
    //             <li className="hover:cursor-pointer font-medium text-[18px] mb-2 ">
    //               {" "}
    //               BOOK NOW
    //             </li>
    //             <li className=" text-[#A3A3A3] hover:cursor-pointer">Proin.</li>
    //             <li className=" text-[#A3A3A3] hover:cursor-pointer">Proin.</li>
    //             <li className=" text-[#A3A3A3] hover:cursor-pointer">Proin.</li>
                
    //           </ul>
    //         </div>
    //         <div className="flex flex-col mt-10 justify-start ">
    //           <button className="hover:cursor-pointer font-medium text-[18px] mb-2">
    //             Follow me
    //           </button>
    //           <div className="flex items-center gap-6 justify-start ">
    //             <svg
    //               width="32"
    //               height="32"
    //               viewBox="0 0 32 32"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <circle cx="16" cy="16" r="16" fill="#404040" />
    //               <path
    //                 fillRule="evenodd"
    //                 clipRule="evenodd"
    //                 d="M23 16.0425C23 12.1769 19.8656 9.04248 16 9.04248C12.1344 9.04248 9 12.1769 9 16.0425C9 19.5362 11.5594 22.4322 14.9062 22.9578V18.0665H13.1284V16.0425H14.9062V14.5003C14.9062 12.7462 15.9516 11.7765 17.5503 11.7765C18.3162 11.7765 19.1175 11.9134 19.1175 11.9134V13.6362H18.2344C17.3653 13.6362 17.0934 14.1756 17.0934 14.73V16.0425H19.0347L18.7247 18.0665H17.0938V22.9584C20.4406 22.4331 23 19.5372 23 16.0425Z"
    //                 fill="#FAFAFA"
    //               />
    //             </svg>

    //             <svg
    //               width="32"
    //               height="32"
    //               viewBox="0 0 32 32"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <circle cx="16" cy="16" r="16" fill="#404040" />
    //               <g clipPath="url(#clip0_215_2243)">
    //                 <path
    //                   d="M23.8947 12.6497C23.8947 11.2434 22.8603 10.1122 21.5822 10.1122C19.851 10.0312 18.0853 10 16.281 10H15.7185C13.9185 10 12.1497 10.0312 10.4185 10.1125C9.14345 10.1125 8.10908 11.25 8.10908 12.6562C8.03095 13.7684 7.99783 14.8809 7.9997 15.9934C7.99658 17.1059 8.03199 18.2195 8.10595 19.3341C8.10595 20.7403 9.14033 21.8809 10.4153 21.8809C12.2341 21.9653 14.0997 22.0028 15.9966 21.9997C17.8966 22.0059 19.757 21.9664 21.5778 21.8809C22.856 21.8809 23.8903 20.7403 23.8903 19.3341C23.9653 18.2184 23.9997 17.1059 23.9966 15.9903C24.0037 14.8778 23.9697 13.7643 23.8947 12.6497ZM14.4685 19.0591V12.9184L18.9997 15.9872L14.4685 19.0591Z"
    //                   fill="#FAFAFA"
    //                 />
    //               </g>
    //               <defs>
    //                 <clipPath id="clip0_215_2243">
    //                   <rect
    //                     width="16"
    //                     height="16"
    //                     fill="white"
    //                     transform="translate(8 8)"
    //                   />
    //                 </clipPath>
    //               </defs>
    //             </svg>

    //             <svg
    //               width="32"
    //               height="32"
    //               viewBox="0 0 32 32"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <circle cx="16" cy="16" r="16" fill="#404040" />
    //               <path
    //                 d="M19.7915 13.0835C19.6184 13.0835 19.4493 13.0322 19.3054 12.936C19.1615 12.8399 19.0493 12.7032 18.9831 12.5433C18.9169 12.3835 18.8996 12.2075 18.9333 12.0378C18.9671 11.8681 19.0504 11.7121 19.1728 11.5898C19.2952 11.4674 19.4511 11.3841 19.6208 11.3503C19.7905 11.3165 19.9665 11.3339 20.1264 11.4001C20.2862 11.4663 20.4229 11.5785 20.519 11.7224C20.6152 11.8663 20.6665 12.0354 20.6665 12.2085C20.6668 12.3235 20.6443 12.4374 20.6004 12.5436C20.5565 12.6499 20.4921 12.7465 20.4108 12.8278C20.3295 12.9091 20.2329 12.9735 20.1266 13.0174C20.0204 13.0613 19.9065 13.0837 19.7915 13.0835Z"
    //                 fill="#FAFAFA"
    //               />
    //               <path
    //                 d="M18.9166 10.1666C19.6895 10.1689 20.43 10.4769 20.9766 11.0234C21.5231 11.57 21.8311 12.3105 21.8334 13.0834V18.9166C21.8311 19.6895 21.5231 20.43 20.9766 20.9766C20.43 21.5231 19.6895 21.8311 18.9166 21.8334H13.0834C12.3105 21.8311 11.57 21.5231 11.0234 20.9766C10.4769 20.43 10.1689 19.6895 10.1666 18.9166V13.0834C10.1689 12.3105 10.4769 11.57 11.0234 11.0234C11.57 10.4769 12.3105 10.1689 13.0834 10.1666H18.9166ZM18.9166 9H13.0834C10.8375 9 9 10.8375 9 13.0834V18.9166C9 21.1625 10.8375 23 13.0834 23H18.9166C21.1625 23 23 21.1625 23 18.9166V13.0834C23 10.8375 21.1625 9 18.9166 9Z"
    //                 fill="#FAFAFA"
    //               />
    //               <path
    //                 d="M16 13.6666C16.4615 13.6666 16.9127 13.8034 17.2964 14.0598C17.6801 14.3162 17.9792 14.6807 18.1558 15.107C18.3324 15.5334 18.3786 16.0026 18.2886 16.4552C18.1986 16.9079 17.9763 17.3237 17.65 17.65C17.3236 17.9763 16.9079 18.1986 16.4552 18.2886C16.0026 18.3786 15.5334 18.3324 15.107 18.1558C14.6807 17.9792 14.3162 17.6801 14.0598 17.2964C13.8034 16.9127 13.6666 16.4615 13.6666 16C13.6672 15.3813 13.9133 14.7882 14.3507 14.3507C14.7882 13.9133 15.3813 13.6672 16 13.6666ZM16 12.5C15.3078 12.5 14.6311 12.7053 14.0555 13.0899C13.4799 13.4744 13.0313 14.0211 12.7664 14.6606C12.5015 15.3001 12.4322 16.0039 12.5673 16.6828C12.7023 17.3618 13.0356 17.9854 13.5251 18.4749C14.0146 18.9644 14.6382 19.2977 15.3172 19.4327C15.9961 19.5678 16.6998 19.4985 17.3394 19.2336C17.9789 18.9687 18.5256 18.5201 18.9101 17.9445C19.2947 17.3689 19.5 16.6922 19.5 16C19.5 15.0717 19.1312 14.1815 18.4749 13.5251C17.8185 12.8687 16.9283 12.5 16 12.5Z"
    //                 fill="#FAFAFA"
    //               />
    //             </svg>

    //             <svg
    //               width="32"
    //               height="32"
    //               viewBox="0 0 32 32"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <circle cx="16" cy="16" r="16" fill="#404040" />
    //               <path
    //                 d="M21.8803 9H10.1962C9.55781 9 9 9.45937 9 10.0903V21.8003C9 22.4347 9.55781 23 10.1962 23H21.8769C22.5187 23 23 22.4309 23 21.8003V10.0903C23.0037 9.45937 22.5188 9 21.8803 9ZM13.3397 20.6697H11.3341V14.4338H13.3397V20.6697ZM12.4062 13.4856H12.3919C11.75 13.4856 11.3344 13.0078 11.3344 12.4097C11.3344 11.8006 11.7609 11.3341 12.4172 11.3341C13.0734 11.3341 13.475 11.7972 13.4894 12.4097C13.4891 13.0078 13.0734 13.4856 12.4062 13.4856ZM20.6697 20.6697H18.6641V17.26C18.6641 16.4431 18.3722 15.885 17.6466 15.885C17.0922 15.885 16.7641 16.26 16.6181 16.6253C16.5634 16.7566 16.5487 16.9353 16.5487 17.1178V20.6697H14.5431V14.4338H16.5487V15.3016C16.8406 14.8859 17.2966 14.2878 18.3575 14.2878C19.6741 14.2878 20.67 15.1556 20.67 17.0266L20.6697 20.6697Z"
    //                 fill="#FAFAFA"
    //               />
    //             </svg>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
<footer class="px-3 py-8 bg-white dark:bg-gray-800 text-2 text-gray-500 dark:text-gray-200 transition-colors duration-200">
    <div class="flex flex-col">
        <div class="md:hidden mt-7 mx-auto w-11 h-px rounded-full">
        </div>
        <div class="mt-4 md:mt-0 flex flex-col md:flex-row">
            <nav class="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
                <a aria-current="page" href="#" class="hover:text-gray-700 dark:hover:text-white">
                    Components
                </a>
                <a aria-current="page" href="#" class="hover:text-gray-700 dark:hover:text-white">
                    Contacts
                </a>
                <a aria-current="page" href="#" class="hover:text-gray-700 dark:hover:text-white">
                    Customization
                </a>
            </nav>
            <div class="md:hidden mt-4 mx-auto w-11 h-px rounded-full">
            </div>
            <div class="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
                <a class="hover:text-primary-gray-20" href="https://github.com/Charlie85270/tail-kit">
                    <span class="sr-only">
                        View on GitHub
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                        </path>
                    </svg>
                </a>
                <a class="ml-4 hover:text-primary-gray-20" href="#">
                    <span class="sr-only">
                        Settings
                    </span>
                    <svg width="30" height="30" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M960 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z">
                        </path>
                    </svg>
                </a>
            </div>
            <div class="md:hidden mt-4 mx-auto w-11 h-px rounded-full ">
            </div>
            <div class="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
                <span class="">
                    © 2021
                </span>
                <span class="mt-7 md:mt-1">
                    Created by
                    <a class="underline hover:text-primary-gray-20" href="https://www.linkedin.com/in/crabiller/">
                        Ibraheem
                    </a>
                </span>
            </div>
        </div>
    </div>
</footer>

  )
}

export default nav
