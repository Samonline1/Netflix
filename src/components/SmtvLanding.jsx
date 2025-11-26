import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
useNavigate;

const SmtvLanding = () => {
    const navigate = useNavigate();

    const trending = [
        {
            id: "1",
            url: "https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYgqP-FM9E4u1IbMtOKfqd2ha2nti95bI-jg9xOXxJAcO6Xj9hwy02O4dFu0-oZ_jSi-NQFHPZQwn1NO7eA5LVqqGZIfy9YPjg1G6GzZPMRODawEZXb_7Ks9Ryjl-xUANYCs.webp",
        },

        {
            id: "2",
            url: "https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVCzd41nKAatdvwy0DT1M5D-xSzSdBdKklegmczhdyKYvEEwunaUUcE5xr7Zjkn9Ywhm3n-2g0wi5s1nB3J1bAhe8t3j0ENBjxw.webp",
        },
        {
            id: 3,
            url: "https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABemK-aHwX63DztqbWwQ0xnYGvHYuoYkQ3l3ZIwftPjmuJxC461m-FOI7ZN_bzolsgGd_3_dbacKgr5mV292UjjEYJGCgIubIQOs.webp",
        },
        {
            id: 4,
            url: "https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWrTjWMrsToh9vAoz8rKrhSSHdJW6bmhL8Lvv63zCy1lo3O1TFqvZH4U80xS1vDJJV00sc97Ntd2b1Y1vh3v4SIs60pAtWC6pottJ80j5h4ITJPEURiTJEH4O_a47L1S0qlG.webp",
        },
        {
            id: 5,
            url: "https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQ92L2F2T0-_drBiMvFd5ubUJJzFd1VblHU8arwwdP29G0rSYR0NPv3pdsoDXqM9lBw8arhw3K0QtbHHwCtw1vDoSJcka188PHTsyHMmYiHmKZ7SrB08eQjSZINMf9sU-pxV.webp",
        },
        {
            id: 6,
            url: "https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWUsrobyjfthn3cn_9LIwE_08qG_rgI5BTJaI7ecvgxEMp1e2Zu7hPQ9HGeNgVVWrgu2Wj-vfUphdz8RniXmEvla02KBce2uV_kB0vtctN0CX4QBQDr4oQpGGQd59uuKk87Z.webp",
        },
        {
            id: 7,
            url: "https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaqDA8rJUXA3kFcLkTWBWgM1mQAkEAwSd38xY18mxpvh05YcxHrbolvoumH9uTo9mM0ZQTur2LF0gfVb4vSFSCRw7yTTwDgVMhGcYpXl-k0odHSACKnkMgFXW1Yw1eDaoqzY.webp",
        },
        {
            id: 8,
            url: "https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZxdHsYg10iHLQm7e8pxLnbn1eGa3nJwHH_AVi2qgNL6hYH9xMi2ESvKx-zy40e9woWRPcPuwFNR6iD2bMQC7TbcfsDWVccDtMk.webp",
        },
        {
            id: 9,
            url: "https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABbKjhiyoLvd9eVvrJJz3gL_8FeRpmDRo6dB5XZsgm2gAsi31g5RxXiTMnIH2xWNkvUmaO132F6sHVB_Nj6NHNSeyfKZ9vTo6dtiQyYyB0QBWr35OwyaYOnEwytjzLIYKelT9.webp",
        },
        {
            id: 10,
            url: "https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWEZL5Vbt_dlyyWb0jDVlEI20Y6UCH1mePgmg4Pyf7sbXl1oC-bFjLBv3laUDGDGSS-SqrfidxWVL0gDpdiY1K_x3yx6IDtACOY.webp",
        },
    ];

    const FAQS = [
        {
            Question: "What is Netflix?",
            Answer:
                "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
        },
        {
            Question: "How much does Netflix cost?",
            Answer:
                "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
        },
        {
            Question: "Where can I watch?",
            Answer:
                "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
        },
        {
            Question: "How do I cancel?",
            Answer:
                "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        },
        {
            Question: "What can I watch on Netflix?",
            Answer:
                "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        },
        {
            Question: "Is Netflix good for kids?",
            Answer:
                "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
        },
    ];

    const [show, setShow] = useState(null);

    const showAnswer = (index) => {
        setShow(show === index ? null : index);
    };
    return (
        <>
            <div className="w-full h-full ">
                <div
                    className='relative w-screen h-[100vh] inset-0 bg-cover bg-center w-full
             bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg"))] 
                '
                >
                    <div // overlay
                        className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_26%,rgba(0,0,0,0.8965)_30.83%,rgba(0,0,0,0.8861)_35.67%,rgba(0,0,0,0.8688)_40.5%,rgba(0,0,0,0.8444)_45.33%,rgba(0,0,0,0.8132)_50.17%,rgba(0,0,0,0.775)_55%,rgba(0,0,0,0.7368)_59.83%,rgba(0,0,0,0.7056)_64.67%,rgba(0,0,0,0.6812)_69.5%,rgba(0,0,0,0.6639)_74.33%,rgba(0,0,0,0.6535)_79.17%,rgba(0,0,0,0.65)_84%)]"
                    >
                        <div className=" lg:px-30 sm:px-10 sm:py-6 z-10 md:py-6 p-5">
                            <div className="relative z-0">
                                <div className="text-white flex items-center justify-between ">
                                    <svg
                                        className="lg:h-[40px]"
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

                                    <div className="flex lg:mr-4">
                                        <div className="flex border border-gray-500 rounded mr-3 px-4 p-1 justify-center items-center font-bold gap-1">
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
                                            <select className="w-1 lg:w-full">
                                                <option
                                                    className="bg-black text-white border-none"
                                                    value=""
                                                >
                                                    {" "}
                                                    English
                                                </option>
                                                <option
                                                    className="bg-black text-white border-none"
                                                    value=""
                                                >
                                                    Hindi
                                                </option>
                                            </select>
                                        </div>

                                        <div className="">
                                            <button
                                                onClick={() => navigate("/Smtv/auth?action=login")}
                                                className="p-1 pr-3 pl-3 rounded bg-red-600"
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex py-30 justify-center">
                                    <div className="flex flex-col justify-center items-center space-y-2 lg:w-[588px] sm:w-[500px] ">
                                        <p className="text-4xl lg:text-[56px] lg:font-weight-[900] font-bold text-center">
                                            Unlimited movies, TV shows and more
                                        </p>
                                        <b>
                                            <p className="text-sm lg:text-[20px]">
                                                Starts at ₹149. Cancel at any time.
                                            </p>
                                        </b>

                                        <div className="text-center mt-6 space-y-3">
                                            <p className="text-sm sm:text-base lg:text-lg">
                                                Ready to watch? Enter your email to create or restart
                                                your membership.
                                            </p>
                                            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 w-full px-4 sm:px-0">
                                                <input
                                                    className="w-full sm:flex-1 sm:max-w-xs lg:max-w-md px-3 py-3 sm:py-4 rounded text-white text-sm sm:text-base placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                                    type="email"
                                                    name=""
                                                    id=""
                                                    placeholder="Email address"
                                                />
                                                <button
                                                    onClick={() => navigate("/Smtv/auth?action=signup")}
                                                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm sm:text-base lg:text-lg rounded transition-colors duration-200 flex items-center justify-center gap-2"
                                                >
                                                    Get Started <span className="text-lg">➤</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-[-5px] h-15 rounded-t-[160%] bg-black mb-[-50px ]">
                        <div className=" h-15 w-screen bg-gradient-to-b from-blue-900 to-transparent opacity-70 border-t-5 border-red-700 rounded-t-[150%] "></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:px-10 px-2 py-10 w-[98%] h-[100%] items-center">
                <p className="w-[90%] pb-5 text-left font-bold text-2xl">
                    Trending Now
                </p>
                <div className="flex lg:w-[90%] w-[96%] h-50 lg:h-[300px] p-3 gap-7 overflow-x-auto scrollbar-hide">
                    {trending.map((trend, id) => (
                        <div key={id} className="relative flex flex-shrink-0 ">
                            <img className="rounded-xl  object-cover " src={trend.url} />

                            <p className=" flex absolute left-[-22px] bottom-[2px] text-[60px] lg:text-[100px] font-bold text-white opacity-90 drop-shadow-[0_0_5px_rgba(0,0,0,0.8)]">
                                {trend.id}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative sm:px-12 px-5 lg:px-30 py-5 w-[98%] h-screen sm:h-auto">
                <p className="lg:w-[90%] sm:w-[100%] pb-5 text-left font-bold text-2xl">
                    More reasons to join
                </p>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 h-[315px] sm:h-auto ">
                    <div className="lg:w-[250px] sm:w-full h-full 
                    rounded-xl p-4 sm:pb-20 bg-gradient-to-r from-blue-900/40 to-purple-900/30 backdrop-blur-xl hover:from-blue-900/70 hover:to-purple-900/60 transition-colors duration-300">
                        <p className="pb-5 text-left font-bold text-2xl">
                            Enjoy on your TV
                        </p>
                        <p className="text-gray-400 font-bold">
                            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                            Blu-ray players and more.
                        </p>
                    </div>
                    <div className="lg:w-[250px] sm:w-full h-full flex-shrink-0 rounded-xl p-4 sm:pb-20 bg-gradient-to-r from-blue-900/40 to-purple-900/30 backdrop-blur-xl hover:from-blue-900/70 hover:to-purple-900/60 transition-colors duration-300">
                        <p className="pb-5 text-left font-bold text-2xl">
                            Download your shows to watch offline
                        </p>
                        <p className="text-gray-400 font-bold">
                            Save your favourites easily and always have something to watch.
                        </p>
                    </div>
                    <div className="lg:w-[250px] sm:w-full h-full flex-shrink-0 rounded-xl p-4 sm:pb-20 bg-gradient-to-r from-blue-900/40 to-purple-900/30 backdrop-blur-xl hover:from-blue-900/70 hover:to-purple-900/60 transition-colors duration-300">
                        <p className="pb-5 text-left font-bold text-2xl">
                            Watch everywhere
                        </p>
                        <p className="text-gray-400 font-bold">
                            Stream unlimited movies and TV shows on your phone, tablet, laptop
                            and TV.
                        </p>
                    </div>
                    <div className="lg:w-[250px] sm:w-full h-full flex-shrink-0 rounded-xl p-4 sm:pb-20 bg-gradient-to-r from-blue-900/40 to-purple-900/30 backdrop-blur-xl hover:from-blue-900/70 hover:to-purple-900/60 transition-colors duration-300">
                        <p className="pb-5 text-left font-bold text-2xl">
                            Create profiles for kids
                        </p>
                        <p className="text-gray-400 font-bold">
                            Send kids on adventures with their favourite characters in a space
                            made just for them — free with your membership.
                        </p>
                    </div>
                </div>
            </div>

            <div className=" px-5 lg:px-30 w-[98%] h-full">
                <p className="w-[90%] pb-5 text-left font-bold text-2xl">
                    Frequently Asked Questions
                </p>
                {FAQS.map((faq, index) => (
                    <div key={index} className="w-full h-full py-2 gap-2 select-none">
                        <div
                            className="flex h-[84px] bg-gray-800 justify-between items-center p-5  text-xl cursor-pointer"
                            onClick={() => showAnswer(index)}
                        >
                            <p className="font-bold">{faq.Question}</p>
                            <p>{show === index ? "✖" : "✚"}</p>
                        </div>
                        {show === index && (
                            <p className="bg-gray-800 p-5 text-xl">{faq.Answer}</p>
                        )}
                    </div>
                ))}
            </div>

            <div className="relative flex flex-col justify-center items-center px-5 sm:px-6 lg:px-20 py-10 w-full font-bold">
                <p className="text-center text-sm sm:text-base lg:text-lg mb-6">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>

                <div className="relative flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 w-full max-w-2xl">
                    <input
                        className=" text-white w-full sm:flex-1 px-3 py-3 sm:py-4 rounded border border-gray-700 text-black text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                        type="email"
                        name=""
                        placeholder="Email address"
                        id=""
                    />
                    <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm sm:text-base lg:text-lg rounded transition-colors duration-200 flex items-center justify-center gap-2">
                        Get Started <span className="text-lg">▶</span>
                    </button>
                </div>
            </div>

            <footer className="relative flex flex-col lg:px-30 px-5 py-10 w-full h-full mt-5 text-gray-400  ">
                <p className="font-bold pb-5 ">Questions? Call 000-800-919-1743</p>

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
                            fill-rule="evenodd"
                            clip-rule="evenodd"
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
            </footer>

            {/* <div className="bg-blue-400 h-[100px] w-full lg:px-30 sm:px-10 sm:py-6 z-10 md:py-6 "></div>
<div className="relative -mt-[50px] bg-blue-700 h-[100px] w-full z-20"></div>
  <div className="absolute bottom-0 left-0 right-0 bg-red-400 h-[100px]"></div> */}

            {/* <div className='flex'>
    <li className='bg-red-800 w-50 h-50'></li>
        <li className='bg-red-800 w-50 h-50'></li>

    <li className='bg-red-800 w-50 h-50'></li>  w-[220px] h-[310px]


  </div> */}
        </>
    );
};

export default SmtvLanding;

// bg relative to body div - cause bg is just for hero not for whole page
// also set h-w for background cause else it will cover whole page
