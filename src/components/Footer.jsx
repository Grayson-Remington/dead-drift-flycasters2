import React from 'react';

function Footer() {
	return (
		<div className='pb-6 w-full col-span-full relative flex justify-center'>
			<p className='text-sm opacity-80 bg-white w-fit p-1 rounded self-end'>
				&copy; {new Date().getFullYear()} DeadDriftFlycastersLLC. All
				rights reserved.
			</p>
		</div>
	);
}

export default Footer;
