import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFav } from '../redux/featureSlice';
import { useNavigate, useParams } from 'react-router-dom';
import SearchNav from './SearchNav';
import Footer from './footer';



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
  }


  return (

    <div className='w-screen h-full p-10 gap-10 bg-black'>
    <SearchNav/>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 relative h-full w-full mt-10 lg:px-25 gap-5">

      {favorites &&
        favorites.map((fav, index) =>

         <div
  key={index}
  className="relative flex flex-col w-60 h-full p-2 overflow-hidden "
>
  {/* Image section */}
  <div className="relative w-full h-80">
    <img
      onClick={() => navigate(`/Smtv/${username}/details/${fav.id}`)}
      className="object-cover bg-red-600 w-full h-[300px] cursor-pointer w-full h-80"
      src={
        fav.img
          ? fav.img
          : "https://yt3.googleusercontent.com/Z1scaDhrH194d4AygOpJhFzM-ViGyvGLXfB5hGsNNlBRerrx98x9Knszx9-VWizx5lMZPlECOrE=s120-c-k-c0x00ffffff-no-rj"
      }
      alt=""
    />
    <h1
      className="absolute top-1 right-2 cursor-pointer hover:scale-110 transition-transform"
      onClick={() => deleteF(fav?.id)}
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
    <Footer/>
    </div>
  )
}

export default Favorite