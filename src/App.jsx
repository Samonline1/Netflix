import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Home from './components/Home';
import Smtv from "./components/Smtv";
import Actor from "./components/Actor";
import Favorite from "./components/Favorite";
import Login from "./components/Login";
import SmtvLanding from "./components/SmtvLanding";
import SmtvSearch from "./components/SmtvSearch";
import MovieDetails from "./components/MovieDetails";
import DefaultHome from "./components/DefaultHome";
import NotFound from "./components/NotFound";
import Footer from "./components/footer";
import Anime from "./components/Anime";
import Profile from "./components/Profile";

let router = createBrowserRouter([
  {
    path: "/",
    element: <SmtvLanding />
  },
  
    {
    path: "/Smtv/:username",
    element: (
      <div>
        <Smtv />
      </div>
    )
  },
    {
    path: "/Smtv/auth",
    element: (
      <div>
        <Login />
      </div>
    )
  },
  {
    path:"/Smtv/:username/search",
    element:(
      <div>
        <SmtvSearch/>
        <DefaultHome />
        <Footer />
      </div>
    )
  },
  {
    path:"/Smtv/profile/:username",
    element:(
      <div>
        <Profile/>
      </div>
    )
  }
  ,
  {
    path:"/Smtv/:username/search/:keyword",
    element:(
      <div>
        <SmtvSearch/>
        <DefaultHome />
        <Footer />
      </div>
    )
  },
  {
    path: "/Smtv/:username/details/:id",
    element: (
      <div>
        <MovieDetails />
        <Footer />
      </div>
    )
  },
  {
    path: "/Actor/:username/:id", // ID from params
    element: (
      <div>
        <Actor/>
      </div>
    )
  },
  {
    path: "/Smtv/:username/anime/:id",
    element: (
      <div>
        <Anime />
        <Footer />
      </div>
    )
  },
  {
    path: "/Smtv/:username/favorite",
    element: (
      <div>
        <Favorite/>
      </div>
    )
  },
  {
    path: "/*",
    element:<NotFound/>

  }
]);

const App = () => {
  return <RouterProvider router={router} />
  ;
};

export default App;
