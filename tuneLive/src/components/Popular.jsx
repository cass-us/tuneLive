
import kdot from '../assets/kdot.jpg';
import twenty from '../assets/drake.jpeg';
import drake from '../assets/21.jpg';
import travis from '../assets/travis.jpeg';

const Popular = () => {
  return (
    <div className="bg-black p-4 opacity-90">
      <div className="text-center text-3xl font-bold decoration-dashed">
        <h2 className="text-white p-2">Most Played Albums</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-2">
        <div
          className="w-[350px] h-96 rounded-sm bg-cover bg-center"
          style={{ backgroundImage: `url(${kdot})` }}
        >
          <div className="bg-black opacity-60 h-full flex flex-col justify-end p-4">
            <h2 className="font-bold text-center text-white">Kendrick Lamar</h2>
            <p className="text-white text-center m-1 p-1">Mr. Morale & The Big Steppers</p>
            <p className="text-white text-sm text-center">
              Mr. Morale & the Big Steppers is the fifth studio album by American rapper Kendrick 
              Lamar, released on May 13, 2022, by PGLang, Top Dawg Entertainment (TDE), Aftermath Entertainment.
            </p>
          </div>
        </div>

        <div
          className="w-[350px] h-96 rounded-sm bg-cover bg-center "
          style={{ backgroundImage: `url(${travis})` }}
        >
          <div className="bg-black opacity-60  hover:bg-black  h-full flex flex-col justify-end p-4">
            <h2 className="font-bold text-center text-white">Travis Scott</h2>
            <p className="text-white text-center m-1 p-1">Utopia</p>
            <p className="text-white text-sm text-center">
              Utopia is the latest studio album by American rapper Travis Scott, exploring new sounds and themes.
            </p>
          </div>
        </div>

        <div
          className="w-[350px] h-96 rounded-sm bg-cover bg-center"
          style={{ backgroundImage: `url(${drake})` }}
        >
          <div className="bg-black opacity-60 h-full flex flex-col justify-end p-4">
            <h2 className="font-bold text-center text-white">21 Savage</h2>
            <p className="text-white text-center m-1 p-1">Savage Mode II</p>
            <p className="text-white text-sm text-center">
              Savage Mode II is the second collaborative studio album by Atlanta-based rapper 21 Savage and American record producer Metro Boomin.
            </p>
          </div>
        </div>

        <div
          className="w-[350px] h-96 rounded-sm bg-cover bg-center"
          style={{ backgroundImage: `url(${twenty})` }}
        >
          <div className="bg-black opacity-60 h-full flex flex-col justify-end p-4">
            <h2 className="font-bold text-center text-white">Drake</h2>
            <p className="text-white text-center m-1 p-1">Certified Lover Boy</p>
            <p className="text-white text-sm text-center">
              Certified Lover Boy is the sixth studio album by Canadian rapper and singer Drake, released on September 3, 2021.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
