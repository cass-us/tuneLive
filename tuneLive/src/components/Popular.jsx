import kdot from '../assets/kdot.jpg';
import twenty from '../assets/drake.jpeg';
import drake from '../assets/21.jpg';
import travis from '../assets/travis.jpeg';
const Popular = () => {
  return (
    <>
    <div className='bg-black m-0 p-2' >
 <div className=' justify-center items-center text-center text-3xl  font-bold decoration-dashed'>
    <h2 className='text-white p-2'>Most Played Ulbums</h2>
 </div>
 <div className='flex p-2 gap-x-4 items-center justify-center'>
   <div  className="w-[350px] h-96  rounded-sm  bg-cover bg-center"
    style={{ backgroundImage: `url(${kdot})` }}>
    <div className='bg-black opacity-60 mt-52 w-[350px]'>
         <h2 className='font-bold text-center text-white'>Kendrick Lamar</h2>
         <p className='text-white text-center m-1 p-1'>Mr. Morale & The Big Steppers</p>
      <div>
        <p  className='text-white ml-3 p-0'>
        Mr. Morale & the Big Steppers is the fifth studio album by American rapper Kendrick 
        Lamar, released on May 13, 2022, by PGLang, Top Dawg Entertainment (TDE), Aftermath Entertainment
        </p>
      </div>
     </div>
    
</div>
<div  className="w-[350px] h-96 rounded-sm  bg-cover bg-center"
    style={{ backgroundImage: `url(${travis})` }}>
    <div className='bg-black opacity-60 mt-52 w-[350px]'>
         <h2 className='font-bold text-center text-white'>Travis Scott</h2>
         <p className='text-white text-center m-1 p-1'>Mr. Morale & The Big Steppers</p>
      <div>
        <p  className='text-white ml-3 p-0'>
        Mr. Morale & the Big Steppers is the fifth studio album by American rapper Kendrick 
        Lamar, released on May 13, 2022, by PGLang, Top Dawg Entertainment (TDE), Aftermath Entertainment
        </p>
      </div>
     </div>
    
</div>
<div  className="w-[350px] h-96 rounded-sm  bg-cover bg-center"
    style={{ backgroundImage: `url(${drake})` }}>
    <div className='bg-black opacity-60 mt-52 w-[350px]'>
         <h2 className='font-bold text-center text-white'>21 Savage</h2>
         <p className='text-white text-center m-1 p-1'>Mr. Morale & The Big Steppers</p>
      <div>
        <p  className='text-white ml-3 p-0'>
        Mr. Morale & the Big Steppers is the fifth studio album by American rapper Kendrick 
        Lamar, released on May 13, 2022, by PGLang, Top Dawg Entertainment (TDE), Aftermath Entertainment
        </p>
      </div>
     </div>
    
</div>
<div  className="w-[350px] h-96 rounded-sm  bg-cover bg-center"
    style={{ backgroundImage: `url(${twenty})` }}>
    <div className='bg-black opacity-60 mt-52 w-[350px]'>
         <h2 className='font-bold text-center text-white'>Drake</h2>
         <p className='text-white text-center m-1 p-1'>Mr. Morale & The Big Steppers</p>
      <div>
        <p  className='text-white ml-3 p-0'>
        Mr. Morale & the Big Steppers is the fifth studio album by American rapper Kendrick 
        Lamar, released on May 13, 2022, by PGLang, Top Dawg Entertainment (TDE), Aftermath Entertainment
        </p>
      </div>
     </div>
    
</div>
</div>
   <br/>
   <br/>
    </div>
    </>
    
   
  )
}

export default Popular