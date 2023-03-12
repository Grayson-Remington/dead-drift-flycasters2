import Footer from "./Footer";

export default function Videos() {
  return (
    <div className='flex flex-col w-full justify-center items-center pt-[72px]'>
      <h1 className='text-2xl m-8'>Zirkles 2022</h1>
      <iframe
        className='w-[90%] max-w-4xl h-full aspect-video rounded-xl relative'
        title='vimeo-player'
        src='https://player.vimeo.com/video/804065431?h=d86cbddfdc'
        allowfullscreen></iframe>

      <h1 className='text-2xl m-8'>Wyoming 2022</h1>
      <iframe
        className='w-[90%] max-w-4xl h-full aspect-video rounded-xl relative'
        src='https://www.youtube.com/embed/55ULxYpWnws'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>

      <h1 className='text-2xl m-8'>Montana 2021</h1>
      <iframe
        className='w-[90%] max-w-4xl h-full aspect-video rounded-xl relative'
        title='vimeo-player'
        src='https://player.vimeo.com/video/628713272?h=b3d409d659'
        frameborder='0'
        allowfullscreen></iframe>

      <h1 className='text-2xl m-8'>Montana 2018</h1>
      <iframe
        className='w-[90%] max-w-4xl h-full aspect-video rounded-xl relative'
        title='vimeo-player'
        src='https://player.vimeo.com/video/804080430?h=ab5e0d719b'
        frameborder='0'
        allowfullscreen></iframe>
      <Footer />
    </div>
  );
}

{
  /*
   <iframe
        className='w-full max-w-4xl h-full aspect-video rounded-xl relative m-12'
        src='https://www.youtube.com/embed/55ULxYpWnws?controls=0'></iframe>
      <iframe
        className='w-full max-w-4xl h-full aspect-video rounded-xl relative m-12'
        src='https://www.youtube.com/embed/0W1s1W0GaGQ'></iframe>
      <iframe
        className='w-full max-w-4xl h-full aspect-video rounded-xl relative m-12'
        src='https://www.youtube.com/embed/PMOA1w915yw'></iframe>
  */
}
