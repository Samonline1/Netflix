it will fecth data fromm api and gives evrything you need to know about that from name, release year, ott avaiable, next part, shorts summary, cast and also about actors and atress who performed and as known as name, you can make your account there is authentication for users so they can save favorite movies and stuff

git clone https://github.com/yourusername/project-name.git

# Netflix Clone (Smtv)

A responsive React-based Netflix-style UI that lets users search TV shows, actors, and anime (via public APIs), view details, and save favorites.

This project uses the TVMaze and Jikan APIs to fetch show, people, and anime data and provides search, details, actor pages, favorites, and simple user management stored in Redux state.

Live demo: https://samonline1.github.io/Netflix/ (deployed via `gh-pages`)

---

## Key Features

- Search across TV shows, actors, and anime (integrates TVMaze & Jikan APIs)
- Debounced auto-search while typing and Enter-key immediate search
- Filter search by Content / Actors / Anime / All
- Show details page for shows and anime, actor details page
- Favorites per user (stored in Redux state) with add/remove
- Responsive layout and Tailwind CSS styling

---

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Redux Toolkit (for simple user/favorites state)
- React Router
- React Icons
- React Toastify

---

## Project Structure (important files)

- `src/` — main source
	- `components/` — React components (Home, Search, MovieDetails, Actor, Profile, Favorite, Login, etc.)
	- `redux/` — `featureSlice.js`, `store.js` (users and favorites state)
	- `assets/` — static assets
	- `main.jsx`, `App.jsx` — app entry and routing

---

## Scripts

From `package.json`:

- `npm run dev` — Start development server (Vite)
- `npm run build` — Create production build
- `npm run preview` — Preview production build locally
- `npm run deploy` — Deploy `dist` to GitHub Pages (`gh-pages`), `predeploy` runs build first

---

## Installation

1. Clone the repo

```bash
git clone https://github.com/samonline1/Netflix.git
cd Netflix
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

Open http://localhost:5173 (or the URL Vite prints) in your browser.

---

## Usage Notes

- Type in the search box to trigger a debounced auto-search (500ms). Press Enter to run immediately.
- Use the filter select to restrict results to Content, Actors, or Anime.
- Click a result to navigate to details pages. Add to favorites using the heart controls.
- User state (including favorites) is stored in Redux; there is no external auth backend in this repo.

---

## APIs Used

- TVMaze: https://www.tvmaze.com/api
- Jikan (MyAnimeList): https://jikan.moe/

---

## Contributing

Contributions, issues and feature requests are welcome. Please fork the repository and open a pull request.

---

## License

This project is provided as-is for learning/demonstration purposes. Add a license if you plan to publish or distribute.

---

## Contributing
Contributions are welcome!  
Feel free to fork the repo and submit a pull request.

---

## Contact
Sameer Hussain
Frontend Developer  
LinkedIn: https://www.linkedin.com/in/sameer-hussain-6829222a6 
Portfolio: https://samonline1.github.io/Portfolio/

---

 If you like this project, give it a star!
