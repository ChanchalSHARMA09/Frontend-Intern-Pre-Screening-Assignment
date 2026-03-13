import { useEffect, useState } from "react";
import axios from "axios";
export default function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await axios.get(
          "https://picsum.photos/v2/list?limit=30",
        );
        setPhotos(response.data);
      } catch (error) {
        setError(`failed to get photos: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  return { photos, loading, error };
}
