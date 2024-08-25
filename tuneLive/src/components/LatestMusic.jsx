import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const CLIENT_ID = "657f69850eff48b4bb582c97dd063b7e";
const CLIENT_SECRET = "be29e4f98785470ea93991835f75435e";

const LatestMusic = () => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // Fetch Spotify API token
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setAccessToken(data.access_token);
        console.log('Spotify Access Token:', data.access_token);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const search = async () => {
    console.log('Searching for:', searchInput);
    if (!searchInput) return;

    const searchParameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    };

    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchInput)}&type=artist&limit=5`, searchParameters);
      const data = await response.json();
      setArtists(data.artists.items);
      console.log('Artists found:', data.artists.items);
    } catch (error) {
      console.error('Error fetching artists:', error);
    }
  };

  return (
    <div className="bg-black bg-opacity-60 h-1/2 gap-2 flex flex-col justify-center items-center p-4">
      <div className="flex items-center mb-4 gap-2 pt-2">
        <input
          type="text"
          placeholder="Search for an artist"
          className="p-2 border border-gray-300 rounded-l"
          onKeyPress={event => {
            if (event.key === "Enter") {
              search();
            }
          }}
          onChange={event => setSearchInput(event.target.value)}
        />
        <button
          onClick={search}
          className="bg-red-500 text-white px-4 py-2 rounded-r"
        >
          Search
        </button>
      </div>

      <div className="text-white">
        {artists.length > 0 ? (
          <ul>
            {artists.map((artist) => (
              <li key={artist.id} className="mb-2 flex items-center gap-4">
                {artist.images[0] && (
                  <img
                    src={artist.images[0].url}
                    alt={artist.name}
                    className="w-16 h-16 rounded-full"
                  />
                )}
                <div>
                  {/* Add a Link component to navigate to the ArtistAlbums page */}
                  <Link to={`/artist/${artist.id}`} className="text-blue-500 hover:underline">
                    <h2 className="text-xl">{artist.name}</h2>
                  </Link>
                  {artist.disambiguation && <p>{artist.disambiguation}</p>}
                  {artist.type && <p>Type: {artist.type}</p>}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No artists found.</p>
        )}
      </div>
    </div>
  );
};

export default LatestMusic;
