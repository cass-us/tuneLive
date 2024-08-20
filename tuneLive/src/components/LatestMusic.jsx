import music from '../assets/latest-music.jpg';

const LatestMusic = () => {
  return (
    <div className="bg-no-repeat p-0 m-0 bg-cover bg-center h-screen"
    style={{ backgroundImage: `url(${music})` }}
    >LatestMusic</div>
  )
}

export default LatestMusic