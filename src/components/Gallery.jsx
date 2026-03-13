import { useMemo } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";

function Gallery({ search, favourites, dispatch }) {
  const { photos, loading, error } = useFetchPhotos();

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {filteredPhotos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          favourites={favourites}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default Gallery