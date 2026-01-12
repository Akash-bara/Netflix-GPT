import {  useSelector } from 'react-redux';
import useTrailerVideo from '../CustomHooks/useTrailerVideo';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  
  useTrailerVideo(movieId);

  return (
    <div className="relative w-screen aspect-video overflow-hidden">
      <iframe className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none'
      src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&controls=0&loop=1&playlist=" + trailerVideo?.key }
       title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground;


