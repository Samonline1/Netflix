import React from 'react'

const Footer = () => {
  return (
         <div className='relative flex flex-col lg:px-30 sm:px-15 py-10 w-full h-full mt-5 text-gray-400 p-5 '>
                <p className='font-bold mb-3'>Questions? Call 000-800-919-1743</p>

                <ul className=" font-bold sm:mt-5 lg:mt-10 grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  sm:gap-2 lg:gap-3 ">
                    <li>FAQ</li>
                    <li>Help Centre</li>
                    <li>Account</li>
                    <li>Media Centre</li>
                    <li>Investor Relations</li>
                    <li>Jobs</li>
                    <li>Ways to Watch</li>
                    <li>Terms of Use</li>
                    <li>Privacy</li>
                    <li>Cookie Preferences</li>
                    <li>Corporate Information</li>
                    <li>Contact Us</li>
                    <li>Speed Test</li>
                    <li>Legal Notices</li>
                    <li>Only on Netflix</li>
                </ul>

                <div className="flex border border-gray-500 rounded mt-10 mb-5 py-1 items-center justify-center font-bold gap-1 w-[25%] text-white">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Languages"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <select className="">
                        <option className="bg-black text-white border-none" value="">
                            {" "}
                            English
                        </option>
                        <option className="bg-black text-white border-none" value="">
                            Hindi
                        </option>
                    </select>
                </div>

                <p className="text-gray-400 py-5">Netflix India</p>

                <p className="text-gray-600 text-sm ">
                    {" "}
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    Learn more.
                </p>
            </div>
  )
}

export default Footer




/// component name should be start with capital letter