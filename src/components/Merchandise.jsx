import Footer from "./Footer";
import { Carousel } from "flowbite-react";
export default function Merchandise() {
  return (
    <div className='grid w-full pt-[72px]'>
      <div className='aspect-video'>
        <Carousel slideInterval={5000} className='p-8 aspect-auto'>
          <img src='/assets/gray-fish.jpg' alt='...' />
          <img src='/assets/john-fish.jpg' alt='...' />
          <img src='/assets/hans-fish.jpg' alt='...' />
          <img src='/assets/tom-fish.jpg' alt='...' />
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}
