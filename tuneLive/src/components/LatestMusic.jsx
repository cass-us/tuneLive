import search from "../assets/search.png";
const LatestMusic = () => {
    return (
        <>
        <div className="bg-black bg-opacity-60 h-1/2 flex justify-center items-center">
        <div className="p-4 m-4">
          <input 
            type="search" 
            placeholder="Search" 
            className="p-3 w-[350px]  bg-gray-800 text-white border border-gray-600 focus:outline-none  rounded-full "
          />
        </div>
        <img  src={search} className="w-8"/>
      </div></>
      
    );
  }
  
  export default LatestMusic;
  