import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFav } from '../redux/featureSlice';
import { useNavigate, useParams } from 'react-router-dom';
import SearchNav from './SearchNav';
import Footer from './footer';
import { toast, ToastContainer } from 'react-toastify';




const Favorite = () => {

  const {username} = useParams();
  const favList = useSelector((state) => state.note.users);

  const loggedInUser = favList.find((u) => u.username === username);
  const favorites = loggedInUser?.favorites || [];

  console.log(favorites)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function deleteF(idnum){
    dispatch(deleteFav({ username : username, favId : idnum}))
    // dispatch(deleteFav(idnum))
    console.log("yah tak sirf")
        const name = favorites.find((f) => f.id === idnum);

    toast.error(`Deleted favorite ${name.name} for user ${username}`, { autoClose: 1000 });
    
  }


  return (

    <div className='w-screen h-full p-5 pt-15 gap-10 bg-black px-7 lg:px-20 py-20'>
    <SearchNav />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 relative h-full w-full mt-10 sm:px-5 lg:px-30 gap-2 sm:gap-3 lg:gap-5">

      {favorites &&
        favorites.map((fav, index) =>

         <div
  key={index}
  className="relative flex flex-col w-45 h-80 lg:w-60 lg:h-full p-2 overflow-hidden "
>
  {/* Image section */}
  <div className="relative w-40 h-[90%] lg:w-60 lg:h-full">
    <img
      onClick={() => navigate(`/Smtv/${username}/details/${fav.id}`)}
      className="object-cover bg-red-600 w-full h-full cursor-pointer w-full h-80"
      src={
        fav.img
          ? fav.img
          : "https://yt3.googleusercontent.com/Z1scaDhrH194d4AygOpJhFzM-ViGyvGLXfB5hGsNNlBRerrx98x9Knszx9-VWizx5lMZPlECOrE=s120-c-k-c0x00ffffff-no-rj"
      }
      alt=""
    />
    <h1
      className="absolute top-1 right-2 cursor-pointer hover:scale-110 transition-transform"
      onClick={() => deleteF(fav?.id, fav?.name)}
    >
    ❤
    </h1>
  </div>

  {/* Info section */}
  <div className="relative flex flex-col py-2 mt-2 h-full">
    <b>
      <p className="text-lg">{fav.name}</p>
    </b>

    <div className="flex justify-between gap-2 mt-2 text-gray-400">
      <div>
        <p>{fav.year?.split("-")[0] || "Unknown"}</p>
      </div>

      <div className="flex gap-4">
        <p>{fav.rating || "N/A"} ⭐</p>
        {/* <p
          key={fav.id}
          className="text-[28px] px-2 flex items-center justify-center cursor-pointer  hover:scale-110"
          onClick={() => deleteF(fav?.id)}
        >
          ❤
        </p> */}
      </div>
    </div>

    <div className="flex gap-3 text-sm mt-3 flex-wrap">
      {fav.genres && (
        <p className="border border-red-500 rounded px-2 bg-red-800">
          {fav.genres}
        </p>
      )}
    </div>
  </div>
</div>
        )}
    </div>
    {favorites.length === 0 && (
      <div className="flex flex-col items-center justify-center w-full h-full mt-20 mb-20">
        <h2 className="text-3xl font-bold text-gray-300 mb-4">  No Favorites Yet</h2>
        <p className="text-lg text-gray-500 text-center">
          You haven't added any favorites yet. Start exploring and add some! </p>  </div>) }
    <Footer/>
    </div>
  )
}

export default Favorite