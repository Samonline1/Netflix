import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const SearchNav = () => {
    const [input, setInput] = useState('');

    const navigate = useNavigate();
    const { username } = useParams();

      const [LoggedUser, setLoggedUser] = useState()
    

      const UserInfo = useSelector((state) => state.note.users)

  useEffect(() => {
    const Userdetails = UserInfo.find((U) => U?.username?.includes(username))
   
    if (Userdetails) {
       setLoggedUser(Userdetails.name)
    console.log(Userdetails);
    
    }
   
  }, [UserInfo])


    return (
        <div className="flex items-center justify-between w-full mt-[-50px] lg:mt-[-30px] z-10 flex w-full h-20 bg-black/2 ">
            <div onClick={() => navigate(`/Smtv/${username}`)}>
                 <img className="h-10 lg:h-[55px] lg:hidden" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Netflix_2016_N_logo.svg" alt="" srcset="" />
             <svg
              className="h-7 lg:h-[35px] hidden lg:block"
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

                <div className="relative flex justify-center items-center w-[60%] lg:w-[50%] mx-10 gap-2 border border-[0.5px] border-gray-900 rounded-xl backdrop-blur-sm  rounded-xl">
                    <input
                        className=" w-full outline-none focus:ring-0 h-full rounded-xl p-3 text-gray-200"
                        type="text"
                        placeholder="Search Movies, Shows, Anime and Actors"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        className="flex w-14 items-center justify-center p-2 px-3 text-xl"
                        onClick={() => navigate(`/Smtv/${username}/search/${input}`)}
                    >
                        🔍︎
                    </button>
                </div>
        


            <div className="flex items-center justify-center lg:gap-5 w-[20%]">
                <p className="text-xl" onClick={() => navigate(`/Smtv/${username}/favorite`)}>❤</p>
                <div
                    className="flex w-full justify-center ml-2 gap-2 items-center"
                    onClick={() => navigate(`/Smtv/profile/${username}`)}
                >
                    <p className="hidden lg:block">{LoggedUser}</p>
                    <img
                        className="h-8 w-8  rounded-[50%]"
                        src="https://www.tenforums.com/attachments/user-accounts-family-safety/322690d1615743307t-user-account-image-log-user.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchNav;
