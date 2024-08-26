import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar.jsx";
import LatestMusic from "./components/LatestMusic.jsx";
import Footer from "./components/Footer.jsx";
import Popular from "./components/Popular.jsx";
import LiveEvent from "./components/LiveEvent.jsx";
import NewTrends from './components/NewTrends.jsx';
import ArtistAlbums from './components/ArtistUlbums.jsx';
const App = () => {
  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<><LatestMusic /><Popular/><LiveEvent/></>} />
      <Route path="/AllMovies" element={<><NewTrends/></>} />
      <Route path="/artist/:artistId" element={<ArtistAlbums />} />

    </Routes>
    <Footer/>
  </Router>
  )
}

export default App