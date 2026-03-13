function PhotoCard({photo, favourites,dispatch}) {
    const isFavourite=favourites.some((fav)=> fav.id===photo.id)
    const toggleFavourite=()=>{
        if(isFavourite){
            dispatch({type:"REMOVE_FAVOURITE",payload: photo})
            }else {
                dispatch({type:"ADD_FAVOURITE",payload: photo
                })
            }
        }
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden'>
        <img 
        src={photo.download_url} 
        alt={photo.author} 
        className='w-full h-60 object-cover'
        />

        <div className='p-3 flex justify-between items-center'>
            <p className='text-sm font-semibold text-gray-700'>
                {photo.author}
            </p>
            <button onClick={toggleFavourite} className="text-xl">
                {isFavourite?"Liked":"Like"}
            </button>
        </div>
    </div>
  );
}

export default PhotoCard
