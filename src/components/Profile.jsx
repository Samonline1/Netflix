import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./footer";
import SearchNav from "./SearchNav";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const { username } = useParams();
  const userInfo = useSelector((state) => state.note.users);

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && userInfo.length > 0) {
      const userMatch = userInfo.find((user) =>
        user?.username?.includes(username)
      );

      if (userMatch) {
        setUserData({
          userName: userMatch.username,
          name: userMatch.name,
          emailId: userMatch.email,
          password: userMatch.password,
        });
      } else {
        console.log("No matching user found!");
      }
    } else {
      console.log("Register yourself!!");
    }
  }, [username, userInfo]);

  return (
    <div className="relative flex flex-col justify-center z-10 gap-5 space-y-3 h-full w-screen text-white bg-black/60 p-15">
      <SearchNav />
      <div className="flex w-full gap-5 px-10 lg:px-30">
        <div className="h-50 w-50 bg-red-700 rounded-[50%] ">
          <img
            className="object-cover rounded-[50%]  relative w-full h-full "
            src="https://www.tenforums.com/attachments/user-accounts-family-safety/322690d1615743307t-user-account-image-log-user.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3 p-5">
          <p>Hello, {userData?.name} </p>
          <p>Username : {userData?.userName} </p>
          <p>Email Id : {userData?.emailId} </p>
          <p>Password : {userData?.password} </p>
        </div>
      </div>

      <div className=" flex gap-4 px-10 lg:px-30 w-screen overflow-auto scrollbar-hide">
        <button
          onClick={() => navigate(`/Smtv/${username}`)}
          className="px-4 py-2 rounded-xl"
        >
          Home
        </button>
        <button
          onClick={() => navigate(`/Smtv/${username}/search`)}
          className="px-4 py-2 rounded-xl"
        >
          Search
        </button>
        <button
          onClick={() => navigate(`/Smtv/${username}/favorite`)}
          className="px-4 py-2 rounded-xl"
        >
          Favorite
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
