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
                Loading.....
            </p>
        );
    if (!details) return <p>Not found!</p>;

    return (
        <>
            <div className="relative w-full h-full  overflow-hidden m-0 p-0">
                <div className="h-full w-full">
                    {checkVid ? (
                        <iframe
                            className="absolute top-1/2 left-1/2 w-[190.78%] h-[177.78%] sm:h-[150%] sm:w-[500%]  -translate-x-1/2 -translate-y-1/2  "
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

                <div className="relative flex flex-col justify-center z-10 gap-5 space-y-3 h-full w-screen text-white bg-black/60 p-15">


                    <SearchNav/>



                    <img
                        className=" h-full w-[40%] lg:w-[15%] justify-end"
                        src={details.image?.medium}
                        alt={details.name}
                    />

                    <h1>{details.name}</h1>

                    <div className=" lg:flex gap-5 w-full  ">
                        <p>★ {details.rating?.average || "Not rated"}</p>
                        <p>{details.type || "Type N/A"}</p>
                        <p>{details.genres?.join(", ")}</p>
                        <p>{details.webChannel?.name || "Network : N/A"}</p>
                        {/* <p>{details.network?.name || "Network : N/A"}</p> */}
                        <p> {details.network?.country?.name}</p>
                        <p>{details.averageRuntime || "Runtime: N/A"} m</p>
                        <p>{details.status}</p>
                        <p>{details.language}</p>
                        <p>{details.premiered}</p>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: details.summary }} />

                    <div className=" items-start h-full w-full  relative">
                        <p className="font-bold text-2xl mb-5">Cast</p>

                        <div className="flex items-start  w-screen gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide ">
                            {Cast.map((cast) => (
                                <div
                                    key={cast.person?.id}
                                    onClick={() =>
                                        navigate(`/Actor/${username}/${cast.person?.id}`)
                                    }
                                    className="flex flex-col items-center gap-2 h-60 w-50"
                                >
                                    <div className="h-40 w-40 ">
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
                                        className="font-bold"
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
