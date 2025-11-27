import React, { useEffect, useState } from "react";
import { Await, useNavigate, useParams } from "react-router-dom";
import SmtvSearch from "./SmtvSearch";
import Footer from "./footer";
import SearchNav from "./SearchNav";

const MovieDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [Cast, setCast] = useState();
    const [hover, setHover] = useState();

    const { username } = useParams();
    const navigate = useNavigate();

    const Videos = [
        {
            id: "87140",
            VideoId: "J-0f7teDD2I",
        },
        {
            id: "2993",
            VideoId: "l5OAxkuq850",
        },
        {
            id: "50036",
            VideoId: "_8p6YkEPVco",
        },
        {
            id: "67252",
            VideoId: "LOJCCsBdtVs",
        },
        {
            id: "53647",
            VideoId: "03u4xyj0TH4",
        },
        {
            id: "169",
            VideoId: "2gTC4uWP3_Y",
        },
        {
            id: "44778",
            VideoId: "YN2H_sKcmGw",
        },
    ];

    const checkVid = Videos.find((vid) => vid.id === id);

    useEffect(() => {
        async function showDetails() {
            try {
                const URL2 = await fetch(`https://api.tvmaze.com/shows/${id}`);
                // https://api.tvmaze.com/shows/1/images for banner and all images
                const URLdata2 = await URL2.json();

                const Cast = await fetch(`https://api.tvmaze.com/shows/${id}/cast`);
                const CastInfo = await Cast.json();
                setCast(CastInfo || []);

                console.log(URLdata2);

                setDetails(URLdata2 || []);
            } catch (error) {
                console.log("phat gya");
            } finally {
                setLoading(false);
            }
        }
        showDetails();
    }, [id]);

    if (loading)
        return (
            <p className="flex justify-center items-center w-screen h-screen bg-black">
                <div className="shine-btn">
                            <img className="h-20 lg:h-[55px] lg:hidden" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Netflix_2016_N_logo.svg" alt="" srcset="" />
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
            </p>
        );
    if (!details) return <p>Not found!</p>;

    return (
        <>
            <div className="relative w-full h-full  overflow-hidden m-0 p-0">
                <div className="h-full w-full">
                    {checkVid ? (
                        <iframe
                            className="absolute top-1/3 lg:top-1/2 left-1/2 lg:w-[190.78%] lg:h-[177.78%] h-[100%] w-[500%]  -translate-x-1/2 -translate-y-1/2  "
                            src={`https://www.youtube.com/embed/${checkVid.VideoId}?autoplay=1&mute=1&loop=1&playlist=${checkVid.VideoId}&controls=0&modestbranding=1&showinfo=0`}
                            allow="autoplay; fullscreen; encrypted-media"
                        />
                    ) : (
                        <img
                            className=" absolute h-full w-400 object-cover inset-0 object-center"
                            src={details.image?.original}
                            alt=""
                        />
                    )}
                </div>

                <div className="relative flex flex-col justify-center z-10 gap-5 space-y-3 h-full w-screen text-white bg-black/60 p-5 pt-15 lg:p-15 backdrop-blur-[2px]">
                    <SearchNav />

                    <div className="lg:h-80 lg:w-55 w-40 h-53 ">
                        <img
                            className=" h-full w-full justify-end object-cover"
                            src={details.image?.medium}
                            alt={details.name}
                        />
                    </div>

                    <h1>{details.name}</h1>
                    <p>{details.genres?.join(", ")}</p>

                    <div className=" lg:flex grid grid-cols-4 gap-3 lg:gap-5 w-full lg:border-none border-b pb-5 border-gray-500 ">
                        <p>★ {details.rating?.average || "Not rated"}</p>

                        <p>{details.type || "Type N/A"}</p>
                        <p>{details.webChannel?.name || "Network : N/A"}</p>
                        {/* <p>{details.network?.name || "Network : N/A"}</p> */}
                        <p> {details.network?.country?.name || "Country : N/A"}</p>
                        <p>{details.averageRuntime || "Runtime: N/A"} m</p>
                        <p>{details.status}</p>
                        <p>{details.language}</p>
                        <p>{details.premiered}</p>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: details.summary }} />

                    <div className=" items-start h-full w-full  relative ">
                        <p className="font-bold text-2xl mb-5">Cast</p>

                        <div className="flex items-start  w-screen gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide">
                            {Cast.map((cast) => (
                                <div
                                    key={cast.person?.id}
                                    onClick={() =>
                                        navigate(`/Actor/${username}/${cast.person?.id}`)
                                    }
                                    className="flex flex-col items-center gap-2 h-60 w-50"
                                >
                                    <div className="lg:h-40 lg:w-40 h-30 w-30 ">
                                        <img
                                            key={cast.person.id}
                                            className="w-full h-full object-cover object-top rounded-[50%] bg-red-700"
                                            src={
                                                hover
                                                    ? cast.character?.image?.medium
                                                    : cast.person?.image?.medium
                                            }
                                            alt=""
                                            srcSet=""
                                            onMouseEnter={() => setHover(true)}
                                            onMouseLeave={() => setHover(false)}
                                        />
                                    </div>

                                    <p
                                        className="font-bold text-sm lg:text-lg"
                                        onMouseEnter={() => setHover(true)}
                                        onMouseLeave={() => setHover(false)}
                                    >
                                        {hover ? cast.character.name : cast.person.name}
                                    </p>
                                    {/* <p >{cast.person.name}</p>
        <p> {cast.character.name}</p> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetails;

// forgot id with link to use params id

//

// <div className='flex rounded-2xl w-100 h-60 border border-opacity-75 border-gray-700  bg-gray-900 overflow-hidden p-2'
//                         key={movie.show?.id}
//                     >
//                         <div className='relative w-[40%] h-[98%] overflow-hidden p-1' >
//                             <p key={movie.show?.id} className={
//                                 favList.some((f) => f.id === movie.show?.id)
//                                     ? 'bg-red-600 absolute text-2xl' : 'bg-green-700 absolute text-2xl'
//                             }
//
//                             >#</p>

//                             <img className='rounded-2xl h-full w-full object-cover'
//                                 src={movie.show?.image ? movie.show?.image?.medium : "SMTV"} alt="" />
//                         </div>
//                         <div className=' pl-4 pr-3 space-y-1 w[60%] mt-2 h-full '
//
//                             >
//                             <p className={movie.show?.status === "Ended" ? "" : "text-white-500"}>
//                                 {movie.show?.status}
//                             </p>
//                             <p className='mt-2'> {movie.show?.type} : {movie.show?.webChannel?.name}</p>
//                             <b><p className='py-3 text-3xl h-[30%]'>{movie.show?.name} </p></b>
//                             <div className='flex rounded  bg-gray-900 whitespace-nowrap'>
//                                 <p>Rating {movie.show.rating?.average || "N/A"} ⭐ </p>
//                                 <p>{formatTime(movie.show?.premiered)}</p>
//                             </div>

//                             <div className='flex gap-3 text-md my-3 flex-wrap w-full'>
//                                 <p className='border border-green-500 rounded px-2 bg-green-800'>{movie.show?.genres[0]}</p>
//                                 <p className='border border-green-500 rounded px-2 bg-green-800'>{movie.show?.genres[1]}</p>
//                             </div>
//                         </div>
//                     </div>

// object cover does not works on i frame intead use top-1/2 left-1/2 w-[177.78%] h-[177.78%] -translate-x-1/2 -translate-y-1/2
