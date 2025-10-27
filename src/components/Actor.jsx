import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Footer from './footer';
import SearchNav from './SearchNav';



const Actor = () => {

  const [actor, setActor] = useState();

  const { id } = useParams();
  console.log(id);
  
  const navigate = useNavigate();

  useEffect(() => {
    async function showActor() {

      try {
        const res = await fetch(`https://api.tvmaze.com/people/${id}`)
        const data = await res.json()
        console.log(data.image.medium)
        console.log(data)

        // const name = data.name.charAt(0);
        const name = data.name?.split(" ")[0] ;

        const URL = await fetch(
          `https://api.tvmaze.com/search/people?q=${name}`
        );
        const SimilarActors = await URL.json();
        console.log(SimilarActors);


        const casto = await fetch(`https://api.tvmaze.com/people/${id}/castcredits?embed=show`)
        const castores = await casto.json()
        // console.log(castores[0]._links.show || "hgh")
        // console.log(castores[0]._embedded.show)

        const crew = await fetch(`https://api.tvmaze.com/people/${id}/crewcredits?embed=show`)
        const crewData = await crew.json()
        console.log(crewData || "hhthtfh");


        //  const guestCredits = await fetch(`https://api.tvmaze.com/people/${id}/guestcastcredits?embed=show`)
        //  const guestData = await guestCredits.json()


        setActor({
          data: data || null,
          similiar: SimilarActors || null,
          cast: castores.length > 0 ? castores[0]._embedded.show : null,
          crew: crewData || null,
          //  guest: guestData || null,

        })

      } catch (error) {
        console.log("Error fetching details...")
        setActor("kodjiedj")
      }
    }

    showActor()



  }, [id])

  if (!actor) return <p className="flex justify-center items-center w-screen h-screen bg-black">Searching</p>

  console.log(actor.similiar[0].person.name);




  return (
    <div className='relative h-full w-screen bg-black'>

      <div className='flex flex-col px-20 py-20 gap-10 '>
        
        <SearchNav/>

        <div className='flex h-60 lg:h-90 w-full  rounded-xl'>
          <div key={actor.data?.id} className='flex w-70 lg:w-95 h-full rounded-xl   '>
            <img className='flex object-cover object-top items-center w-full rounded-xl '
              src={actor.data?.image ? actor.data?.image.medium : null || "https://yt3.googleusercontent.com/Z1scaDhrH194d4AygOpJhFzM-ViGyvGLXfB5hGsNNlBRerrx98x9Knszx9-VWizx5lMZPlECOrE=s120-c-k-c0x00ffffff-no-rj"
              } alt="" />
          </div>
          <div className=' flex flex-col p-5 w-full justify-end gap-1'>
            <p className='font-bold text-3xl lg:text-[80px]'>{actor.data?.name}</p>
            <div className='text-xl lg:text-2xl text-gray-400'>
              <p>{actor.cast ? actor.cast?.name : "N/A"}</p>
              <p>{actor.data?.gender || "N/A"} </p>
            </div>

          </div>

        </div>

      </div>

      <div className='flex flex-col px-20 py-10 gap-5'>
        <div className='h-full w-full'>
          <div className='flex bg-red-700 w-2 h-15 '> <h1 className=' flex items-center p-2 ml-5 font-bold'>Overview</h1></div>
        </div>

        <div className='text-2xl space-y-2'>
          <p> <b>Born </b>: {actor.data?.birthday || "N/A"}</p>
          <p><b>Country</b> : {actor.data?.country?.name || "N/A"}</p>
          <p> <b>Death Day </b>: {actor.data?.deathday || "N/A"}</p>
          <p> <b>Gender </b>: {actor.data?.gender || "N/A"}</p>
        </div>
      </div>

      <div className='flex justify-center h-full w-full px-20 py-10 gap-5'>
        <div className='flex w-full h-full gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide'>
          {actor.similiar ? (
            actor.similiar.slice(1).map((a) => (
              <div
                onClick={() => navigate(`/Actor/okSMTVmgluqwu2/${a.person?.id}`)}
                className='h-full w-60' key={a.person?.id}>
                <div className="relative h-80 w-60 items-center justify-center">
                  <img className=" object-cover object-top w-full h-full  rounded-xl h-full"
                    src={
                      a.person?.image ? a.person?.image?.medium : a.person?.image?.original || 
                    "https://yt3.googleusercontent.com/Z1scaDhrH194d4AygOpJhFzM-ViGyvGLXfB5hGsNNlBRerrx98x9Knszx9-VWizx5lMZPlECOrE=s120-c-k-c0x00ffffff-no-rj"} alt="" />
                  <div className="absolute bottom-0 w-full h-25 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <p className='font-bold absolute bottom-4 left-4'>{a.person?.name}</p>

                  </div>
                </div>
              </div>
            ))
          )
            : "Not avaiable"}
        </div>

      </div>

      <Footer />
    </div>

  )
}

export default Actor