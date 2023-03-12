import Footer from "./Footer";
import React, { useRef, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
export default function Home() {
  const videoRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const handlePlayButtonClick = () => {
    videoRef.current.play();
    setShowPlayButton(false);
  };
  return (
    <div className='flex bg-[cover] h-full overflow-y-auto background-image'>
      <div className='flex flex-col lg:grid lg:grid-cols-2 pt-[72px] h-full'>
        <div className='p-4 h-full justify-center items-center text-center text-white relative pt-8'>
          <h1>
            <strong className='italic text-5xl text-shadow'>Welcome!</strong>
          </h1>
          <p className='relative sm:text-4xl text-3xl text-shadow m-10'>
            Dead Drift Flycasters is a team of passionate anglers who travel
            around the US exploring various waterways.
          </p>
        </div>
        <div className='w-full h-full relative m-auto'>
          <div className='video-container p-8'>
            <iframe
              className='bg-black w-full max-w-4xl h-full aspect-video rounded-xl relative '
              src='https://www.youtube.com/embed/55ULxYpWnws'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen></iframe>
            {/*  <video
              ref={videoRef}
              poster='assets/poster_fish.jpg'
              onPlay={() => setShowPlayButton(false)}
              id='my-video'
              className='bg-black w-full max-w-4xl h-full aspect-video rounded-xl relative'
              controls>
              <source src={"assets/WY2022.mp4"} type='video/mp4' />
            </video>*/}
            {showPlayButton && (
              <button id='play-button' onClick={handlePlayButtonClick}>
                <AiFillPlayCircle />
              </button>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
