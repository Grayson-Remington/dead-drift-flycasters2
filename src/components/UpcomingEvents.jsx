import React from 'react';
import Footer from './Footer';
function UpcomingEvents() {
	return (
		<div className='flex flex-col item-center justify-center pt-[72px] h-full'>
			<iframe
				className='self-center w-full max-w-2xl h-full p-10 aspect-square'
				src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fconejosriveranglers%2Fposts%2F570068585132799&show_text=true&width=500'
				allowfullscreen='true'
				allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
			></iframe>
			<Footer />
		</div>
	);
}

export default UpcomingEvents;
