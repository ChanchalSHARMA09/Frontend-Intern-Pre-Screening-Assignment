import "./index.css";
import { useState, useReducer, useEffect } from "react";
import Gallery from "./components/Gallery";
import { favouritesReducer } from "./reducer/favouritesReducer";

function App() {
  const [search, setSearch] = useState(" ");
  const [favourites, dispatch] = useReducer(favouritesReducer, [],()=>{
    const saved=localStorage.getItem("favourites")
    return saved?JSON.parse(saved):[];
  }
);

  useEffect(()=>{
    localStorage.setItem("favourites",JSON.stringify(favourites));
  },[favourites])
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-6">Photo Gallery</h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by author..."
          className="border p-2 rounded-lg w-80"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Gallery search={search} favourites={favourites} dispatch={dispatch} />
    </div>
  );
}

export default App;
