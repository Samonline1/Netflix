import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const DefaultHome = () => {


    const navigate = useNavigate();
     const { username } = useParams();
     const [animes, setAnimes] = useState()

    const searchAnime = async () => {
      const animeurl = await fetch (`https://api.jikan.moe/v4/top/anime`)
      const topAnime = await animeurl.json();
      console.log(topAnime.data[0]);
      setAnimes(topAnime.data)
    
    }

    useEffect(() => {
     searchAnime()
    }, [])
    
     

    const movies = [
  {
    "id":46562,
    "name": "The Last of Us",
    "image": "https://static.tvmaze.com/uploads/images/medium_portrait/563/1409008.jpg",
    "premiered": "2023-01-15"
  },
  {
    "id": 82,
    "name": "Game of Thrones",
    "image": "https://static.tvmaze.com/uploads/images/medium_portrait/498/1245274.jpg",
    "premiered": "2011-04-17"
  },
   {
    "id": 2993,
    "name": "Stranger Things",
    "image": "https://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
    "premiered": "2016-07-15"
  },
  {
    "id": 169,
    "name": "Breaking Bad",
    "image": "https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
    "premiered": "2008-01-20"
  },
  {
    "id": 44778,
    "name": "House of the Dragon",
    "image": "https://static.tvmaze.com/uploads/images/medium_portrait/530/1325279.jpg",
    "premiered": "2022-08-21"
  },
  {
    "id": 168,
    "name": "Dexter",
    "image": "https://static.tvmaze.com/uploads/images/medium_portrait/0/2147.jpg",
    "premiered": "2006-10-01"
  },
  {
    "id": 139,
    "name": "Doctor Who",
    "image": "https://static.tvmaze.com/uploads/images/medium_portrait/67/168792.jpg",
    "premiered": "2005-03-26"
  },
  {
    "id": 73,
    "name": "The Sopranos",
    "image": "https://static.tvmaze.com/uploads/images/medium_portrait/11/27645.jpg",
    "premiered": "1999-01-10"
  },
  {
    "id": 250,
    "name": "Better Call Saul",
    "image": "https://static.tvmaze.com/uploads/images/medium_portrait/207/519083.jpg",
    "premiered": "2015-02-08"
  },
  {
    "id": 66,
    "name": "The Office (US)",
    "image": "https://static.tvmaze.com/uploads/images/medium_portrait/85/213184.jpg",
    "premiered": "2005-03-24"
  },
  
]


    // const animes = [
    //     {
    //         id: "",
    //         name: "",
    //         url: "",
    //         rating: "",
    //     },
    //     {
    //         id: "",
    //         name: "",
    //         url: "",
    //         rating: "",
    //     },
    //     {
    //         id: "",
    //         name: "",
    //         url: "",
    //         rating: "",
    //     },
    //     {
    //         id: "",
    //         name: "",
    //         url: "",
    //         rating: "",
    //     },
    //     {
    //         id: "",
    //         name: "",
    //         url: "",
    //         rating: "",
    //     },
    //     {
    //         id: "",
    //         name: "",
    //         url: "",
    //         rating: "",
    //     },
    //     {
    //         id: "",
    //         name: "",
    //         url: "",
    //         rating: "",
    //     },

    // ]

    const actors = [
  {
    id: 49567,
    name: "Robert Downey Jr.",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/5/13304.jpg",
    dob: "1965-04-04",
  },
  {
    id: 26971,
    name: "Jenna Ortega",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/432/1081921.jpg",
    dob: "2002-09-27",
  },
  {
    id: 66994,
    name: "Kylie Jenner",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/460/1150485.jpg",
    dob: "1997-08-10",
  },
  {
    id: 47332,
    name: "Dwayne 'The Rock' Johnson",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/11/29580.jpg",
    dob: "1972-05-02",
  },
  {
    id: 71223,
    name: "Chris Hemsworth",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/425/1062571.jpg",
    dob: "1983-08-11",
  },
  {
    id: 52302,
    name: "Johnny Depp",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/7/18275.jpg",
    dob: "1963-06-09",
  },
  {
    id:70077,
    name: "Leonardo DiCaprio",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/269/672763.jpg",
    dob: "1974-11-11",
  },
  {
    id:101172,
    name: "Salman Khan",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/32/80640.jpg",
    dob: "1965-12-27",
  },
  {
    id: 68357,
    name: "Gal Gadot",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/118/295685.jpg",
    dob: "1985-04-30",
  },
  {
    id: 27638,
    name: "Will Smith",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/449/1123849.jpg",
    dob: "1968-09-25",
  },
];



    return (
        <>
            <div className='relative w-screen h-full bg-black'>

                <div className='py-10 px-10 lg:px-30 space-y-15'>


                    <div className='text-xl mb-3'>
                        <b><p>Popular</p></b>
                    </div>
                    <div className='flex w-full h-full gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide'>

                        {movies.map((movie) => (
                            <div key={movie.id} className='h-full w-60'
                            onClick={()=> navigate(`/Smtv/${username}/details/${movie.id}`)}
                            >
                                <div className="relative h-50 w-40 lg:h-80 lg:w-60 items-center justify-center">
                                    <img className=" object-cover object-top w-full h-full  rounded-xl h-full"
                                        src={movie.image ? movie.image : "https://yt3.googleusercontent.com/Z1scaDhrH194d4AygOpJhFzM-ViGyvGLXfB5hGsNNlBRerrx98x9Knszx9-VWizx5lMZPlECOrE=s120-c-k-c0x00ffffff-no-rj"} />
                                </div>

                                <div className="relative flex flex-col py-2 mt-2 h-full">
                                    <b>
                                        <p className="">{movie.name} </p>
                                    </b>
                                    <div className="flex  justify-between gap-2 mt-2 text-gray-500">
                                        <div>
                                            <p>{movie.premiered}</p>
                                        </div>

                                        <div className="flex gap-4">
                                            <p>{movie.rating} ⭐</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className='text-xl mb-3'>
                        <b><p>Popular Animes</p></b>
                    </div>
                    <div className='flex w-full h-full overflow-x-auto overflow-y-hidden scrollbar-hide gap-5'>

                        {animes && animes.map((anime, index) => (
                            <div key={index} className='h-full w-60'
                            onClick={()=> navigate(`/Smtv/${username}/anime/${anime.mal_id}`)}>

                                <div className="relative h-50 w-40 lg:h-80 lg:w-60 items-center justify-center">
                                    <img className=" object-cover object-top w-full h-full  rounded-xl h-full"
                                        src={ anime.images?.jpg.large_image_url || "https://yt3.googleusercontent.com/Z1scaDhrH194d4AygOpJhFzM-ViGyvGLXfB5hGsNNlBRerrx98x9Knszx9-VWizx5lMZPlECOrE=s120-c-k-c0x00ffffff-no-rj"} />
                                </div>

                                <div className="relative flex flex-col py-2 mt-2 h-full">
                                    <b>
                                        <p className="">{anime.title} </p>
                                    </b>
                                    <div className="flex  justify-between gap-2 mt-2 text-gray-500">
                                        <div>
                                            <p>{anime.aired?.string?.split(" to ")[0]}</p>
                                        </div>

                                        <div className="flex gap-4">
                                            <p>{anime.score} ⭐</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                        <div>

                        </div>
                    </div>






                    <div className='text-xl mb-3'>
                        <b><p>Top Actors</p></b>
                    </div>


                    <div className='flex w-full h-full overflow-x-auto overflow-y-hidden scrollbar-hide gap-5'>



                        {actors.map((actor, index) => (
                            <div 
                            onClick={()=> navigate(`/Actor/${username}/${actor.id}`)}
                            key={index} className='h-full w-60'>
                            
                                <div className="relative h-50 w-40 lg:h-80 lg:w-60 items-center justify-center">
                                    <img className=" object-cover object-top w-full h-full  rounded-xl h-full"
                                        src={actor.image ? actor.image : "https://yt3.googleusercontent.com/Z1scaDhrH194d4AygOpJhFzM-ViGyvGLXfB5hGsNNlBRerrx98x9Knszx9-VWizx5lMZPlECOrE=s120-c-k-c0x00ffffff-no-rj"} />
                                </div>

                                <div className="relative flex flex-col py-2 mt-2 h-full">
                                    <b>
                                        <p className="">{actor.name} </p>
                                    </b>
                                    <div className="flex  justify-between gap-2 mt-2 text-gray-500">
                                        <div className="flex gap-4">
                                            <p>{actor.dob} ⭐</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                        <div>

                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}

export default DefaultHome