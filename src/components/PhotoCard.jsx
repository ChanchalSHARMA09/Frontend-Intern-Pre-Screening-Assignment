function PhotoCard({photo}) {
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition'>
        <img 
        src={photo.download_url} 
        alt={photo.author} 
        className='w-full h-60 object-cover'
        />

        <div className='p-3'>
            <p className='text-sm font-semibold text-gray-700'>
                {photo.author}
            </p>
        </div>
    </div>
  );
}

export default PhotoCard
