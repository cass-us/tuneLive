import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CLIENT_ID = "657f69850eff48b4bb582c97dd063b7e";
const CLIENT_SECRET = "be29e4f98785470ea93991835f75435e";

const ArtistAlbums = () => {
  const { artistId } = useParams();  
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [sortOption, setSortOption] = useState('date'); 

  useEffect(() => {

    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then(response => response.json())
      .then(data => {
        setAccessToken(data.access_token);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    if (!accessToken) return;

    const fetchAlbums = async () => {
      const searchParameters = {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + accessToken
        }
      };

      try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`, searchParameters);
        const data = await response.json();
        setAlbums(data.items);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, [accessToken, artistId]);

  // Function to sort albums
  const sortAlbums = (albums) => {
    return albums.sort((a, b) => {
      if (sortOption === 'date') {
        return new Date(b.release_date) - new Date(a.release_date); 
      } else if (sortOption === 'popularity') {
        return b.popularity - a.popularity; 
      }
      return 0;
    });
  };

  const sortedAlbums = sortAlbums([...albums]); 

  return (
    <div className="bg-black bg-opacity-60 h-full flex flex-col justify-center items-center p-4">
      <h1 className="text-white text-2xl mb-4">Albums</h1>

    
      <div className="mb-4">
        <label htmlFor="sort" className="text-white mr-2">Sort by:</label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="date">Release Date</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>

      {sortedAlbums.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {sortedAlbums.map((album) => (
            <div key={album.id} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
              <h2 className="text-white text-lg text-center mb-2">{album.name}</h2>
              {album.images[0] && (
                <img
                  src={album.images[0].url}
                  alt={album.name}
                  className="w-32 h-32 mb-2"
                />
              )}
              <p className="text-gray-400 text-sm">Release Date: {album.release_date}</p>
              {''}
              {album.popularity && <p className="text-gray-400 text-sm">Popularity: {album.popularity}</p>}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">No albums found for this artist.</p>
      )}
    </div>
  );
};

export default ArtistAlbums;
