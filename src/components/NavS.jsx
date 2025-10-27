import React from "react";

const NavS = () => {
    return (
        <>

            <div // main div
             className=""
            >

                <div className='absolute inset-0 bg-cover bg-center 
             bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg"))] 
                '>

                </div>

                <div // overlay
                    className="absolute inset-0 z-0  bg-[linear-gradient(63deg,rgba(0,0,0,0.9)_26%,rgba(0,0,0,0.8965)_30.83%,rgba(0,0,0,0.8861)_35.67%,rgba(0,0,0,0.8688)_40.5%,rgba(0,0,0,0.8444)_45.33%,rgba(0,0,0,0.8132)_50.17%,rgba(0,0,0,0.775)_55%,rgba(0,0,0,0.7368)_59.83%,rgba(0,0,0,0.7056)_64.67%,rgba(0,0,0,0.6812)_69.5%,rgba(0,0,0,0.6639)_74.33%,rgba(0,0,0,0.6535)_79.17%,rgba(0,0,0,0.65)_84%)]"
                ></div>


                <div // container
                    className=" relative px-10 py-6 z-0"
                >
                    <nav className="text-white flex items-center justify-between ">
                        <div className="">
                            <svg
                                viewBox="0 0 111 30"
                                height={"25px"}
                                data-uia="netflix-logo"
                                aria-hidden="true"
                                focusable="false"
                                fill="rgb(229,9,20)"
                            >
                                <g id="netflix-logo">
                                    <path
                                        d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                                        id="Fill-14"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div className="flex mr-4">
                            <select className="mr-3 border border-gray-500 rounded pr-8 p-1">
                                <option className="" value="">English</option>
                                <option value="">Hindi</option>
                            </select>

                            <div className="">
                                <button className="p-1 pr-3 pl-3 rounded">Sign in</button>
                            </div>

                        </div>

                    </nav>

                    <div className="py-30">
                        <div className="flex flex-col justify-center items-center space-y-2 ">
                            
                            <p className="text-4xl font-bold w-95 text-center">Unlimited movies, TV shows and more</p>
                            <b>
                                <p className="text-sm">Starts at ₹149. Cancel at any time.</p>
                            </b>

                            <div className="text-center w-94 mt-6 space-y-2">
                        <p>
                            Ready to watch? Enter your email to create or restart your
                            membership.
                        </p>
                        <div className="w-94 flex">
                            <input className="pr-9 pl-3 mr-3 border border-gray-500 rounded"
                            type="email" name="" id="" placeholder="Email address" />
                            <button className="w-[40%] p-3 text-md font-bold rounded">Get Started</button>
                        </div>
                    </div>
                        </div>
                    </div>

                </div>



                {/* <div className="flex absolute p-50 px-40 z-90 items-center justify-center">

                    <div className="px-5">
                        <h1>Unlimited movies, TV shows and more</h1>
                        <b>
                            <p>Starts at ₹149. Cancel at any time.</p>
                        </b>
                    </div>
                    <div className="getIn">
                        <p>
                            Ready to watch? Enter your email to create or restart your
                            membership.
                        </p>
                        <div>
                            <input type="email" name="" id="" placeholder="Email address" />
                            <button>Get Started</button>
                        </div>
                    </div>

                </div> */}

            </div>
        </>
    );
};

export default NavS;
