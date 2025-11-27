import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Footer from './footer';
import SearchNav from './SearchNav';
import { toast, ToastContainer } from 'react-toastify';



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
        // console.log(data.image.medium)
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

  if (!actor) return <p className="flex justify-center items-center w-screen h-screen bg-black">
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

  // Only log if similiar exists and has at least one item
  if (actor?.similiar && Array.isArray(actor.similiar) && actor.similiar.length > 0 && actor.similiar[0]?.person?.name) {
    console.log(actor.similiar[0].person.name);
  }

  return (
    <div className='relative h-full w-screen bg-black'>
      <ToastContainer position="top-right" />

      <div className='flex flex-col px-10 lg:px-20 py-20 lg:gap-10 '>
        
        <SearchNav/>

        <div className='flex h-full lg:h-90 w-full rounded-xl pt-10'>
          <div key={actor?.data?.id || 'no-id'} className='flex lg:w-80 w-70 lg:h-full h-60 lg:w-60 rounded-xl'>
            <img
              className='flex object-cover object-top items-center w-full rounded-xl'
              src={actor?.data?.image?.medium || actor?.data?.image?.original || "https://yt3.googleusercontent.com/Z1scaDhrH194d4AygOpJhFzM-ViGyvGLXfB5hGsNNlBRerrx98x9Knszx9-VWizx5lMZPlECOrE=s120-c-k-c0x00ffffff-no-rj"}
              alt={actor?.data?.name || "No image"}
            />
          </div>
          <div className='flex flex-col p-5 w-full justify-end gap-1'>
            <p className='font-bold text-3xl lg:text-[80px]'>{actor?.data?.name || "Unknown"}</p>
            <div className='text-xl lg:text-2xl text-gray-400'>
              <p>{actor?.cast?.name || "N/A"}</p>
              <p>{actor?.data?.gender || "N/A"}</p>
            </div>
          </div>
        </div>

      </div>

      <div className='flex flex-col px-10 lg:px-20 py-10 gap-5'>
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

      <div className='flex justify-center h-full w-full px-10 lg:px-20 py-10 gap-5'>
        <div className='flex w-full h-full gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide'>
          {actor?.similiar && Array.isArray(actor.similiar) && actor.similiar.length > 1 ? (
            actor.similiar.slice(1).map((a, idx) => {
              const imgSrc = a?.person?.image?.medium || a?.person?.image?.original || "https://yt3.googleusercontent.com/Z1scaDhrH194d4AygOpJhFzM-ViGyvGLXfB5hGsNNlBRerrx98x9Knszx9-VWizx5lMZPlECOrE=s120-c-k-c0x00ffffff-no-rj";
              return (
                <div
                  onClick={() => {
                    toast.error("Loading actor details...", { autoClose: 1000 });
                    navigate(`/Actor/okSMTVmgluqwu2/${a?.person?.id}`);
                  }}
                  className='h-full w-50 lg:w-60' key={a?.person?.id || idx}>
                  <div className="relative h-60 w-40 lg:h-80 lg:w-60 items-center justify-center">
                    <img className="object-cover object-top w-full h-full rounded-xl h-full"
                      src={imgSrc}
                      alt={a?.person?.name || "No image"} />
                    <div className="absolute bottom-0 w-full h-25 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                      <p className='font-bold absolute bottom-4 left-4'>{a?.person?.name || "Unknown"}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : <div className='text-center w-full py-10 text-gray-400'>Not available</div>}
        </div>

      </div>

      <Footer />
    </div>

  )
}

export default Actor