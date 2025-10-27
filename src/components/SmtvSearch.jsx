import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addFav, deleteFav } from "../redux/featureSlice";
import { useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";


const SmtvSearch = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);
  const [animes, setAnime] = useState([]);
  const [loading, setLoading] = useState("");
  const [empty, setEmpty] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [searchBy, setSearchBy] = useState("All");

  const [LoggedUser, setLoggedUser] = useState('');
  const { username, keyword } = useParams('');


  const UserInfo = useSelector((state) => state.note.users);

  useEffect(() => {
    const Userdetails = UserInfo.find((U) => U?.username?.includes(username));

    if (Userdetails) {
      setLoggedUser(Userdetails.name);
    setSearch(keyword);
    }
    
  }, [username, keyword]);

  useEffect(() => {
    searchMovies()
  }, [keyword])


  // useEffect(() => {

  //   setSearch(keyword);

  //   if (keyword != "") {
  //     searchMovies();
  //     setEmpty(false)
  //   }
  // }, [keyword])


  const movieRef = useRef(null);
  const actorRef = useRef(null);
  const animeRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navigate = useNavigate();

  const searchMovies = async () => {
    navigate(`/Smtv/${username}/search`);

    try {
      setLoading(true);
      if (search.trim() === "") {
        setMovies([]);
        setActors([]);
        setEmpty(true); // if empty after seached wrong :
        setErrorMsg(false); // do this -- otherwise both will print together until new search
        //  window.location.reload();
        return;
      }

      if (searchBy === "All") {
        const URL = await fetch(
          `https://api.tvmaze.com/search/shows?q=${search}`
        );
        const URLdata = await URL.json();

        const URL2 = await fetch(
          `https://api.tvmaze.com/search/people?q=${search}`
        );
        const URLdata2 = await URL2.json();
        const URL3 = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`);
        const URLdata3 = await URL3.json();
        console.log(URLdata3.data);


        if (
          URLdata.length > 0 ||
          URLdata2.length > 0 ||
          URLdata3?.data?.length > 0
        ) {
          setErrorMsg(false);
          setEmpty(false);
          setMovies(URLdata || []);
          setActors(URLdata2 || []);
          setAnime(URLdata3.data || []);
        } else {
          setMovies([]);
          setActors([]);
          setErrorMsg(true);
          setEmpty(false);
        }

        // let URL = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
        // let URLdata = await URL.json();
        // console.log(URLdata)

        //     if (URLdata.length > 0) {
        //     setMovies(URLdata)
        //     setActors([])
        //     setErrorMsg(false)
        //     } else {
        //     URL = await fetch(`https://api.tvmaze.com/search/people?q=${search}`)
        //     URLdata = await URL.json();

        //         if (URLdata.length > 0) {
        //         setActors(URLdata)
        //         setMovies([])
        //         setErrorMsg(false)
        //         console.log(URLdata)
        //         } else {
        //         setMovies([])
        //         setActors([])
        //         setErrorMsg(true) // if error after empty :
        //         setEmpty(false) // do this -- otherwise both will print together until new search
        //     }
        // }
      } else if (searchBy === "Content") {
        setMovies([]);
        setActors([]);
        let URL = await fetch(
          `https://api.tvmaze.com/search/shows?q=${search}`
        );
        let URLdata = await URL.json();
        setMovies(URLdata);
        setErrorMsg(false);
      } else if (searchBy === "Actors") {
        setMovies([]);
        setActors([]);
        setAnime([])
        let URL = await fetch(
          `https://api.tvmaze.com/search/people?q=${search}`
        );
        let URLdata = await URL.json();
        setActors(URLdata);
        setErrorMsg(false);
      } else if (searchBy === "Anime") {
        setMovies([]);
        setActors([]);
        let URL = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`);
        let URLdata = await URL.json();
        setAnime(URLdata.data || []);
        setErrorMsg(false);
        console.log(URLdata);
      }
    } catch (error) {
      console.log("not found");
    } finally {
      setLoading(false);
    }
  };

  // nav is redering on details page from details page
  // again search should redirect to main page with results and redirect to details if clicked : on every search navigate to main page ?
  //

  const MovieDetails = (MovieId) => {
    navigate(`/Smtv/${username}/details/${MovieId}`);
    setMovies([]);
    setActors([]);
    setAnime([]);
  };

  const actorDetails = (actorId) => {
    navigate(`/Actor/${username}/${actorId}`)
    setMovies([]);
    setActors([]);
    setAnime([]);
  };


  const AnimeDetails = (id) => {
    navigate(`/Smtv/${username}/anime/${id}`)
    // https://api.jikan.moe/v4/anime/9409
    setMovies([]);
    setActors([]);
    setAnime([]);
  }
  // let URL = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
  // let URLdata = await URL.json();
  // console.log(URLdata)

  // if (URLdata.length > 0) {
  //     setMovies(URLdata)
  //     setActors([])
  //     setErrorMsg(false)
  // } else {
  //     URL = await fetch(`https://api.tvmaze.com/search/people?q=${search}`)
  //     URLdata = await URL.json();

  //     if (URLdata.length > 0) {
  //         setActors(URLdata)
  //         setMovies([])
  //         setErrorMsg(false)
  //         console.log(URLdata)
  //     } else {
  //         setMovies([])
  //         setActors([])
  //         setErrorMsg(true) // if error after empty :
  //         setEmpty(false) // do this -- otherwise both will print together until new search
  //     }
  // }

  function formatTime(theDate) {
    const date = new Date(theDate);
    return date.toLocaleDateString("en-GB", {
      // day: "numeric",
      // month: "short",
      year: "numeric",
    });
  }

  const dispatch = useDispatch('');
  const favList = useSelector((state) => state.note.users);

  const loggedInUser = favList.find((u) => u.username === username);
  const favorites = loggedInUser?.favorites || [];




  function setFavorite(fav) {
    const favo = fav;
    const filterList = favorites.findIndex((i) => i.id === fav);
    console.log("1");

    if (filterList >= 0) {
      dispatch(deleteFav({ username: username, favId: fav }));
      console.log("3");
    } else {
      console.log("2");
      const favsearch = async () => {
        const fav = await fetch(`https://api.tvmaze.com/shows/${favo}`);
        const favData = await fav.json();
        console.log(favData.premiered);
        const favList = {
          id: favData.id,
          name: favData.name,
          img: favData.image?.medium,
          type: favData.type,
          genres: favData.genres.join(", "),
          rating: favData.rating?.average || "N/A",
          year: favData.premiered
        };

        console.log(favList.rating);
        
        dispatch(addFav({ username: username, favorite: favList }));

      };
      favsearch();
    }
  }

  if (loading) return <p className="flex justify-center items-center w-screen h-screen bg-black">Loading...</p>; // if true not the default value
  if (movies.length < 0) return <p>not 2 Found...</p>;

  return (
    <>
      <div className="relative w-full bg-black text-white overflow-hidden">
        <div className="flex items-center h-full w-full justify-between py-10 px-10 lg:px-30">
          <div onClick={() => navigate(`/Smtv/${username}`)}>
            <svg
              className="h-7 lg:h-[35px]"
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
          <div className="flex w-full mx-9 justify-center items-center gap-2 border border-[0.5px] border-gray-900 rounded-xl">
            <select className="w-4 mx-2 sm:mx-2"
              id="filter"
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Content">Content</option>
              <option value="Actors">Actors</option>
              <option value="Anime">Anime</option>
            </select>
            <input
              className="w-full border-gray-900 outline-none focus:ring-0"

              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <p className="flex w-20 items-center justify-center p-2  text-xl rounded-3xl text-white            "
              onClick={searchMovies}>🔍︎</p>
          </div>
            <div className="flex items-center  w-[30%]">
              <p onClick={() => navigate(`/Smtv/${username}/favorite`)}
              >Favorite</p>
              <div className='flex justify-center ml-2 gap-2 items-center'
                              onClick={() => navigate(`/Smtv/profile/${username}`)}

>
                <p className="sm:hidden lg:block" 
                >{LoggedUser}</p>
                <img className='h-8 w-8 rounded-[50%]' src="https://www.tenforums.com/attachments/user-accounts-family-safety/322690d1615743307t-user-account-image-log-user.png" alt="" />

              </div>            
            </div>
          
        </div>

        <div className="flex justify-center items-center  sticky z-50 top-0 morph-blob opacity-80 w-full ">
          {movies.length > 0 && actors.length > 0 && animes.length > 0 && (
            <div className=" flex w-[50%] justify-center items-center gap-20 p-5 ">
              <p onClick={() => scrollToSection(movieRef)}>Movies</p> |
              <p onClick={() => scrollToSection(animeRef)}>Anime</p> |
              <p onClick={() => scrollToSection(actorRef)}>Actors</p>
            </div>
          )}
        </div>


        {movies && movies.length > 0 ? (
          // main container full of grids

          <div className="mt-10">
            <div className="flex items-center w-full bg-red-700 h-1">
              <p className=" flex items-center ml-10 lg:ml-30 text-2xl bg-black px-5 py-[2px] border-2 border-red-700 rounded-xl font-bold"> Movies </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 relative h-full w-full mt-10 px-10 lg:px-30 gap-5">
              {movies.map((movie) => (
                <div
                  key={movie.show?.id}
                  className=" relative flex flex-col w-55 h-full p-2 overflow-hidden "
                >
                  <div className="w-full h-80">
                    <img
                      onClick={() => MovieDetails(movie.show.id)}
                      className="rounded object-cover bg-red-600  w-full h-[300px]"
                      src={
                        movie.show?.image
                          ? movie.show?.image?.medium
                          : "https://yt3.googleusercontent.com/Z1scaDhrH194d4AygOpJhFzM-ViGyvGLXfB5hGsNNlBRerrx98x9Knszx9-VWizx5lMZPlECOrE=s120-c-k-c0x00ffffff-no-rj"
                      }
                      alt=""
                    />
                  </div>
                  <div className="relative flex flex-col py-2 mt-2 h-full">
                    <b>
                      <p className="">{movie.show?.name} </p>
                    </b>
                    <div className="flex justify-between gap-2 mt-2 text-gray-500">
                      <div>
                        <p>{formatTime(movie.show?.premiered)}</p>
                      </div>

                      <div className="flex gap-4">
                        <p>{movie.show.rating?.average || "N/A"} ⭐</p>

                        <p
                          key={movie.show?.id}
                          className={
                            favorites.some((f) => f.id === movie.show?.id)
                              ? "text-xl px-2 flex items-center w-5"
                              : "  text-[30px] py-0 px-2 flex items-center justify-center h-5 w-5"
                          }
                          onClick={() => setFavorite(movie.show?.id)}
                        >
                          {favorites.some((f) => f.id === movie.show?.id)
                            ? "❤"
                            : "♡"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        ) : (
          ""
          // <p className="flex justify-center items-center w-screen h-30 bg-black"> {empty === true && "paaji kuch likho toh empty hai"}  </p>
        )}

        {animes && animes.length > 0 ? (

          <div className="mt-20">
            <div className="flex items-center w-full bg-red-700 h-1">
              <p className=" flex items-center ml-10 lg:ml-30 text-2xl bg-black px-5 py-[2px] border-2 border-red-700 rounded-xl font-bold"> Anime </p>
            </div>
            <div >
              <div ref={animeRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 relative h-full w-screen mt-10 px-10 lg:px-30 gap-5">
                {animes.map((anime) => (

                  <div key={anime.mal_id}
                    onClick={() => AnimeDetails(anime.mal_id)}
                    className=" relative flex flex-col w-55 h-full p-2 overflow-hidden "
                  >
                    <div className="w-full h-80">
                      <img className="rounded object-cover bg-red-600  w-full h-[300px]"
                        src={anime.images?.jpg?.image_url || "https://yt3.googleusercontent.com/Z1scaDhrH194d4AygOpJhFzM-ViGyvGLXfB5hGsNNlBRerrx98x9Knszx9-VWizx5lMZPlECOrE=s120-c-k-c0x00ffffff-no-rj"
                        } alt="" srcSet="" />
                    </div>

                    <div className="relative flex flex-col py-2 mt-2 h-full">
                      <b>
                        <p className="">{anime?.title} </p>
                      </b>
                      <div className="flex  justify-between gap-2 mt-2 text-gray-500">
                        <div>
                          <p> {anime.aired?.from ? new Date(anime.aired.from).toDateString()
                            : ""}</p>
                        </div>

                        <div className="flex gap-4">
                          <p>{anime.score || "N/A"} ⭐</p>

                          <p
                            key={anime.mal_id}
                            className={
                              favList.some((f) => f.id === anime.mal_id)
                                ? "text-md "
                                : "  text-md"
                            }
                            onClick={() => setFavorite(anime.mal_id)}
                          >
                            {favList.some((f) => f.id === anime.mal_id)
                              ? "X"
                              : "Y"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>



                  //   <div
                  //     className="flex rounded-2xl w-100 h-60 border border-opacity-75 border-gray-700 bg-gray-900 overflow-hidden p-2"
                  //     key={anime.mal_id}
                  //     onClick={() => navigate(`/details/${anime.mal_id}`)}
                  //   >
                  //     {/* Image Section */}
                  //     <div className="relative w-[40%] h-[98%] overflow-hidden p-1">
                  //       <img
                  //         className="rounded-2xl h-full w-full object-cover"
                  //         src={
                  //           anime.images?.jpg?.image_url ||
                  //           "https://via.placeholder.com/150"
                  //         }
                  //         alt={anime.title}
                  //       />
                  //     </div>

                  //     {/* Info Section */}
                  //     <div className="pl-4 pr-3 space-y-1 w-[60%] mt-2 h-full">
                  //       <p>{anime.status}</p>

                  //       <p className="mt-2">{anime.type}</p>

                  //       <b>
                  //         <p className="py-3 text-xl h-[30%]">{anime.title}</p>
                  //       </b>

                  //       <div className="flex rounded bg-gray-900 whitespace-nowrap">
                  //         <p>Rating {anime.score || "N/A"} ⭐</p>
                  //         <p className="ml-3">
                  //           {anime.aired?.from
                  //             ? new Date(anime.aired.from).toDateString()
                  //             : ""}
                  //         </p>
                  //       </div>

                  //       <div className="flex gap-3 text-md my-3 flex-wrap w-full">
                  //         {anime.genres?.slice(0, 2).map((genre, index) => (
                  //           <p
                  //             key={index}
                  //             className="border border-green-500 rounded px-2 bg-green-800"
                  //           >
                  //             {genre.name}
                  //           </p>
                  //         ))}
                  //       </div>
                  //     </div>
                  //   </div>


                ))}
              </div>
            </div>
          </div>

        ) : null}

        {actors && actors.length > 0 ? (
          <div className="mt-20 h-full">
            <div className="flex items-center w-full bg-red-700 h-1">
              <p className=" flex items-center ml-10 lg:ml-30 text-2xl bg-black px-5 py-[2px] border-2 border-red-700 rounded-xl font-bold"> Actors </p>
            </div>
            <div
              ref={actorRef}
              className="grid grid-cols-2 relative h-full w-screen mt-15 px-10 lg:px-30 gap-5"

            >
              {actors.map(
                (
                  actor // No sense of using map cause you can only with exact name that return only one array? - make selct dropdown specific
                ) => (

                  <div key={actor.person?.id}
                    onClick={() => actorDetails(actor.person?.id)}
                    className="flex border border-red-700 w-full h-30  p-3 rounded-xl">

                    <div className="flex relative h-full w-23 items-center justify-center">
                      <img className=" object-cover object-top w-full h-full  rounded-xl h-full"
                        src={actor.person?.image?.medium || "https://yt3.googleusercontent.com/Z1scaDhrH194d4AygOpJhFzM-ViGyvGLXfB5hGsNNlBRerrx98x9Knszx9-VWizx5lMZPlECOrE=s120-c-k-c0x00ffffff-no-rj"} alt="" />
                    </div>
                    <div className="px-3 h-full" key={actor.person?.id}>
                      <p className=" text-2xl font-bold">{actor.person?.name}</p>
                      <div className="flex space-x-2"><p>{actor.person?.gender}</p>
                        <p>{actor.person?.birthday || "N/A"}</p>
                      </div>
                      {/* <p>{actor.person?.country || "Country not found "}</p> */}

                    </div>

                  </div>

                  // <div
                  //   key={actor.person?.id}
                  //   className="flex rounded-2xl p-3 border border-gray-700 bg-gray-900"
                  //   onClick={() => navigate(`/Actor/${actor.person?.id}`)}
                  // >
                  //   <img
                  //     className=" w-40 h-40 rounded-full object-cover"
                  //     src={actor.person?.image?.medium}
                  //     alt=""
                  //   />
                  //   <b>
                  //     <p className="p-3 text-[30px]" key={actor.person?.id}>
                  //       {actor.person?.name}
                  //     </p>
                  //   </b>
                  // </div>


                )
              )}
            </div>
          </div>
        ) : null}

        {/* {movies.length < 0 && <p>no beta</p>} */}
        {errorMsg === true && <p>{search} is not found</p>}
      </div>


    </>
  );
};

export default SmtvSearch;

// {empty ? `${empty} "jfij"` : "jfjrjf"}
// {movies.length > 0 && "ok paaji"}

// {search != '' && "paaji"}</p>) - working but while typing activates
// want to execute it when search box is empty and button clicked ---- (<p> {empty === true && "paaji"}</p>) working ✅
// Using onclick on input text field!! - Use on change instead
