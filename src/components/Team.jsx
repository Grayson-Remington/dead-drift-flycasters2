import Footer from "./Footer";
import { Squeeze as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Team() {
  return (
    <div className='flex flex-col w-full pt-[78px] px-4 gap-4 bg-yellow-400'>
      <div className='md:grid md:grid-cols-2 md:grid-rows-1 w-full flex flex-col rounded-lg md:p-10 bg-[#e3d2bc] shadow-xl'>
        <div className='row-span-1'>
          <div className='m-8 grid place-items-center'>
            <img
              className='shadow-lg rounded-full max-h-[400px]'
              src='assets/john-fish.jpg'
              alt=''
            />
          </div>
          <div className='grid place-items-center italic w-full relative -top-8'></div>
        </div>

        <div className='flex flex-col relative justify-center p-6'>
          <h1 className='text-6xl relative p-4 text-shadow'>John</h1>
          <h1 className='text-2xl relative pb-1 text-shadow'>
            (The Water Walker)
          </h1>
          <div>
            <p className='relative p-4'>
              Big fish, small fish. It really doesn’t matter. But John does
              prefer to not be skunked. When John is not fishing he is “forest
              bathing”, and in the same light John considers his fishing days to
              be “stream bathing”. Most days John covers miles of streams.
            </p>

            <ul>
              <li>
                <strong>Nymph, Dry, or Streamer:</strong> “Dry - the top water
                action is where it’s at”
              </li>
              <li>
                <strong>Water:</strong> “Small stream”
              </li>
              <li>
                <strong>Fuel:</strong> “Fresh made streamside tacos”
              </li>
              <li>
                <strong>Hydration:</strong> “An ice cold Diet Dr. Pepper”
              </li>
              <li>
                <strong>Weakness:</strong> “Kryptonite!”
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='md:grid md:grid-cols-2 md:grid-rows-1 w-full flex flex-col-reverse rounded-lg md:p-10 bg-[#e3d2bc]'>
        <div className='flex flex-col relative justify-center p-6'>
          <h1 className='text-6xl relative p-4 text-shadow'>Gray</h1>
          <h1 className='text-2xl relative pb-1 text-shadow'>
            (Mr. One & Done)
          </h1>
          <p className='relative p-4'>
            Streamers are the only game in town for Gray. And not just any
            streamer. He religiously uses a #4 black sculpzilla, swinging,
            flipping and casting through every section of the stream. He will
            stay with one fly all day long, but what he won’t do is stay on a
            stream if the fish are not biting.
          </p>
          <ul>
            <li>
              <strong>Nymph, Dry, or Streamer:</strong> “Streamer - my results
              speak for themself”
            </li>
            <li>
              <strong>Water:</strong> “Any moving water that has pockets and
              holes”
            </li>
            <li>
              <strong>Fuel:</strong> “A tasty granola bar”
            </li>
            <li>
              <strong>Hydration:</strong> “Plain Water - does the body good”
            </li>
            <li>
              <strong>Weakness:</strong> “A slow day”
            </li>
          </ul>
        </div>
        <div className=''>
          <div className='m-8 grid place-items-center'>
            <img
              className='shadow-lg rounded-full max-h-[400px]'
              src='assets/gray-fish.jpg'
              alt=''
            />
          </div>
          <div className='grid place-items-center italic w-full relative -top-8'></div>
        </div>
      </div>
      <div className='md:grid md:grid-cols-2 md:grid-rows-1 w-full flex flex-col rounded-lg md:p-10 bg-[#e3d2bc]'>
        <div className='row-span-1'>
          <div className='m-8 grid place-items-center'>
            <img
              className='shadow-lg rounded-full max-h-[400px]'
              src='assets/hans-fish2.jpg'
              alt=''
            />
          </div>
          <div className='grid place-items-center italic w-full relative -top-8'></div>
        </div>

        <div className='flex flex-col relative justify-center p-6'>
          <h1 className='text-6xl relative p-4 text-shadow'>Hans</h1>
          <h1 className='text-2xl relative pb-1 text-shadow'>
            (Mr. BoTangles)
          </h1>
          <p className='relative p-4'>
            Laid back and easy going. That’s the style Hans developed growing up
            casting on the small mountain streams of rural Pennsylvania. Long
            hauls are nothing for this guy. He can shoot that line out to
            targets where most would have to close the gap a bit before giving
            it a try.
          </p>
          <ul>
            <li>
              <strong>Nymph, Dry, or Streamer:</strong> “Dry - isn’t that what
              fly fishing is?”
            </li>
            <li>
              <strong>Water:</strong> “Who cares as long as I can get in a long
              backcast”
            </li>
            <li>
              <strong>Fuel:</strong> “Cliff Bar”
            </li>
            <li>
              <strong>Hydration:</strong> “Any flavored sparkling water”
            </li>
            <li>
              <strong>Weakness:</strong> “Keeping my lines untangled”
            </li>
          </ul>
        </div>
      </div>
      <div className='md:grid md:grid-cols-2 md:grid-rows-1 w-full flex flex-col-reverse rounded-lg md:p-10 bg-[#e3d2bc]'>
        <div className='flex flex-col relative justify-center p-6'>
          <h1 className='text-6xl relative p-4 text-shadow'>Tom</h1>
          <h1 className='text-2xl relative pb-1 text-shadow'>
            (The Tactician)
          </h1>
          <p className='relative p-4'>
            When your introduction to fly fishing starts as a member of the
            Virginia Tech Fly Fishing Club, you are assured to become a
            tactician of the water. Shadow casting, double mending, and bow &
            arrow are all part of Tom’s arsenal as he meticulously works a
            stream.
          </p>
          <ul>
            <li>
              <strong>Nymph, Dry, or Streamer:</strong> “Nymphing - it really
              lets me work the columns”
            </li>
            <li>
              <strong>Water:</strong> “Any water that offers up clean drifts”
            </li>
            <li>
              <strong>Fuel:</strong> “Food”
            </li>
            <li>
              <strong>Hydration:</strong> “An ice cold beer”
            </li>
            <li>
              <strong>Weakness:</strong> “A brew pub within sight”
            </li>
          </ul>
        </div>
        <div className=''>
          <div className='m-8 grid place-items-center'>
            <img
              className='shadow-lg rounded-full max-h-[400px]'
              src='assets/tom-fish.jpg'
              alt=''
            />
          </div>
          <div className='grid place-items-center italic w-full relative -top-8'></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
